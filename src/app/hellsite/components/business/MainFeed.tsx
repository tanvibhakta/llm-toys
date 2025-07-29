"use client";
import TweetComposer from "./TweetComposer";
import Tweet, { TweetData } from "./Tweet";

// Sample tweet data matching the screenshot
const sampleTweet: TweetData = {
  id: "1",
  user: {
    id: "delicious-tacos",
    displayName: "Delicious Tacos",
    username: "Delicious_Tacos",
    avatarUrl: "https://via.placeholder.com/40/6B7280/FFFFFF?text=DT",
    isVerified: true,
  },
  content: "Can we get some leaked Tea screenshots",
  timestamp: "Jul 24",
  engagement: {
    replies: 408,
    retweets: 1200,
    likes: 60000,
  },
  isLiked: false,
  isRetweeted: false,
};

export default function MainFeed() {
  return (
    <main className="w-160 max-w-160 overflow-y-scroll bg-black border-r border-gray-800 min-h-screen">
      <TweetComposer />

      <Tweet
        tweet={sampleTweet}
        onReply={(id) => console.log("Reply to:", id)}
        onRetweet={(id) => console.log("Retweet:", id)}
        onLike={(id) => console.log("Like:", id)}
      />

      <div className="text-gray-400 text-sm mt-4">
        • Tweet Timeline, infinite scroll feed
      </div>
    </main>
  );
}
