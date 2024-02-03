import IconComponent from "./iconComponent";

const MapControlSearchBarComponent = () => {
  return (
    <div className="dropdown absolute top-4 left-24">
      <div className="flex flex-row justify-between items-center gap-8 rounded-xl px-4 shadow-md bg-white">
        <input
          type="search"
          placeholder="Search"
          className="input input-ghost focus:outline-none focus-within:outline-none focus:border-none"
        />
        <button className="btn no-animation btn-ghost relative hover:bg-transparent focus:bg-transparent">
          <IconComponent name="search" />
        </button>
      </div>
    </div>
  );
};

export default MapControlSearchBarComponent;
