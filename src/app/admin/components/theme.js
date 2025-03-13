import React from "react";
import { Moon } from "lucide-react";

function Theme() {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="px-[1rem] py-[0.5rem] bg-[#F5F5F5] rounded-md">
          <Moon />
        </div>
        <div className="flex justify-center gap-2 p-[0.5rem] bg-[#F5F5F5] rounded-md">
          <img
            src="/images/learner_dashboard/user_icon.svg"
            alt=""
            className=""
          />{" "}
          <p className="text-md font-sans font-normal">John Doe</p>
        </div>
      </div>
    </div>
  );
}

export default Theme;
