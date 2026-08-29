import { Link } from "@tanstack/react-router";
import { LogoWordmark } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <LogoWordmark />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            AI radiology report checking for teleradiologists and small
            practices. Paste a draft. Review the flags. You keep the signature.
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Product
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="/#features" className="text-foreground/80 hover:text-foreground">
                Features
              </a>
            </li>
            <li>
              <a href="/#pricing" className="text-foreground/80 hover:text-foreground">
                Free
              </a>
            </li>
            <li>
              <Link to="/tutorials" className="text-foreground/80 hover:text-foreground">
                Tutorials
              </Link>
            </li>
            <li>
              <Link to="/app" className="text-foreground/80 hover:text-foreground">
                Workspace
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Legal
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="text-foreground/80 hover:text-foreground">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-foreground/80 hover:text-foreground">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="text-foreground/80 hover:text-foreground">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        Assistive reporting tool — not a medical device. The radiologist remains
        responsible for every report.
      </div>
    </footer>
  );
}
