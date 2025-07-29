import BottomProfile from "./BottomProfile";

export default function LeftSidebar() {
  return (
    <aside className="h-14 md:h-auto w-full min-w-17 sticky bottom-0 md:w-64 md:max-w-64 border-r border-gray-800 p-4 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="md:inline hidden text-white font-semibold mb-4 text-lg md:text-left text-center">
          <span className="">LEFT SIDEBAR</span>
          <span className="lg:hidden">🐦</span>
        </div>
        <div className="text-gray-400 text-sm flex-1">
          <div className="hidden md:flex flex-col justify-around items-center h-full">
            <div>🏠 Home</div>
            <div>🔔 Notifications</div>
          </div>
          <div className="md:hidden flex justify-around items-baseline h-full">
            <div>🏠</div>
            <div>🔔</div>
          </div>
        </div>
      </div>
      <BottomProfile />
    </aside>
  );
}
