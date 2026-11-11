import { testimonials, type Testimonial } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="relative mx-4 w-[320px] shrink-0 overflow-hidden rounded-[3rem] bg-card px-4 pb-10 pt-6 text-center xl:w-[370px] xl:rounded-[4rem] xl:px-8 xl:py-12">
      <div className="blob inset-x-0 -bottom-[12.5rem] z-0 mx-auto" />
      <div className="relative z-10">
        <img
          src={t.image}
          alt={t.name}
          width={60}
          height={60}
          loading="lazy"
          className="mx-auto mb-2 size-[60px] rounded-full object-cover"
        />
        <h2 className="mb-6 text-[0.938rem] font-normal xl:text-base">{t.name}</h2>
        <div className="mb-2 flex items-center justify-center gap-x-2">
          <div className="flex gap-x-1 text-foreground">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} className="ri-star-fill text-base" />
            ))}
          </div>
          <h3 className="text-base xl:text-base">5.0</h3>
        </div>
        <p className="text-[0.938rem] xl:text-base">{t.quote}</p>
      </div>
    </article>
  );
}

function Row({ reverse = false }: { reverse?: boolean }) {
  const list = reverse ? [...testimonials].reverse() : testimonials;
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={cn(
          "flex w-max hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        {[...list, ...list].map((t, i) => (
          <Card key={t.name + i} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="pb-4 pt-8 xl:pt-28">
      <h2 className="section-title mx-6 mb-12 xl:mx-auto xl:mb-16 xl:text-center">
        <span>What They Say</span>
        <br />
        About Me
      </h2>
      <div className="grid gap-y-8 xl:gap-y-12">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
