import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Section({ className, ...props }: SectionProps) {
  return (
    <div
      className={cn(
        "border-t border-muted/70 pt-8", // Added border-t for the separator line
        "transition-colors duration-150", // Smooth transition for theme changes
        "print:border-transparent", // Hide in print mode
        className
      )}
      {...props}
    />
  );
}