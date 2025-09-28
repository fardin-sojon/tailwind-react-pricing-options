import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricing from "../DaisyPricing/DaisyPricing";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
//   console.log(pricingData);

  return (
    <div >
      <h2 className="text-3xl">Get our Membership</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* { 
        pricingData.map((pricing) => (
        <PricingCard key={pricing.id} pricing={pricing}></PricingCard>))
      } */}
      {
        pricingData.map((pricing, index)=><DaisyPricing key={index} pricing={pricing}></DaisyPricing>)
      }
      </div>
    </div>
  );
};

export default PricingOptions;
