import React from "react";
import Button from "../../components/button/Button";
import GreyButton from "../../components/button/GreyButton";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function NoApplication() {
  return (
    <div className="bg-white xl:pt-[1.5rem] xl:pb-[6.25rem] xl:pl-[3.438rem] xl:bottom-[5rem] md:bottom-[1.5rem] pt-[1rem] pb-[6.25rem] relative bottom-[0.75rem] rounded-[5px]">
      <div className="xl:flex xl:justify-start flex justify-center items-center gap-[1rem] mb-[2.188rem]">
        <h4 className="text-black text-[1.25rem] font-sans font-semibold leading-[2rem]">
          Application
        </h4>
        <h4 className="text-black text-[1.25rem] font-sans font-semibold leading-[2rem]">
          Profile
        </h4>
      </div>

      <div className="flex flex-col justify-content items-center gap-[2.5rem] mb-[3.5rem]">
        <img
          src="/images/learner_dashboard/no_application_image.svg"
          alt=""
          className="xl:w-[50%] w-full"
        />
        <p className="text-black text-base font-sans font-semibold">
          !!! OOPs no application
        </p>
      </div>

      <div className="application-btn-container">
        <GreyButton
          Text="Back"
          Icon={<MdKeyboardArrowLeft size={25} />}
          iconPosition="left"
        />
        <Button
          Text="Start new application"
          Icon={<MdKeyboardArrowRight size={25} />}
          className="application-btn"
        />
      </div>
    </div>
  );
}

export default NoApplication;
