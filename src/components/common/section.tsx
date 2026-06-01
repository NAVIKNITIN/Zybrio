import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  actions?: React.ReactNode;
}

export function Section({
  title,
  description,
  children,
  className,
  headerClassName,
  actions,
}: SectionProps) {
  return (
    <section className={cn("space-y-6", className)}>
      {(title || description || actions) && (
        <div
          className={cn(
            "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
            headerClassName,
          )}
        >
          <div className="space-y-1">
            {title && <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>}
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
