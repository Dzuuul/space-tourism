import React from "react";

const Hero = () => {
  return (
    <div className="container flex mt-80 fadein-animation">
      <div style={{ width: "450px" }} className=" text-white mx-auto ">
        <p
          style={{
            fontSize: "28px",
            lineHeight: "34px",
            letterSpacing: "4.725px",
          }}
          className="font-barlow text-whitemoon"
        >
          SO, YOU WANT TO TRAVEL TO
        </p>
        <p style={{ fontSize: "150px" }} className="font-bellefair">
          SPACE
        </p>
        <p
          style={{ fontSize: "18px", lineHeight: "32px" }}
          className="font-barlow text-whitemoon"
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className="relative">
      <a href="/destination/1">
        <button
          type="button"
          className="absolute text-gray-700 rounded-full bg-white flex items-center justify-center font-bellefair"
          style={{ height: "274px", width: "274px", fontSize: "32px" }}
        >
          EXPLORE
        </button>
        <div className="text-gray-700 rounded-full bg-white flex items-center justify-center circle-landing"></div>
      </a>
      </div>
    </div>
  );
};

export default Hero;
