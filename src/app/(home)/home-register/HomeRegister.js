"use client";

import React from "react";
import { BsFillRecordCircleFill } from "react-icons/bs";
import HomeRegisterationForm from "./HomeRegisterationForm";

function HomeRegister() {
  return (
    <div
      id="HomeRegister"
      className="text-white xl:pt-[3rem] xl:pb-[3.75rem] xl:px-[12.5rem] pt-[6.25rem] pb-[5.375rem] px-[1rem]"
    >
      <div className="xl:flex xl:flex-row xl:items-center xl:gap-[7rem] flex flex-col">
        <div className="flex gap-[1.875rem]">
          <div className="">
            <BsFillRecordCircleFill size={40} className="text-[#177DDC]" />
            <hr className="xl:h-[5rem] md:h-[3rem] border border-solid border-[#D1E5F8] bg-[#177DDC] w-[0.2rem] h-[5rem] relative left-[1.2rem]" />
            <BsFillRecordCircleFill size={40} className="text-[#177DDC]" />
            <hr className="xl:h-[5rem] md:h-[3rem] border border-solid border-[#D1E5F8] bg-[#177DDC] w-[0.2rem] h-[5rem] relative left-[1.2rem]" />
            <BsFillRecordCircleFill size={40} className="text-[#177DDC]" />
          </div>

          <div className="text-container">
            <div>
              <p className="text-black font-base font-bold font-sans mb-[1rem]">
                Sign Up and Choose Your Course
              </p>
              <p className="text-black font-base font-normal font-sans text-left">
                Create your account quickly with just your email or social media
                login, then explore a wide range
              </p>
            </div>

            <div className="mt-[2.875rem]">
              <p className="text-black font-base font-bold font-sans mb-[1rem]">
                Onboarding
              </p>
              <p className="text-black font-base font-normal font-sans text-left">
                Create your account quickly with just your email or social media
                login, then explore a wide range
              </p>
            </div>

            <div className="mt-[2.875rem]">
              <p className="text-black font-base font-bold font-sans mb-[1rem]">
                Start Learning
              </p>
              <p className="text-black font-base font-normal font-sans text-left">
                Create your account quickly with just your email or social media
                login, then explore a wide range
              </p>
            </div>
          </div>
        </div>
        <HomeRegisterationForm />
      </div>
    </div>
  );
}

export default HomeRegister;
