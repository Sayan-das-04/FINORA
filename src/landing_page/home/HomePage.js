import React from "react";
import WhyFinora from "./WhyFinora";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import Navabr from "../Navbar";
import Footer from "../Footer";
import Hero from "./Hero";
import Stats from "./Stats";
import ScrollAnimation from "../scrollAnimation";

function HomePage() {
  return (
    <div>
      <Hero />

      <ScrollAnimation>
        <Stats />
      </ScrollAnimation>

      <ScrollAnimation>
        <WhyFinora />
      </ScrollAnimation>

      <ScrollAnimation>
        <Pricing />
      </ScrollAnimation>

      <ScrollAnimation>
        <Education />
      </ScrollAnimation>

      <OpenAccount />
    </div>
  );
}

export default HomePage;
