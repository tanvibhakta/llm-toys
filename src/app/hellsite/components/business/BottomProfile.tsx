import { Button } from "../ui/Button";

export default function BottomProfile() {
  return (
    <div className="hidden md:block bg-yellow-900/50 p-4 border-r border-gray-800 border-t">
      <div className="text-white font-semibold mb-2 text-lg lg:text-left text-center">
        <span className="lg:inline hidden">BOTTOM PROFILE</span>
        <span className="lg:hidden">👤</span>
      </div>
      <div className="text-gray-400 text-sm">
        <div className="lg:block hidden">
          • User Avatar
          <br />• Name & Username
        </div>
        <div className="lg:hidden block text-center">Profile</div>
      </div>
    </div>
  );
}
