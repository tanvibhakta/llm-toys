import LeftSidebar from "@/components/business/LeftSidebar";
import MainFeed from "@/components/business/MainFeed";
import RightSidebar from "@/components/business/RightSidebar";

export default function Hellsite() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center min-h-screen max-w-screen">
      <LeftSidebar />
      <MainFeed />
      <RightSidebar />
    </div>
  );
}
