export default function BottomProfile() {
  return (
    <div className="grid-bottom-profile bg-yellow-900/50 p-4 border-r border-gray-800 border-t max-[499px]:hidden">
      <div className="text-white font-semibold mb-2 text-lg min-[1265px]:text-left max-[1264px]:text-center">
        <span className="min-[1265px]:inline hidden">BOTTOM PROFILE</span>
        <span className="min-[1265px]:hidden">👤</span>
      </div>
      <div className="text-gray-400 text-sm">
        <div className="min-[1265px]:block hidden">
          • User Avatar
          <br />
          • Name & Username
          <br />• Three dots menu
        </div>
        <div className="min-[1265px]:hidden block text-center">Profile</div>
      </div>
    </div>
  );
}
