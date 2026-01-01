import React from "react";
import Layout from "@theme/Layout";

import Header from "../components/portfolio/header";
import Hero from "../components/portfolio/hero";
import Skills from "../components/portfolio/skills";
import ProjectHighlights from "../components/portfolio/project-highlights";
import Contact from "../components/portfolio/contact";
import Footer from "../components/portfolio/footer";

export default function Home(): JSX.Element {
  return (
    <section title="Portfolio">
      <Header />
      <Hero />
      <Skills />
      <ProjectHighlights />
      <Contact />
      <Footer />
    </section>
  );
}
