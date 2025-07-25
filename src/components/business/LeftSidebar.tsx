export default function LeftSidebar() {
  return (
    <aside className="grid-sidebar bg-red-900/50 border-r border-gray-800 p-4 flex flex-col">
      <div className="text-white font-semibold mb-4 text-lg min-[1265px]:text-left max-[1264px]:text-center">
        <span className="min-[1265px]:inline hidden">LEFT SIDEBAR</span>
        <span className="min-[1265px]:hidden">🐦</span>
      </div>
      <div className="text-gray-400 text-sm">
        <div className="min-[1265px]:block hidden">
          • Twitter Logo
          <br />
          • Navigation Menu
          <br />
          • Home, Explore, Notifications
          <br />
          • Messages, Bookmarks
          <br />• Profile, More
        </div>
        <div className="min-[1265px]:hidden min-[500px]:block hidden space-y-4 text-center">
          <div>🏠</div>
          <div>🔍</div>
          <div>🔔</div>
          <div>✉️</div>
          <div>🔖</div>
          <div>👤</div>
          <div>⚙️</div>
        </div>
        <div className="max-[499px]:flex hidden justify-around items-center h-full">
          <div>🏠</div>
          <div>🔍</div>
          <div>🔔</div>
          <div>✉️</div>
          <div>👤</div>
        </div>
      </div>
      <div className="flex-1 min-[500px]:block hidden"></div>
    </aside>
  );
}
