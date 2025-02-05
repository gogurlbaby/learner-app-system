"use client";

import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="xl:pt-[3.125rem] xl:pb-[1.5rem] xl:px-[12.5rem] bg-[#01589a] pt-[2.875rem] pb-[1.125rem] px-[1.875rem]">
      <div className="xl:grid-cols-4 xl:gap-[5rem] grid grid-cols-1 gap-[1.5rem]">
        <img
          src="/images/azubi-footer-logo.svg"
          alt="Footer Logo"
          className="w-full mb-[2.5rem]"
        />

        <div className="menu-container">
          <p className="text-white text-[1.125rem] font-semibold font-sans leading-[2rem] mb-[0.875rem]">
            Menu
          </p>
          <div className="flex flex-col gap-[1rem]">
            <a
              href=""
              className="no-underline text-white font-base font-normal font-sans"
            >
              Home
            </a>
            <a
              href=""
              className="no-underline text-white font-base font-normal font-sans"
            >
              Courses
            </a>
          </div>
        </div>

        <div className="contact-container">
          <p className="text-white text-[1.125rem] font-semibold font-sans leading-[2rem] mb-[0.875rem]">
            Contact
          </p>
          <p className="no-underline text-white font-base font-normal font-sans mb-[1rem]">
            +23341002000
          </p>
          <p className="no-underline text-white font-base font-normal font-sans">
            New Reiss, Ghana, Accra
          </p>
        </div>

        <div className="social-container">
          <p className="text-white text-[1.125rem] font-semibold font-sans leading-[2rem] mb-[0.875rem]">
            Social
          </p>
          <div className="flex flex-col gap-[1rem]">
            <a
              href=""
              className="text-white font-base font-normal font-sans underline"
            >
              LinkedIn
            </a>
            <a
              href=""
              className="text-white font-base font-normal font-sans underline"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div>
        <hr className="mt-[4.625rem] mb-[1.25rem] text-white" />
        <div className="xl:flex xl:justify-between xl:items-center">
          <span className="text-white text-[1.125rem] font-normal font-sans leading-[2rem] text-center">
            copyright {currentYear} - G-client, All rights reserved
          </span>
          <div className="flex justify-center gap-[0.5rem] mt-[1.5rem]">
            <p className="text-white text-[1.125rem] font-normal font-sans leading-[2rem] text-center">
              Back to top
            </p>
            <IoArrowUpOutline
              size={25}
              className="text-white border border-solid border-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
