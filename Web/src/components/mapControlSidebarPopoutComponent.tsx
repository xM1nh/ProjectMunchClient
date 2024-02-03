import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import IconComponent from "./iconComponent";
import { Combobox } from "@headlessui/react";
import { useState } from "react";

const MapControlSidebarPopoutComponent = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex flex-col justify-center items-center gap-0 text-slate-500 text-center px-2">
        <IconComponent name="bookmark" />
        <span className="text-xs font-semibold">Saved</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="right"
          sideOffset={9}
          onInteractOutside={(e) => e.preventDefault()}
          className="h-screen w-96 bg-white outline outline-1 outline-gray-300 shadow-md shadow-black-500/40 z-10"
        >
          <Combobox>
            <div className="flex flex-col gap-1 absolute top-4 left-5 outline-gray-300">
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
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default MapControlSidebarPopoutComponent;
