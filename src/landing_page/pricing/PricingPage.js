import React from "react";

import Hero from "./Hero";
import QuickPricing from "./QuickPricing";
import Brokerage from "./Brokerage";
import BrokerageCalculator from "./BrokerageCalculator";
import PricingTabs from "./PricingTabs";
import CostTransparency from "./CostTransparency";
import AccountCharges from "./AccountCharges";
import OtherCharges from "./OtherCharges";
import ChargesExplained from "./ChargesExplained";
import PlanComparison from "./PlanComparison";
import PricingFAQ from "./PricingFAQ";
import Disclaimer from "./Disclaimer";

import ScrollAnimation from "../scrollAnimation";

function PricingPage() {
  return (
    <div>
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>

      <ScrollAnimation>
        <QuickPricing />
      </ScrollAnimation>

      <ScrollAnimation>
        <Brokerage />
      </ScrollAnimation>

      <ScrollAnimation>
        <BrokerageCalculator />
      </ScrollAnimation>

      <ScrollAnimation>
        <PricingTabs />
      </ScrollAnimation>

      <ScrollAnimation>
        <CostTransparency />
      </ScrollAnimation>

      <ScrollAnimation>
        <AccountCharges />
      </ScrollAnimation>

      <ScrollAnimation>
        <OtherCharges />
      </ScrollAnimation>

      <ScrollAnimation>
        <ChargesExplained />
      </ScrollAnimation>

      <ScrollAnimation>
        <PlanComparison />
      </ScrollAnimation>

      <ScrollAnimation>
        <PricingFAQ />
      </ScrollAnimation>

      <ScrollAnimation>
        <Disclaimer />
      </ScrollAnimation>
    </div>
  );
}

export default PricingPage;
