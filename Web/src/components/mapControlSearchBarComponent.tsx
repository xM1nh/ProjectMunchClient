import { useState } from "react";
import IconComponent from "./iconComponent";
import { Combobox } from "@headlessui/react";

const MapControlSearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <Combobox>
      <div className="flex flex-col gap-1 absolute top-4 left-24 outline-gray-300">
        <div className="flex flex-row justify-between items-center gap-8 rounded-xl px-4 shadow-md bg-white">
          <Combobox.Input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="input input-ghost focus:outline-none focus-within:outline-none focus:border-none"
          />
          <button className="btn no-animation btn-ghost relative hover:bg-transparent focus:bg-transparent">
            <IconComponent name="search" />
          </button>
        </div>
        <Combobox.Options className="menu relative bg-white rounded-xl px-4 shadow-md">
          <Combobox.Option value={1}>1</Combobox.Option>
          <Combobox.Option value={1}>1</Combobox.Option>
          <Combobox.Option value={1}>1</Combobox.Option>
          <Combobox.Option value={1}>1</Combobox.Option>
          <Combobox.Option value={1}>1</Combobox.Option>
        </Combobox.Options>
      </div>
    </Combobox>
  );
};

export default MapControlSearchBarComponent;
