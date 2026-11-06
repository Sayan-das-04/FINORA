import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import ApiSection from "./ApiSection";
import LearnSection from "./LearnSection";
import InvestSection from "./InvestSection";
import Universe from "./Universe";

import ScrollAnimation from "../scrollAnimation";

function ProductPage() {
  return (
    <div>
      <Hero />

      <LeftSection />

      <RightSection />

      <ApiSection />

      <LearnSection />

      <InvestSection />

      <Universe />
    </div>
  );
}

export default ProductPage;
