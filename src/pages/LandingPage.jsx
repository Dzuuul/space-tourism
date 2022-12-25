import React from "react";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <>
      <div className="bg-landing bg-cover h-screen overflow-auto scrollbar-hide">
        <Hero />
      </div>
    </>
  );
};

export default LandingPage;
