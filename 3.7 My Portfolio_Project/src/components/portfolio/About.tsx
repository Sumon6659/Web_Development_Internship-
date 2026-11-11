import profileImg from "@/assets/hanjala-cutout.webp";
import { profile } from "@/data/portfolio";

import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-16 pb-4 pt-8 xl:pt-28">
      <div className="mx-6 grid max-w-[1120px] gap-y-12 [overflow-y:clip] xl:mx-auto xl:grid-cols-[repeat(2,500px)] xl:items-center xl:gap-x-[5.5rem] xl:pt-8">
        <Reveal className="z-20">
          <h2 className="section-title mb-6">
            <span>Creativity</span>
            <br />
            Is My Passion
          </h2>
          <p className="mb-8 text-xl xl:mb-12 xl:text-2xl">
            I'm a <b className="font-semibold text-primary">Full Stack Web Developer</b> and a CSE
            student at <b className="font-semibold text-primary">{profile.university} (PUB)</b>,
            passionate about building <b className="font-semibold text-primary">fast, scalable and
            beautiful web apps.</b> Driven by learning and curiosity, I'm always exploring new
            technologies — from React and Node JS to databases and AI.
          </p>
          <a href={profile.resumeUrl} className="btn-glow">
            Resume <i className="ri-file-text-line" />
          </a>
        </Reveal>

        <Reveal className="relative justify-self-center xl:order-first" delay={150}>
          <div className="blob-animate left-4 top-6 size-[100px] xl:left-16 xl:top-16 xl:size-[200px] xl:blur-[50px]" />
          <div className="blob-animate -right-2 bottom-2 size-[100px] xl:-right-4 xl:bottom-12 xl:size-[200px] xl:blur-[50px]" />
          <img
            src={profileImg}
            alt="Portrait of Md. Hanjala Sumon"
            width={779}
            height={1042}
            loading="lazy"
            className="relative w-[240px] xl:w-[440px]"
          />
          <div className="fade-bottom absolute -inset-x-24 bottom-0 z-10 h-full" />
        </Reveal>
      </div>
    </section>
  );
}
