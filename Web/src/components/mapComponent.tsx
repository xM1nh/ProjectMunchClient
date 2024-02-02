import Map, { MapRef } from "react-map-gl";
import MapControlSmallSidebarComponent from "./mapControlSmallSidebarComponent";
import { useCallback, useEffect, useRef } from "react";

const MapComponent = () => {
  const mapRef = useRef<MapRef>(null);

  const onLocationSuccess = useCallback((position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    mapRef.current?.flyTo({ center: [long, lat], duration: 3000 });
  }, []);

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
  }, [onLocationSuccess]);

  return (
    <>
      <MapControlSmallSidebarComponent />
      <Map
        ref={mapRef}
        mapboxAccessToken="pk.eyJ1IjoidmFsdGlsaW9uIiwiYSI6ImNsczFibHY3cjA5aHAyanBlMnhwNm1jczEifQ.XAwnmiedi4X03hw5MyxBuA"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      />
    </>
  );
};

export default MapComponent;
