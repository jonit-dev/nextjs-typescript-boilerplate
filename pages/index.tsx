import Head from "next/head";
import React from "react";

import { FeaturesSection } from "../components/landing/FeaturesSection";
import { Header } from "../components/landing/Header";
import { HeroBanner } from "../components/landing/HeroBanner";
import { app } from "../constants/env";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{app.general.name}</title>
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/landing/css/style.css" />
        <script src="https://unpkg.com/animejs@3.0.1/lib/anime.min.js"></script>
        <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script>
        <script src="/landing/main.js"></script>
      </Head>

      <div className="body-wrap">
        <Header />
        <main>
          <HeroBanner />
          <FeaturesSection />
        </main>
      </div>
    </React.Fragment>
  );
}
