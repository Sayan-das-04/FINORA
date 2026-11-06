import React from "react";
import Hero from "./Hero";
import OurStory from "./OurStory";
import Mission from "./Mission";
import Philosophy from "./Philosophy";
import Team from "./Team";
import ScrollAnimation from "../scrollAnimation";

function AboutPage() {
  return (
    <div>
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>

      <ScrollAnimation>
        <OurStory />
      </ScrollAnimation>

      <ScrollAnimation>
        <Mission />
      </ScrollAnimation>

      <ScrollAnimation>
        <Philosophy />
      </ScrollAnimation>

      <ScrollAnimation>
        <Team />
      </ScrollAnimation>
    </div>
  );
}

export default AboutPage;
