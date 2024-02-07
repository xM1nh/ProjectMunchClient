import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import IconComponent from "./iconComponent";
import Sidebar from "./sidebar";

const Header = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="navbar w-screen">
        <div className="navbar-start">
          <NavigationMenuItem>
            <Sheet>
              <SheetTrigger className=" flex items-center gap-1">
                <IconComponent name="menu" className="text-2xl" />
                <span className="text-lg font-semibold">Menu</span>
              </SheetTrigger>
              <SheetContent side={"left"} className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-primary">
                    Project Munch
                  </SheetTitle>
                </SheetHeader>
                <Sidebar />
              </SheetContent>
            </Sheet>
          </NavigationMenuItem>
        </div>
        <div className="navbar-center">
          <NavigationMenuItem>
            <NavigationMenuLink className="text-primary text-xl font-bold">
              Project Munch
            </NavigationMenuLink>
          </NavigationMenuItem>
        </div>

        <div className="navbar-end">
          <NavigationMenuItem>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
