import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconComponent from "@/components/IconComponent";
import Sidebar from "@/components/Sidebar";

const HeaderMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="btn btn-ghost flex items-center gap-1">
        <IconComponent name="menu" className="text-2xl" />
        <span className="hidden sm:block text-lg font-semibold">Menu</span>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-80" overlay>
        <SheetHeader>
          <SheetTitle className="text-primary">Project Munch</SheetTitle>
        </SheetHeader>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMenu;
