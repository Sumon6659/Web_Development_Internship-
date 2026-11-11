import profileImg from "@/assets/hanjala-cutout.webp";
import { profile, socials } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative pt-24 xl:pt-20">
      <div className="relative mx-6 grid max-w-[1120px] gap-y-4 xl:mx-auto">
        {/* Name */}
        <div className="z-20 xl:absolute xl:left-12 xl:top-48">
          <h3 className="font-sans text-xl font-normal text-primary xl:text-2xl">Hello, I'm</h3>
          <h1 className="text-[2rem] leading-tight xl:text-5xl">
            {profile.firstName}
            <br />
            {profile.lastName}
          </h1>
        </div>

        {/* Photo with glow */}
        <div className="relative grid [overflow-y:clip]">
          <div className="blob-animate bottom-0 size-[250px] justify-self-center xl:bottom-8 xl:size-[450px] xl:blur-[50px]" />
          <img
            src={profileImg}
            alt="Md. Hanjala Sumon, Full Stack Web Developer"
            width={779}
            height={1042}
            className="relative w-[300px] justify-self-center xl:w-[520px]"
          />
          <div className="fade-bottom absolute inset-x-0 bottom-0 z-10 mx-auto h-full xl:w-[700px]" />

          {/* Profession */}
          <div className="absolute bottom-2 z-20 justify-self-center text-center xl:bottom-auto xl:right-4 xl:top-48 xl:text-left">
            <h3 className="font-sans text-base font-normal text-primary xl:text-2xl">Creative</h3>
            <h2 className="profession-fade text-[1.75rem] leading-tight text-primary xl:text-5xl">
              {profile.role}
            </h2>
            <h2 className="-translate-y-4 text-[1.75rem] leading-tight xl:-translate-y-6 xl:text-5xl">
              Developer
            </h2>
          </div>

          {/* Socials */}
          <div className="absolute left-0 z-20 flex flex-col gap-y-3 self-center xl:bottom-12 xl:self-auto xl:gap-y-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-xl text-foreground transition-[transform,color] duration-300 hover:translate-x-1 hover:text-primary xl:text-2xl"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>

          {/* Resume */}
          <a
            href={profile.resumeUrl}
            className="absolute -right-10 bottom-10 z-20 flex rotate-[-90deg] items-center gap-x-2 text-sm text-subtle transition-colors duration-300 hover:text-primary xl:right-0 xl:rotate-0 xl:text-base"
          >
            Resume <i className="ri-file-text-line" />
          </a>
        </div>
      </div>
    </section>
  );
}
