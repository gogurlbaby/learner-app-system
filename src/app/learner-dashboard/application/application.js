"use client";

import React, { useState } from "react";
import Button from "../../components/button/Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./application.css";
import stacksButton from "../../../json/application_buttons.json";
import GreyButton from "../../components/button/GreyButton";

function Application() {
  const [useDefaultClass, setUseDefaultClass] = useState(false);
  const getClassName = (index) => {
    const classes = [
      "border-white",
      "border-blue",
      "border-green",
      "border-red",
    ];
    return classes[index % classes.length];
  };
  return (
    <div className="bg-white xl:pt-[1.5rem] xl:pb-[6.25rem] xl:pl-[3.438rem] xl:bottom-[5rem] pt-[1rem] pb-[6.25rem] relative bottom-[0.75rem] rounded-[5px]">
      <div className="xl:flex xl:justify-start flex justify-center items-center gap-[1rem] mb-[2.188rem]">
        <h4 className="text-black text-[1.25rem] font-sans font-semibold leading-[2rem]">
          Application
        </h4>
        <h4 className="text-black text-[1.25rem] font-sans font-semibold leading-[2rem]">
          Profile
        </h4>
      </div>

      <div className="xl:flex xl:gap-[2.5rem] mb-[2.813rem]">
        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">
            Program
          </h4>
          <span className="text-black text-base font-sans font-normal">
            Data Science
          </span>
        </div>

        <hr className="xl:block xl:bg-[#E6E6E6] xl:border-1 xl:w-[0.1rem] xl:h-[5rem] hidden" />

        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">
            Date registered
          </h4>
          <span className="text-black text-base font-sans font-normal">
            2024/11/16
          </span>
        </div>

        <hr className="xl:block xl:bg-[#E6E6E6] xl:w-[0.2rem] xl:h-[5rem] hidden" />

        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">
            Status
          </h4>
          <span className="text-black text-base font-sans font-normal">
            Registered
          </span>
        </div>
        <hr className="xl:block xl:bg-[#E6E6E6] xl:w-[0.2rem] xl:h-[5rem] hidden" />

        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">Paid</h4>
          <span className="text-black text-base font-sans font-normal">
            $150.00
          </span>
        </div>
      </div>

      <hr className="xl:block xl:bg-[#E6E6E6] xl:my-[2.813rem] hidden" />

      <div className="flex flex-wrap gap-[1.5rem] mb-[3.5rem]">
        {stacksButton.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            className={`btn ${useDefaultClass ? "" : getClassName(index)}`}
          >
            {item.stackName}
          </a>
        ))}
      </div>
      <div className="application-btn-container">
        <Button
          Text="Start new application"
          Icon={<MdKeyboardArrowRight size={25} />}
          className="application-btn"
        />
        <GreyButton
          Text="Home"
          Icon={<MdKeyboardArrowRight size={25} className="text-[#404040]" />}
          className="home-btn"
        />
      </div>
    </div>
  );
}

export default Application;
