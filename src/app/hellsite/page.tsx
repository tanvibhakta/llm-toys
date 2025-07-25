import LeftSidebar from '@/components/business/LeftSidebar';
import MainFeed from '@/components/business/MainFeed';
import RightSidebar from '@/components/business/RightSidebar';
// import BottomProfile from "@/components/business/BottomProfile";

export default function Hellsite() {
  return (
    <div className="twitter-grid">
      <LeftSidebar />
      <MainFeed />
      <RightSidebar />
      {/* <BottomProfile /> */}
    </div>
  );
}
