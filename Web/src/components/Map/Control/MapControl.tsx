import FilterBar from "@/components/Map/Control/FilterBar";
import SearchBar from "@/components/Map/Control/SearchBar";

const MapControl = () => {
  return (
    <div className="flex absolute w-full h-full ">
      <div className="flex flex-row items-center w-full h-fit gap-0 sm:flex-col sm:items-start lg:flex-row lg:items-center lg:gap-4">
        <SearchBar />
        <FilterBar />
      </div>
    </div>
  );
};

export default MapControl;
