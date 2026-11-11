import { useState } from "react";

import { services } from "@/data/portfolio";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

export function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="pb-4 pt-8 xl:pt-28">
      <h2 className="section-title mb-12 text-center xl:mb-16">
        What I <span>Offer</span>
      </h2>

      <div className="mx-6 grid max-w-[990px] items-start gap-8 xl:mx-auto xl:grid-cols-[repeat(2,455px)] xl:gap-x-20">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <Reveal
              key={s.title}
              delay={(i % 2) * 150}
              className="relative grid gap-y-6 overflow-hidden rounded-[3rem] bg-card px-6 py-8 xl:gap-y-8 xl:rounded-[4rem] xl:px-12 xl:pb-16 xl:pt-12"
            >
              <div
                className={cn(
                  "blob -top-[7.75rem] z-0",
                  i % 2 === 0 ? "-left-[7.75rem]" : "-right-[7.75rem]",
                )}
              />
              <div className="relative z-10">
                <h2 className="mb-2 text-xl xl:mb-4 xl:text-4xl xl:leading-tight">{s.title}</h2>
                <p className="text-[0.813rem] xl:text-sm">{s.description}</p>
              </div>

              <div
                className={cn(
                  "relative z-10 grid transition-[grid-template-rows,opacity] duration-500",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <h3 className="mb-3 font-sans text-[0.813rem] font-normal text-muted-foreground xl:text-sm">
                    {s.label}
                  </h3>
                  <ul className="flex flex-wrap items-center gap-x-1 gap-y-2">
                    {s.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-[4rem] border border-foreground bg-card px-2.5 py-1 font-display text-xs text-foreground xl:text-[0.813rem]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                aria-label={isOpen ? `Hide ${s.title} skills` : `Show ${s.title} skills`}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="absolute bottom-4 right-4 z-20 grid size-8 place-items-center rounded-lg border-2 border-primary bg-background text-2xl text-foreground xl:bottom-8 xl:right-8"
              >
                <i
                  className={cn(
                    "ri-arrow-down-s-line transition-[rotate] duration-300",
                    isOpen && "-rotate-180",
                  )}
                />
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
