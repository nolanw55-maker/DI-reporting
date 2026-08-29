import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-7", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="7" className="fill-primary" />
      <path
        d="M20.8 8h-4.4v11.6c0 1.5-.7 2.2-1.9 2.2-1.1 0-1.8-.7-1.8-2.1H9.2c.1 3.4 2.4 5.3 5.2 5.3 3.2 0 6.4-1.9 6.4-5.7V8Z"
        className="fill-primary-foreground"
      />
    </svg>
  );
}

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <LogoMark />
      <span className="flex items-baseline gap-1.5">
        <span className="font-display text-lg font-medium tracking-tight">Jai</span>
        <span className="text-sm font-medium tracking-wide text-muted-foreground">
          Reporting
        </span>
      </span>
    </span>
  );
}
