import { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface AppInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  error?: string;
  hint?: string;
}

export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id ?? props.name;

    return (
      <div className="space-y-2">
        {label && (
          <Label htmlFor={inputId} className={error ? "text-destructive" : undefined}>
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          id={inputId}
          aria-invalid={Boolean(error)}
          className={cn(error && "border-destructive", className)}
          {...props}
        />
        {error && <p className="text-xs text-destructive">{error}</p>}
        {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
      </div>
    );
  },
);

AppInput.displayName = "AppInput";
