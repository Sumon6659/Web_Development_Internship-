import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

import { Reveal } from "./Reveal";

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    const timer = setInterval(() => emblaApi.scrollNext(), 4000);
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(timer);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="scroll-mt-10 pb-4 pt-8 xl:pb-16 xl:pt-36">
      <h2 className="section-title mx-6 mb-12 xl:mx-auto xl:mb-16 xl:text-center">
        I make Incredible
        <br />
        <span>Projects</span>
      </h2>

      <Reveal className="mx-auto max-w-[1380px]">
        <div ref={emblaRef} className="cursor-grab overflow-hidden px-6 active:cursor-grabbing xl:px-8">
          <div className="flex gap-8">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="relative w-[85vw] max-w-[440px] shrink-0 overflow-hidden rounded-[3rem] bg-card p-6 xl:w-[440px] xl:rounded-[4rem] xl:p-10"
              >
                <div className="blob -right-[7.75rem] bottom-0 z-0" />
                <div className="relative z-10 flex items-center justify-between">
                  <h1 className="text-[2rem] xl:text-5xl">{String(i + 1).padStart(2, "0")}</h1>
                  <h3 className="font-display text-base font-normal xl:text-xl">{p.category}</h3>
                </div>
                <div className="relative z-10 my-8">
                  <h2 className="mb-4 text-xl xl:text-2xl">{p.title}</h2>
                  <h3 className="mb-2 font-display text-[0.813rem] font-semibold text-muted-foreground xl:text-base">
                    Techstack used
                  </h3>
                  <p className="text-[0.813rem] xl:text-base">{p.stack}</p>
                </div>
                <div className="group relative z-10">
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="rounded-3xl xl:rounded-[2rem]"
                  />
                  <a
                    href={p.href}
                    aria-label={`Open ${p.title}`}
                    className="pointer-events-none absolute right-3 top-3 grid size-12 place-items-center rounded-full border-[3px] border-primary bg-background text-2xl text-foreground opacity-0 transition-[box-shadow,opacity] duration-300 hover:shadow-[0_0_24px_var(--primary)] group-hover:pointer-events-auto group-hover:opacity-100 xl:right-6 xl:top-6"
                  >
                    <i className="ri-link" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.title}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "size-2 rounded-full bg-primary transition-opacity duration-300",
                selected === i ? "opacity-100" : "opacity-30",
              )}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
