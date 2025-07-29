"use client";
import * as React from "react";
import { clsx } from "clsx";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  error?: boolean | string;
}

export const TextArea = ({
  className,
  value,
  defaultValue,
  onChange,
  ...props
}: TextAreaProps) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  // This will grow the text area instead of triggering a scroll on text overflow
  React.useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value, textareaRef]);

  return (
    <>
      <textarea
        ref={textareaRef}
        className={clsx(
          "w-full resize-none border-none outline-none text-xl text-slate-50 placeholder:text-slate-500 transition-colors",
          className,
        )}
        value={value}
        onChange={onChange}
        {...props}
      />

      {props.error && typeof props.error === "string" && (
        <div className="mt-1 text-sm text-red-500">{props.error}</div>
      )}
    </>
  );
};

TextArea.displayName = "TextArea";
