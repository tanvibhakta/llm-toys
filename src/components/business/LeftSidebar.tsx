export default function LeftSidebar() {
  return (
    <aside className="h-14 w-full min-w-17 sticky bottom-0 tablet:w-64 tablet:max-w-64 bg-red-900/50 border-r border-gray-800 p-4 flex flex-col">
      <div className="tablet:inline hidden text-white font-semibold mb-4 text-lg tablet:text-left text-center">
        <span className="">LEFT SIDEBAR</span>
        <span className="desktop:hidden">🐦</span>
      </div>
      <div className="text-gray-400 text-sm">
        <div className="hidden tablet:flex flex-col justify-around items-center h-full">
          <div>🏠</div>
          <div>🔍</div>
          <div>🔔</div>
          <div>✉️</div>
          <div>🔖</div>
          <div>👤</div>
          <div>⚙️</div>
        </div>
        <div className="tablet:hidden flex justify-around items-baseline h-full">
          <div>🏠</div>
          <div>🔍</div>
          <div>🔔</div>
          <div>✉️</div>
          <div>👤</div>
        </div>
      </div>
    </aside>
  );
}
