import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { NAV } from "@/lib/site-data";
const powerinLogo = "/logo-light.png";
const powerinLogodark = "/logo-dark.png";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
      <div className="flex w-full items-center gap-6 px-4 sm:px-6 md:px-10">
        <Link to="/" className="my-6 flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={powerinLogo} alt="PowerIn Urja" className="h-24 w-auto dark:hidden" />
          <img src={powerinLogodark} alt="PowerIn Urja" className="hidden h-24 w-auto dark:block" />
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="font-display text-[15px]
 font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-accent text-accent lg:hidden"
          >
            ☰
          </button>
        </div>
      </div>

      {open ? (
        <nav className="w-full border-t border-border bg-surface px-4 py-4 sm:px-6 lg:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="font-display block border-b border-border py-3 text-sm text-accent last:border-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
