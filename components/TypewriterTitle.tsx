import type { ElementType } from "react";

type TypewriterTitleProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Kept for API compatibility; typing is currently disabled */
  startOnMount?: boolean;
};

export function TypewriterTitle({
  text,
  as: Tag = "h2",
  className = "",
}: TypewriterTitleProps) {
  const Component = Tag as ElementType;

  return <Component className={className}>{text}</Component>;
}
