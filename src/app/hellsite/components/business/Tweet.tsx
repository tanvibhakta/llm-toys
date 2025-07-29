import * as React from "react";
import { IconButton } from "../ui/IconButton";
import { MessageCircle, Repeat2, Heart, CheckIcon } from "lucide-react";
import Avatar from "../ui/Avatar";

export interface TweetUser {
  id: string;
  displayName: string;
  username: string;
  avatarUrl: string;
  isVerified?: boolean;
}

export interface TweetEngagement {
  replies: number;
  retweets: number;
  likes: number;
}

export interface TweetData {
  id: string;
  user: TweetUser;
  content: string;
  timestamp: string;
  engagement: TweetEngagement;
  isLiked?: boolean;
  isRetweeted?: boolean;
}

export interface TweetProps {
  tweet: TweetData;
  onReply?: (tweetId: string) => void;
  onRetweet?: (tweetId: string) => void;
  onLike?: (tweetId: string) => void;
}

// Helper function to format engagement numbers
const formatEngagementNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

export default function Tweet({
  tweet,
  onReply,
  onRetweet,
  onLike,
}: TweetProps) {
  return (
    <article className="border-b border-gray-800 px-4 pt-3 pb-2 transition-colors flex flex-row gap-3">
      <Avatar />
      <div className="w-full">
        <div className="flex items-center gap-1">
          {/* TODO: Replace with link to user profile */}
          <span className="font-bold hover:underline">
            {tweet.user.displayName}
          </span>

          {tweet.user.isVerified && (
            <div className="w-4 h-4 bg-sky-500 rounded-full flex items-center justify-center ml-1">
              <CheckIcon className="w-3 h-3 text-white" />
            </div>
          )}

          <span className="text-gray-500">@{tweet.user.username}</span>

          <span className="text-gray-500">·</span>

          <span className="text-gray-500 hover:underline">
            {tweet.timestamp}
          </span>
        </div>

        <div>{tweet.content}</div>

        <div className="flex items-center justify-between -ml-2 mt-1">
          <IconButton
            onClick={() => onReply?.(tweet.id)}
            className="flex p-2 items-center gap-2"
          >
            <MessageCircle />
            {formatEngagementNumber(tweet.engagement.replies)}
          </IconButton>

          <IconButton
            variant="ghost"
            size="small"
            onClick={() => onRetweet?.(tweet.id)}
            className="flex p-2 items-center gap-2"
          >
            <Repeat2 />
            {formatEngagementNumber(tweet.engagement.retweets)}
          </IconButton>

          <IconButton
            variant="ghost"
            size="small"
            onClick={() => onLike?.(tweet.id)}
            className="flex p-2 items-center gap-2"
          >
            <Heart />
            {formatEngagementNumber(tweet.engagement.likes)}
          </IconButton>
        </div>
      </div>
    </article>
  );
}
