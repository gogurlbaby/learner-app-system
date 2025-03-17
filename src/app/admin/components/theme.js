import React from "react";
import { Moon } from "lucide-react";

function Theme() {
  return (
    <>
      <div className="flex gap-4 items-center">
        <div className="lg:px-[1rem] lg:py-[0.5rem] p-[0.5rem] bg-[#F5F5F5] rounded-md">
          <Moon />
        </div>
        <div className="flex items-center gap-2 p-[0.5rem] bg-[#F5F5F5] rounded-md">
          <img
            src="/images/learner_dashboard/user_icon.svg"
            alt=""
            className="w-10"
          />{" "}
          <span className="lg:block hidden text-md font-sans font-normal">
            John Doe
          </span>
        </div>
      </div>
    </>
  );
}

export default Theme;
