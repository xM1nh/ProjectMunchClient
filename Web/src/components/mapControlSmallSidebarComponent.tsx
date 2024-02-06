import { HTMLAttributes, forwardRef } from "react";
import IconComponent from "./iconComponent";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MapControlLargeSidebarComponent from "./mapControlLargeSidebarComponent";

const MapControlSmallSidebarComponent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "menu bg-white w-fit h-full outline outline-1 outline-gray-300 shadow-md shadow-black-500/40",
        className
      )}
      {...props}
    >
      <li className="w-full">
        <Sheet>
          <SheetTrigger className="mt-4">
            <div className="flex flex-col justify-center items-center gap-0 text-slate-500 px-2 ">
              <IconComponent name="menu" />
            </div>
          </SheetTrigger>
          <SheetContent side={"left"} className="w-80">
            <SheetHeader>
              <SheetTitle className=" text-slate-600">Project Munch</SheetTitle>
            </SheetHeader>
            <MapControlLargeSidebarComponent />
          </SheetContent>
        </Sheet>
      </li>

      <li className="w-full">
        <div className="flex flex-col justify-center items-center gap-0 text-slate-500 text-center px-2 mt-4">
          <IconComponent name="bookmark" />
          <span className="text-xs font-semibold">Saved</span>
        </div>
      </li>

      <li className="w-full">
        <div className="flex flex-col justify-center items-center gap-0 text-slate-500 text-center px-2 mt-4">
          <IconComponent name="history" />
          <span className="text-xs font-semibold">Recents</span>
        </div>
      </li>
    </div>
  );
});

export default MapControlSmallSidebarComponent;
