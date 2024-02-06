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
import { useRef, useState } from "react";
import IconComponent from "./iconComponent";

const MapControlSearchBarComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Command className="h-fit m-4 rounded-2xl w-fit z-10">
      <form
        className="flex items-center w-full pl-2"
        onSubmit={() => console.log("submmittd")}
      >
        <CommandInput
          ref={inputRef}
          className="w-64"
          placeholder="Search Munch..."
          onFocus={() => {
            triggerRef.current?.click();
          }}
        />
        <button className="flex justify-center items-center" type="submit">
          <IconComponent name="search" className="px-4" />
        </button>
      </form>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div ref={triggerRef} role="button"></div>
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent
            className="rounded-2xl w-fit px-0"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onCloseAutoFocus={(e) => e.preventDefault()}
            onEscapeKeyDown={(e) => e.preventDefault()}
            onInteractOutside={(e) => {
              if (e.target == inputRef.current) {
                e.preventDefault();
              }
            }}
          >
            <CommandList className="w-80 mx-3">
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
