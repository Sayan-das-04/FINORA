import React from "react";

import Hero from "./Hero";
import Categories from "./Categories";
import QuickHelp from "./QuickHelp";
import Status from "./Status";
import FAQ from "./FAQ";
import ContactSupport from "./ContactSupport";
import SupportCTA from "./SupportCTA";

import ScrollAnimation from "../scrollAnimation";

function SupportPage() {
  return (
    <div>
      {/* Hero */}
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>

      {/* Help Categories */}
      <ScrollAnimation>
        <Categories />
      </ScrollAnimation>

      {/* Quick Help */}
      <ScrollAnimation>
        <QuickHelp />
      </ScrollAnimation>

      {/* System Status */}
      <ScrollAnimation>
        <Status />
      </ScrollAnimation>

      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>

      <ScrollAnimation>
        <ContactSupport />
      </ScrollAnimation>

      {/* Final CTA */}
      <ScrollAnimation>
        <SupportCTA />
      </ScrollAnimation>
    </div>
  );
}

export default SupportPage;
