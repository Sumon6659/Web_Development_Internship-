import { useEffect, useRef } from "react";

/** Glowing circle that follows the mouse (desktop only). */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 25}px, ${e.clientY - 25}px)`;
      const interactive = (e.target as HTMLElement).closest("a, button");
      el.style.scale = interactive ? "0" : "1";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] size-[50px] rounded-full bg-primary-light shadow-[0_0_30px_var(--primary)] mix-blend-difference transition-[transform,scale] duration-200 ease-out [@media(pointer:coarse)]:hidden"
      style={{ transform: "translate(-100px, -100px)" }}
    />
  );
}
