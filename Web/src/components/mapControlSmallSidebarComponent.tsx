import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import IconComponent from "./iconComponent";

const MapControlSmallSidebarComponent = () => {
  return (
    <NavigationMenu.Root
      orientation="vertical"
      className="fixed top-0 left-0 h-full flex"
    >
      <NavigationMenu.List className="menu bg-white w-fit h-full outline outline-1 outline-gray-300 shadow-md shadow-black-500/40">
        <NavigationMenu.Item className="my-1 w-full">
          <label
            className="flex justify-center items-center text-slate-500 px-2"
            htmlFor="map-drawer"
          >
            <IconComponent name="menu" />
          </label>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="my-1 w-full">
          <NavigationMenu.Trigger className="flex flex-col justify-center items-center gap-0 text-slate-500 text-center px-2">
            <IconComponent name="bookmark" />
            <span className="text-xs font-semibold">Saved</span>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="my-1 w-full">
          <NavigationMenu.Trigger className="flex flex-col justify-center items-center gap-0 text-slate-500 text-center px-2">
            <IconComponent name="history" />
            <span className="text-xs font-semibold">Recents</span>
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default MapControlSmallSidebarComponent;
