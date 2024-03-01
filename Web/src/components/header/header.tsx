import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import HeaderMenu from "@/components/Header/HeaderMenu";
import HeaderAvatar from "@/components/Header/HeaderAvatar";
import HeaderLogin from "./HeaderLogin";

const Header = () => {
  return (
    <header>
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
              {/* <HeaderAvatar /> */}
              <HeaderLogin />
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
