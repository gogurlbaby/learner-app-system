"use client";

import React from "react";
import solutions from "../../../json/solutions.json";

function Solutions() {
  return (
    <div className="bg-white xl:pt-[5.875rem] xl:pb-[4.688rem] xl:px-[11.875rem] pt-[1.25rem] pb-[3rem] px-[1rem]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black text-[2.5rem] font-bold font-serif mb-[1rem]">
          Our solutions
        </h2>
        <p className="text-black text-base font-normal font-sans mb-[1rem]">
          Create your account quickly with just your email or social media
          login, then explore a wide range
        </p>
      </div>

      <div className="xl:flex xl:flex-row xl:gap-[1.75rem] xl:mt-[2rem] flex flex-col gap-[1rem]">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="border border-solid border-white mt-[1.75rem] p-[1.5rem] shadow-[0px_16px_32px_0px_#00000026]"
          >
            <img
              src={solution.iconUrl}
              alt={solution.title}
              className="mb-1rem"
            />
            <h4 className="text-black text-[1.25rem] font-semibold font-sans mb-[1rem] text-left leading-[2rem]">
              {solution.title}
            </h4>
            <p className="text-black text-base font-normal font-sans mb-[1rem] text-left">
              {solution.description}
            </p>
            <p className="text-[#999] text-base font-semibold font-sans mt-[1rem] text-left">
              Price: <span className="text-black">{solution.price}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
