"use client";

import React, { useState } from "react";
import stacks from "../../learner/json/stacks.json";
import "./stacks.css";

function Stacks() {
  const [useDefaultClass, setUseDefaultClass] = useState(false);
  const getStackClassNames = (index) => {
    const classes = [
      "border-white",
      "border-blue",
      "border-green",
      "border-red",
      "border-grey",
    ];
    return classes[index % classes.length];
  };
  return (
    <div className="bg-[#01589A] xl:pt-[2.125rem] xl:pb-[3.938rem] xl:px-[21rem] md:pt-[1.5rem] md:pb-[6.438rem] md:px-[3rem] pt-[1.5rem] pb-[6.438rem] px-[1rem]">
      <h4 className="text-white text-[2.5rem] font-bold font-serif leading-[3rem] text-center mb-[1rem]">
        What will be next step
      </h4>
      <p className="text-white text-base font-normal font-sans text-center mb-[2.5rem]">
        Discover our diverse stack of solutions, including software development,
        data science, and cloud tools. Sign up today and kickstart your journey!
      </p>
      <div className="stacks-btn-container">
        {stacks.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            className={`stacks-btn ${
              useDefaultClass ? "" : getStackClassNames(index)
            }`}
          >
            {item.stack}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Stacks;
