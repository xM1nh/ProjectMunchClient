import Map, {
  MapLayerMouseEvent,
  MapRef,
  NavigationControl,
} from "react-map-gl";
import { useEffect, useMemo, useRef, useState } from "react";
import PointOfInterest from "./pointOfInterest/pointOfInterest";
import { TCoordinates, TPointOfInterest } from "@/types";

const ZOOM = 14;

const MapComponent = ({
  pointOfInterests,
}: {
  pointOfInterests: TPointOfInterest[];
}) => {
  const mapRef = useRef<MapRef>(null);
  const [isMouseEventsEnable, setIsMouseEventsEnable] = useState(true);
  const [userAddedMarkerCoords, setUserAddedMarkerCoords] =
    useState<TCoordinates | null>(null);

  const onLocationSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    mapRef.current?.easeTo({ center: [long, lat], duration: 3000 });
  };

  const onLocationError = () => {
    console.log("Unable to retrieve your location");
  };

  const handleMapClick = (e: MapLayerMouseEvent) => {
    if (userAddedMarkerCoords) {
      setUserAddedMarkerCoords({
        longitude: e.lngLat.lng,
        latitude: e.lngLat.lat,
      });
    } else {
      setUserAddedMarkerCoords(null);
    }
  };

  const addedMarkerData: TPointOfInterest = {
    longitude: userAddedMarkerCoords?.longitude as number,
    latitude: userAddedMarkerCoords?.latitude as number,
    name: "",
    description: "",
  };
  const userAddedMarker = <PointOfInterest data={addedMarkerData} />;

  const markers = useMemo(
    () =>
      pointOfInterests.map((poi, i) => {
        return (
          <PointOfInterest
            data={poi}
            key={i}
            onMouseEnter={() => setIsMouseEventsEnable(false)}
            onMouseLeave={() => setIsMouseEventsEnable(true)}
            onClick={() => {
              if ((mapRef.current?.getZoom() as number) < ZOOM) {
                mapRef.current?.flyTo({
                  center: [poi.longitude, poi.latitude],
                  duration: 3000,
                  zoom: ZOOM,
                });
              }
            }}
          />
        );
      }),
    [pointOfInterests]
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onLocationSuccess,
        onLocationError
      );
    }
  }, []);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken="pk.eyJ1IjoidmFsdGlsaW9uIiwiYSI6ImNsczFibHY3cjA5aHAyanBlMnhwNm1jczEifQ.XAwnmiedi4X03hw5MyxBuA"
      initialViewState={{
        longitude: -117.9,
        latitude: 33.7,
        zoom: ZOOM,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      doubleClickZoom={isMouseEventsEnable}
      onClick={handleMapClick}
    >
      {markers}
      {userAddedMarkerCoords && userAddedMarker}
      <NavigationControl position="bottom-right" />
    </Map>
  );
};

export default MapComponent;
