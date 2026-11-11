import { useEffect, useState } from "react";

import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Header() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-[100] w-full bg-header">
      <div className="blob-animate -left-12 -top-12 -z-10 size-[100px]" />
      <nav className="mx-6 flex max-w-[1120px] justify-between py-4 xl:mx-auto xl:h-[5.5rem] xl:items-center">
        <a
          href="#"
          className="self-start font-semibold text-foreground transition-colors duration-300 hover:text-primary xl:self-auto"
        >
          {profile.shortName}
        </a>
        <ul className="flex flex-col items-end gap-y-2 xl:flex-row xl:gap-x-[5.5rem]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "font-display text-[0.813rem] font-semibold text-foreground transition-[color,text-shadow] duration-300 hover:text-primary hover:text-glow xl:text-sm",
                  active === link.id && "text-primary text-glow",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
