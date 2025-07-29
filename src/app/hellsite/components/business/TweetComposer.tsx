"use client";
import clsx from "clsx";
import { Button } from "../ui/Button";
import { TextArea } from "../ui/TextArea";
import { useState } from "react";

export default function TweetComposer() {
  const [internalValue, setInternalValue] = useState("");
  const currentValue = internalValue;

  const maxLength = 140;
  const isOverLimit = currentValue.length > maxLength;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInternalValue(e.target.value);
  };

  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex gap-3">
        {/* TODO: Replace with Avatar */}
        <div className="w-12 h-12 bg-gray-500 rounded-full flex-shrink-0"></div>

        <div className="flex-1 mt-2">
          <TextArea
            placeholder="What's happening?"
            error={isOverLimit} // TODO: Pass error message here
            value={currentValue}
            onChange={handleChange}
          />

          <div className="flex items-center justify-end gap-4 mt-3">
            <div
              className={clsx(
                "text-sm",
                isOverLimit ? "text-red-500" : "text-slate-500",
              )}
            >
              {currentValue.length}/{maxLength}
            </div>

            <Button
              variant="primary"
              size="medium"
              disabled={isOverLimit || currentValue.length === 0}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

TweetComposer.displayName = "TweetComposer";
