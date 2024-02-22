import MapControlFilterComponent from "./filterComponent";
import MapControlSearchBarComponent from "./searchBarComponent";

const MapControlComponent = () => {
  return (
    <div className="flex absolute w-full h-full ">
      <div className="flex flex-row items-center w-full h-fit gap-0 sm:flex-col sm:items-start lg:flex-row lg:items-center lg:gap-4">
        <MapControlSearchBarComponent />
        <MapControlFilterComponent />
      </div>
    </div>
  );
};

export default MapControlComponent;
