import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AppButtonProps = React.ComponentProps<typeof Button> & {
  isLoading?: boolean;
};

export const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ className, isLoading, disabled, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Loading...</span>
          </span>
        ) : (
          children
        )}
      </Button>
    );
  },
);

AppButton.displayName = "AppButton";
