import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LegalPage({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-background">
      <SiteHeader solid />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
          Legal
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-muted-foreground">{lede}</p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/85">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
