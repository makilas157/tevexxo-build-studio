import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="logo-mark inline-block rounded-lg"
      style={{ width: size, height: size }}
    />
  );
}

export function SectionTag({ children }: { children: ReactNode }) {
  return <span className="section-tag">{children}</span>;
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

const base =
  "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors";

export function CtaLink({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const cls =
    variant === "solid"
      ? `${base} bg-primary text-primary-foreground hover:bg-accent`
      : `${base} border border-border text-foreground hover:border-accent hover:text-accent`;
  return (
    <Link to={to} className={cls}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function PageHeader({
  tag,
  title,
  intro,
}: {
  tag: string;
  title: ReactNode;
  intro: string;
}) {
  return (
    <header className="pt-40 pb-4">
      <Container>
        <SectionTag>{tag}</SectionTag>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl border-l-2 border-accent pl-5 text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      </Container>
    </header>
  );
}
