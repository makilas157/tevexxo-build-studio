import { useEffect, useRef, useState } from "react";

/**
 * A small spider that trails the cursor with spring lag and skittering legs.
 * To remove it, delete the <CursorSpider /> line in src/routes/__root.tsx.
 */
export function CursorSpider() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let angle = 0;
    let raf = 0;
    let idle: ReturnType<typeof setTimeout>;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      setMoving(true);
      clearTimeout(idle);
      idle = setTimeout(() => setMoving(false), 180);
    };

    const tick = () => {
      const dx = tx - x;
      const dy = ty - y;
      x += dx * 0.12;
      y += dy * 0.12;
      if (Math.hypot(dx, dy) > 2) angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 14}px, ${y - 14}px, 0) rotate(${angle}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      clearTimeout(idle);
    };
  }, []);

  if (!enabled) return null;

  const legStyle = (delay: number) =>
    moving
      ? { animation: `tvx-skitter 0.22s ease-in-out ${delay}s infinite`, transformOrigin: "50% 50%" }
      : undefined;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-7 w-7 md:block"
      style={{ filter: "drop-shadow(0 0 6px var(--color-accent))" }}
    >
      <svg viewBox="0 0 32 32" className="h-full w-full" stroke="var(--color-accent)" fill="none" strokeWidth="1.6" strokeLinecap="round">
        <g style={legStyle(0)}>
          <path d="M14 13 L5 7 L2 11" />
          <path d="M18 13 L27 7 L30 11" />
        </g>
        <g style={legStyle(0.04)}>
          <path d="M13 16 L3 15 L1 19" />
          <path d="M19 16 L29 15 L31 19" />
        </g>
        <g style={legStyle(0.08)}>
          <path d="M14 19 L5 23 L4 27" />
          <path d="M18 19 L27 23 L28 27" />
        </g>
        <ellipse cx="16" cy="18" rx="5" ry="6.5" fill="var(--color-accent)" stroke="none" opacity="0.9" />
        <circle cx="16" cy="11" r="3.4" fill="var(--color-primary)" stroke="none" />
      </svg>
    </div>
  );
}
