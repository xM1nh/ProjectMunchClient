import IconComponent from "./iconComponent";

const MapControlLargeSidebarComponent = () => {
  return (
    <div className="menu w-full h-full">
      <li className="w-full">
        <div className="flex flex-row justify-start s-center gap-6 text-slate-500 text-center p-4">
          <IconComponent name="bookmark" />
          <span className="text-sm font-semibold text-slate-800">Saved</span>
        </div>
      </li>

      <li className="w-full">
        <div className="flex flex-row justify-start s-center gap-6 text-slate-500 text-center p-4">
          <IconComponent name="history" />
          <span className="text-sm font-semibold text-slate-800">Recents</span>
        </div>
      </li>

      <div className="divider" />

      <li className="w-full">
        <div className="flex flex-row justify-start s-center gap-6 text-slate-500 text-center p-4">
          <IconComponent name="settings" />
          <span className="text-sm font-semibold text-slate-800">Settings</span>
        </div>
      </li>
    </div>
  );
};

export default MapControlLargeSidebarComponent;
