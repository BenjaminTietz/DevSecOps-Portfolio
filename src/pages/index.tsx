import React from "react";

import Header from "../components/portfolio/header";
import Hero from "../components/portfolio/hero";
import Skills from "../components/portfolio/skills";
import ProjectHighlights from "../components/portfolio/project-highlights";
import Contact from "../components/portfolio/contact";
import Footer from "../components/portfolio/footer";

import { LanguageProvider } from "../contexts/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="portfolio-root">
        <Header />
        <Hero />
        <Skills />
        <ProjectHighlights />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
