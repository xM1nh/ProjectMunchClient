import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import IconComponent from "./iconComponent";

const MapControlLargeSidebarComponent = () => {
  return (
    <NavigationMenu.Root
      orientation="vertical"
      className="fixed top-0 left-0 z-10 h-full flex"
    >
      <NavigationMenu.List className="menu bg-white w-80 h-full outline outline-1 outline-gray-300 shadow-md shadow-black-500">
        <NavigationMenu.Item className="my-1 w-full">
          <span className="text-lg text-slate-600">Project Munch</span>
        </NavigationMenu.Item>

        <div className="divider"></div>

        <NavigationMenu.Item className="p-1 w-full">
          <NavigationMenu.Trigger className="flex flex-row justify-start items-center gap-6 text-slate-500 text-center px-2">
            <IconComponent name="bookmark" />
            <span className="text-sm font-semibold text-slate-800">Saved</span>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="p-1 w-full">
          <NavigationMenu.Trigger className="flex flex-row justify-start items-center gap-6 text-slate-500 text-center px-2">
            <IconComponent name="history" />
            <span className="text-sm font-semibold text-slate-800">
              Recents
            </span>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>

        <div className="divider"></div>

        <NavigationMenu.Item className="p-1 w-full">
          <NavigationMenu.Trigger className="flex flex-row justify-start items-center gap-6 text-slate-500 text-center px-2">
            <IconComponent name="settings" />
            <span className="text-sm font-semibold text-slate-800">
              Settings
            </span>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default MapControlLargeSidebarComponent;
