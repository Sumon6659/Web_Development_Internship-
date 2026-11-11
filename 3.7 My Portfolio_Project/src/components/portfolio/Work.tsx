import { useState } from "react";

import { education, experience, type TimelineItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

const tabs = [
  { id: "experience", label: "Experience", icon: "ri-briefcase-line", items: experience },
  { id: "education", label: "Education", icon: "ri-graduation-cap-line", items: education },
] as const;

export function Work() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("experience");
  const items: TimelineItem[] = tabs.find((t) => t.id === tab)!.items;

  return (
    <section className="pb-4 pt-8 xl:pt-28">
      <h2 className="section-title mb-12 text-center xl:mb-16">
        <span>My Work</span>
        <br />
        Experience
      </h2>

      <Reveal className="mx-6 grid max-w-[1050px] gap-y-12 xl:mx-auto">
        <div className="flex justify-between gap-6 justify-self-center rounded-[4rem] bg-card px-8 py-5">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "flex items-center gap-x-1 font-display text-[0.813rem] transition-colors duration-300 hover:text-primary xl:text-sm",
                tab === t.id ? "text-primary" : "text-muted-foreground",
              )}
            >
              {t.label} <i className={cn(t.icon, "text-base")} />
            </button>
          ))}
        </div>

        <div className="relative pl-4 xl:pl-0">
          <div className="timeline-line absolute -left-1 top-0 h-full w-1 xl:left-1/2 xl:-translate-x-1/2">
            <span className="absolute -bottom-px -left-1.5 size-4 rounded-full bg-primary-alt-2" />
          </div>

          <div key={tab} className="grid gap-y-16 xl:gap-y-20">
            {items.map((item, i) => (
              <Reveal
                key={item.title + item.year}
                delay={i * 120}
                className="grid gap-y-4 xl:grid-cols-2 xl:gap-x-36"
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <h1 className="mb-2 text-xl xl:text-[2rem] xl:leading-tight">{item.title}</h1>
                    <h3 className="font-sans text-[0.938rem] font-normal text-primary xl:text-xl">
                      {item.place}
                    </h3>
                  </div>
                  <h2 className="shrink-0 text-2xl xl:max-w-[7rem] xl:text-4xl">{item.year}</h2>
                </div>
                <p className="xl:text-xl">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
