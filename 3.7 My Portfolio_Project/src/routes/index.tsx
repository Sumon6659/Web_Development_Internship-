import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/About";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Cursor } from "@/components/portfolio/Cursor";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Work } from "@/components/portfolio/Work";

const title = "Md. Hanjala Sumon — Full Stack Web Developer";
const description =
  "Portfolio of Md. Hanjala Sumon, a Full Stack Web Developer and CSE student at Pundra University of Science & Technology (PUB).";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Cursor />
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
