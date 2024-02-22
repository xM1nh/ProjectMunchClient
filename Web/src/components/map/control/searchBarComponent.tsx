import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverPortal } from "@radix-ui/react-popover";
import { useEffect, useRef, useState } from "react";
import IconComponent from "@/components/iconComponent";
import AllFilterButton from "./allFilterButton";

const MapControlSearchBarComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [dropdownWidth, setDropdownWidth] = useState(0);

  useEffect(() => {
    setDropdownWidth(containerRef.current?.offsetWidth as number);
    const getWidth = () => {
      setDropdownWidth(containerRef.current?.offsetWidth as number);
    };
    window.addEventListener("resize", getWidth);

    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <Command
      className="m-4 rounded-2xl w-full sm:w-1/2 lg:w-96 z-10 shadow-md"
      ref={containerRef}
    >
      <form className="flex items-center justify-end px-2">
        <CommandInput
          ref={inputRef}
          className="w-full btn-md"
          placeholder="Search Munch..."
          onFocus={() => {
            triggerRef.current?.click();
          }}
        />
        <button
          className="flex justify-center items-center btn btn-ghost rounded-none px-2"
          type="submit"
        >
          <IconComponent name="search" />
        </button>
        <AllFilterButton className="flex justify-center items-center btn btn-ghost rounded-none pl-2 pr-3 sm:hidden" />
      </form>
      <Popover>
        <PopoverTrigger asChild>
          <div ref={triggerRef} role="button"></div>
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent
            className="rounded-2xl w-fit px-0"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
            onInteractOutside={(e) => {
              if (e.target == inputRef.current) {
                e.preventDefault();
              }
            }}
          >
            <CommandList className="" style={{ width: dropdownWidth }}>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Recents">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
            </CommandList>
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </Command>
  );
};

export default MapControlSearchBarComponent;
