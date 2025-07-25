export default function MainFeed() {
  return (
    <main className="grid-main bg-blue-900/50 border-r border-gray-800 min-h-screen">
      <div className="p-4">
        <div className="text-white font-semibold mb-4 text-lg">
          MAIN CONTENT
        </div>
        <div className="text-gray-400 text-sm">
          • Header (Home/For You tabs)
          <br />
          • Tweet Composer
          <br />
          • Tweet Timeline
          <br />
          • Individual Posts
          <br />• Infinite scroll feed
        </div>
      </div>
    </main>
  );
}
