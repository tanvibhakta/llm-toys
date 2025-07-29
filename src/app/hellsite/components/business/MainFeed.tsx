"use client";
import TweetComposer from "./TweetComposer";
import Tweet, { TweetData } from "./Tweet";
import tweetsData from "../../data/faketweets.json";

const tweets: TweetData[] = tweetsData.tweets;

export default function MainFeed() {
  return (
    <main className="w-160 max-w-160 overflow-y-scroll bg-black border-r border-gray-800 min-h-screen">
      <TweetComposer />

      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          onReply={(id) => console.log("Reply to:", id)}
          onRetweet={(id) => console.log("Retweet:", id)}
          onLike={(id) => console.log("Like:", id)}
        />
      ))}
    </main>
  );
}
