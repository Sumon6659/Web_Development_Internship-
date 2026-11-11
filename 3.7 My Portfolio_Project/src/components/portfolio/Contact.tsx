import { useState } from "react";

import { profile, socials, writeMe } from "@/data/portfolio";

import { Reveal } from "./Reveal";

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="grid gap-y-2">
      {items.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between gap-x-6 text-foreground transition-colors duration-300 hover:text-primary xl:text-xl"
        >
          {l.label} <i className="ri-arrow-right-up-line" />
        </a>
      ))}
    </div>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-10 pb-16 pt-8 xl:pb-16 xl:pt-36">
      <Reveal className="mx-6 grid max-w-[1120px] gap-y-16 xl:mx-auto xl:gap-y-32">
        <div className="text-center">
          <h2 className="section-title mb-4">Contact Me</h2>
          <h3 className="mb-8 text-base text-muted-foreground xl:text-2xl">
            Tell me about your next project.
          </h3>
          <button onClick={copy} className="btn-glow">
            {copied ? "Email Copied" : "Copy Email"}{" "}
            <i className={copied ? "ri-check-line" : "ri-file-copy-line"} />
          </button>
        </div>

        <div className="grid gap-y-12 text-center xl:grid-cols-3">
          <div className="grid gap-y-8 xl:justify-self-start">
            <div>
              <h3 className="mb-3 text-primary xl:text-xl">Email</h3>
              <a href={`mailto:${profile.email}`} className="text-foreground hover:text-primary">
                {profile.email}
              </a>
            </div>
            <div>
              <h3 className="mb-3 text-primary xl:text-xl">Location</h3>
              <p className="text-foreground">{profile.location}</p>
            </div>
          </div>

          <div className="justify-self-center">
            <h3 className="mb-3 text-primary xl:text-xl">Social Media</h3>
            <LinkList items={socials} />
          </div>

          <div className="justify-self-center xl:justify-self-end">
            <h3 className="mb-3 text-primary xl:text-xl">Write Me &amp; We'll Talk</h3>
            <LinkList items={writeMe} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden pb-8 text-center">
      <div className="blob-animate -bottom-12 -right-12 -z-10 size-[100px]" />
      <p className="mb-2 text-foreground">
        All Rights Reserved By <span className="text-primary">{profile.firstName} {profile.lastName}</span>
      </p>
      <p className="font-display text-sm text-foreground">© {new Date().getFullYear()}</p>
    </footer>
  );
}
