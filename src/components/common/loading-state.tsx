import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingStateProps {
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "size-5",
  md: "size-8",
  lg: "size-12",
};

export function LoadingState({
  message = "Loading...",
  className,
  size = "md",
}: LoadingStateProps) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center gap-3 py-12", className)}
      role="status"
      aria-live="polite"
    >
      <Loader2 className={cn("animate-spin text-muted-foreground", sizeMap[size])} />
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
