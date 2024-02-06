import MapControlSearchBarComponent from "./mapControlSearchBarComponent";
import MapControlSidebarPopoutComponent from "./mapControlSidebarPopoutComponent";
import MapControlSmallSidebarComponent from "./mapControlSmallSidebarComponent";

const MapControlComponent = () => {
  return (
    <div>
      <div className="fixed flex top-0 left-0 h-full w-fit">
        <MapControlSmallSidebarComponent />
        <div className="flex flex-col">
          <MapControlSearchBarComponent />
          <MapControlSidebarPopoutComponent />
        </div>
      </div>
    </div>
  );
};

export default MapControlComponent;
