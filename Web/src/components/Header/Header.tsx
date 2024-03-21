import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import HeaderMenu from "@/components/Header/HeaderMenu";
import HeaderAvatar from "@/components/Header/HeaderAvatar";
import { useUser } from "../Providers/UserProvider";
import { useAuthModal } from "../Providers/AuthModalProvider";

const Header = () => {
  const { user } = useUser();
  const { openAuthModal } = useAuthModal();

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
              {user ? (
                <HeaderAvatar />
              ) : (
                <button className="btn btn-ghost" onClick={openAuthModal}>
                  Log In
                </button>
              )}
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Header;
