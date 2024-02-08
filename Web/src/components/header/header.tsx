import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import HeaderMenu from "@/components/header/headerMenu";
import HeaderAvatar from "@/components/header/headerAvatar";

const Header = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="navbar w-screen">
        <div className="navbar-start">
          <NavigationMenuItem>
            <HeaderMenu />
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
            <HeaderAvatar />
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
