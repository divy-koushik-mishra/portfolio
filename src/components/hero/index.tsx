import React from "react";
import LogoSection from "./logoSection";
import ProfileCardSection from "./profileCardSection";
import DiagonalLineGradientBgFull from "./diagonalLineGradientBgFull";
import BioSection from "./bioSection";

const HeroSection = () => {
  return (
    <div className="w-full flex items-center flex-col justify-center">
      <div className="w-full flex justify-center border-b border-neutral-200">
        <LogoSection />
      </div>
      <div className="w-full flex justify-center border-b border-neutral-200">
        <ProfileCardSection />
      </div>
      <DiagonalLineGradientBgFull />
      <div className="w-full flex justify-center border-b border-neutral-200">
        <BioSection />
      </div>
      <DiagonalLineGradientBgFull />
    </div>
  );
};

export default HeroSection;
