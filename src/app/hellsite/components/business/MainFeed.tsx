import TweetComposer from "./TweetComposer";

export default function MainFeed() {
  return (
    <main className="w-160 max-w-160 overflow-y-scroll bg-black border-r border-gray-800 min-h-screen">
      <TweetComposer />
      <div className="px-4 py-4">
        <div className="text-white font-semibold mb-4 text-lg">Timeline</div>
        <div className="text-gray-400 text-sm">
          • Tweet Timeline, infinite scroll feed
        </div>
      </div>
    </main>
  );
}
