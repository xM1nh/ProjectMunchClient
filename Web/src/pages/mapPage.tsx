import MapComponent from "../components/mapComponent";
import MapControlComponent from "../components/mapControlComponent";
import MapControlLargeSidebarComponent from "../components/mapControlLargeSidebarComponent";

const MapPage = () => {
  return (
    <div className="drawer">
      <input id="map-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <MapControlComponent />
        <MapComponent />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="map-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <MapControlLargeSidebarComponent />
      </div>
    </div>
  );
};

export default MapPage;
