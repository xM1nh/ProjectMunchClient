import Map, { MapRef, NavigationControl } from "react-map-gl";
import { useEffect, useRef, useState } from "react";
import PointOfInterest from "./pointOfInterest/pointOfInterest";
import IPointOfInterest from "@/interfaces/IPointOfInterest";

const ZOOM = 14;

const MOCK_DATA: IPointOfInterest[] = [
  {
    longtitude: -117.9,
    latitude: 33.7,
    name: "Home",
    description: "home",
    reviews: 1,
    photos: [],
  },
  {
    longtitude: -118.9,
    latitude: 33.7,
    name: "Home",
    description: "home",
    reviews: 1,
    photos: [],
  },
  {
    longtitude: -119.9,
    latitude: 33.7,
    name: "Home",
    description: "home",
    reviews: 1,
    photos: [],
  },
  {
    longtitude: -120.9,
    latitude: 33.7,
    name: "Home",
    description: "home",
    reviews: 1,
    photos: [],
  },
];

const MapComponent = () => {
  const mapRef = useRef<MapRef>(null);
  const [isMouseEventsEnable, setIsMouseEventsEnable] = useState<boolean>(true);

  const onLocationSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    mapRef.current?.easeTo({ center: [long, lat], duration: 3000 });
  };

  const onLocationError = () => {
    console.log("Unable to retrieve your location");
  };

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
        longitude: -122.4,
        latitude: 37.8,
        zoom: ZOOM,
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      boxZoom={isMouseEventsEnable}
      doubleClickZoom={isMouseEventsEnable}
      dragRotate={isMouseEventsEnable}
      dragPan={isMouseEventsEnable}
      keyboard={isMouseEventsEnable}
      scrollZoom={isMouseEventsEnable}
      touchPitch={isMouseEventsEnable}
      touchZoomRotate={isMouseEventsEnable}
    >
      {MOCK_DATA.map((poi, i) => {
        return (
          <PointOfInterest
            data={poi}
            key={i}
            onMouseEnter={() => setIsMouseEventsEnable(false)}
            onMouseLeave={() => setIsMouseEventsEnable(true)}
            onBlur={() => setIsMouseEventsEnable(true)}
            onClick={() => {
              if ((mapRef.current?.getZoom() as number) < ZOOM) {
                mapRef.current?.flyTo({
                  center: [poi.longtitude, poi.latitude],
                  duration: 3000,
                  zoom: ZOOM,
                });
              }
            }}
          />
        );
      })}
      <NavigationControl />
    </Map>
  );
};

export default MapComponent;
