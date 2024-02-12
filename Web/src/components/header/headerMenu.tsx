import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import IconComponent from "@/components/iconComponent";
import Sidebar from "@/components/sidebar";

const HeaderMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="btn btn-ghost flex items-center gap-1">
        <IconComponent name="menu" className="text-2xl" />
        <span className="text-lg font-semibold">Menu</span>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-80">
        <SheetHeader>
          <SheetTitle className="text-primary">Project Munch</SheetTitle>
        </SheetHeader>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default HeaderMenu;
