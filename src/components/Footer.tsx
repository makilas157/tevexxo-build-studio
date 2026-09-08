import { Link } from "@tanstack/react-router";
import { navLinks } from "@/data/site";
import { Container, LogoMark } from "@/components/ui/Primitives";

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-center">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <LogoMark size={28} />
            <span className="font-display text-base font-bold">tevexxo</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">Build. Learn. Scale.</p>
        </div>
        <div className="flex flex-wrap gap-5 md:justify-center">
          {navLinks.slice(0, 5).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground md:text-right">
          © {new Date().getFullYear()} Tevexxo. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
