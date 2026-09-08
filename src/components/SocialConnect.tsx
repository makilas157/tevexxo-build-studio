import { useRef } from "react";
import { ArrowRight, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { Container, SectionTag } from "@/components/ui/Primitives";

const socials = [
  { label: "Instagram", handle: "@tevexxo", Icon: Instagram, href: "https://instagram.com" },
  { label: "WhatsApp", handle: "Chat with us", Icon: MessageCircle, href: "https://wa.me/" },
  { label: "Facebook", handle: "/tevexxo", Icon: Facebook, href: "https://facebook.com" },
  { label: "Twitter / X", handle: "@tevexxo", Icon: Twitter, href: "https://x.com" },
];

export function SocialConnect() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--gx", `${e.clientX - r.left}px`);
        el.style.setProperty("--gy", `${e.clientY - r.top}px`);
      }}
      className="relative overflow-hidden border-y border-border bg-secondary/40 py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(400px circle at var(--gx, 50%) var(--gy, 50%), color-mix(in oklab, var(--color-accent) 18%, transparent), transparent 70%)",
        }}
      />
      <Container className="relative">
        <SectionTag>Connect</SectionTag>
        <h2 className="mt-5 max-w-2xl text-3xl font-bold md:text-5xl">
          Follow what we're building.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map(({ label, handle, Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group depth-card flex items-center justify-between p-6"
            >
              <span className="flex items-center gap-4">
                <Icon className="h-6 w-6 text-accent" />
                <span>
                  <span className="block font-display text-sm font-semibold">{label}</span>
                  <span className="block text-xs text-muted-foreground">{handle}</span>
                </span>
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
