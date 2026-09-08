import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { CursorGrid } from "@/components/CursorGrid";
import { LogoMark } from "@/components/ui/Primitives";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="relative border-b border-border bg-background/70 backdrop-blur-xl">
        <CursorGrid />
        <nav className="relative mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <LogoMark />
            <span className="font-display text-lg font-bold tracking-tight">tevexxo</span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
            >
              Contact us
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="relative border-t border-border bg-background/95 px-6 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                  activeProps={{ className: "text-accent" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
