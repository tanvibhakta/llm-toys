import LeftSidebar from '@/components/business/LeftSidebar';
import MainFeed from '@/components/business/MainFeed';
import RightSidebar from '@/components/business/RightSidebar';
// import BottomProfile from "@/components/business/BottomProfile";

export default function Hellsite() {
  return (
    <div className="flex flex-col-reverse tablet:flex-row justify-center min-h-screen max-w-screen">
      <LeftSidebar />
      <MainFeed />
      <RightSidebar />
      {/* <BottomProfile /> */}
    </div>
  );
}
