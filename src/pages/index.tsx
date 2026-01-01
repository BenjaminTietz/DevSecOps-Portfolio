import React from "react";
import Layout from "@theme/Layout";

import Header from "../components/portfolio/header";
import Hero from "../components/portfolio/hero";
export default function Home(): JSX.Element {
  return (
    <section title="Portfolio">
      <Header />
      <Hero />
    </section>
  );
}
