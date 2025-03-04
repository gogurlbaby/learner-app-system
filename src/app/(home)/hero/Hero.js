"use client";
import "./hero.css";

import React from "react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1 className="xl:text-[2.5rem] xl:leading-[3rem] xl:text-left md:text-center text-[1.25rem] font-bold font-serif text-white leading-[1.5rem] mt-[1rem] text-left">
          Unlock Your Potential with Industry-Leading Courses!
        </h1>
        <p className="xl:text-[1.25rem] xl:leading-[2rem] xl:text-left md:text-center font-base font-normal font-sans text-white mt-[1.5rem] text-left">
          "Join thousands of learners gaining real-world skills and advancing
          their careers. Our expert-led courses are designed to empower you to
          succeed."
        </p>
        <div className="flex justify-center items-center">
          <a
            href="#HomeRegister"
            className="no-underline text-white py-[0.75rem] px-[1.5rem] rounded-[5px] border border-solid border-white text-base font-semibold font-sans cursor-pointer hover:border-[#E6EFF5]"
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="image-container">
        <img src="/images/home/hero-image.svg" alt="Hero Image" />
      </div>
    </div>
  );
}

export default Hero;
