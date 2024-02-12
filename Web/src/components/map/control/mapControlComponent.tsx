import MapControlFilterComponent from "./filterComponent";
import MapControlSearchBarComponent from "./searchBarComponent";

const MapControlComponent = () => {
  return (
    <div className="flex absolute w-full h-full">
      <div className="flex h-fit items-center gap-12 w-full ">
        <MapControlSearchBarComponent />
        <MapControlFilterComponent />
      </div>
    </div>
  );
};

export default MapControlComponent;
