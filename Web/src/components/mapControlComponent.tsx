import MapControlSearchBarComponent from "./mapControlSearchBarComponent";
import MapControlSmallSidebarComponent from "./mapControlSmallSidebarComponent";

const MapControlComponent = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full">
      <MapControlSmallSidebarComponent />
      <MapControlSearchBarComponent />
    </div>
  );
};

export default MapControlComponent;
