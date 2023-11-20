"use client";

import React, { useState, useEffect } from "react";
import { allProject } from "./projectData";

export default function Portfolio() {
  const [deviceType, setDeviceType] = useState(getDeviceType());

  useEffect(() => {
    function handleResize() {
      setDeviceType(getDeviceType());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //   function that catch responsive increation to change project image based on this .
  function getDeviceType() {
    const width = typeof window !== "undefined" ? window.innerWidth : 0;

    if (width <= 768) {
      return "mobile";
    } else if (width <= 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  }

  return (
    <div
      className="mt-[56px] mb-[132px] flex flex-col items-center gap-[24px] w-full md:w-[573px] self-center lg:w-[860px] xl:w-[1110px] 
    lg:flex-row lg:gap-[30px] flex-wrap"
    >
      {allProject.allProject.map((project, index) => {
        const imageUrl =
          deviceType === "mobile"
            ? project.image
            : deviceType === "tablet"
            ? project.image1
            : project.image2;

        return (
          <div
            key={index}
            className="w-[311px] h-[240px] flex flex-col items-start justify-end px-[24px] py-[23px] relative bg-no-repeat bg-cover md:w-full 
            md:pl-[40px] md:pb-[40px] lg:w-[266px] lg:h-[560px] xl:w-[350px]"
            style={{ backgroundImage: `url(${imageUrl})` }} // Set background image//
          >
            <h1 className="z-10 text-[32px] leading-[40px] text-white self-start font-bold">
              {project.name}
            </h1>
            <p className="z-10 text-[18px] leading-[24px] text-white self-start font-medium opacity-75">
              {project.date}
            </p>

            {/* for overlay */}
            <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
          </div>
        );
      })}
    </div>
  );
}
