export default function BottomProfile() {
  return (
    <div className="hidden tablet:block bg-yellow-900/50 p-4 border-r border-gray-800 border-t">
      <div className="text-white font-semibold mb-2 text-lg desktop:text-left text-center">
        <span className="desktop:inline hidden">BOTTOM PROFILE</span>
        <span className="desktop:hidden">👤</span>
      </div>
      <div className="text-gray-400 text-sm">
        <div className="desktop:block hidden">
          • User Avatar
          <br />
          • Name & Username
          <br />• Three dots menu
        </div>
        <div className="desktop:hidden block text-center">Profile</div>
      </div>
    </div>
  );
}
