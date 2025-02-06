import React from "react";
import Application from "./application/application";
import Profile from "./profile/Profile";
import NoApplication from "./application/NoApplication";
import NewRegistration from "./application/NewRegistration";

function LearnerDashboard() {
  return (
    <div className="">
      <div className="xl:pt-[2.625rem] xl:pb-[7.125rem] xl:pl-[11.813rem] bg-[#01589A] flex items-center gap-[1rem] pt-[1rem] pb-[2rem] pl-[1rem]">
        <img src="/images/learner_dashboard/layout-dashboard.svg" alt="" />
        <h2 className="text-white text-[2.5rem] leading-[3rem] font-serif font-bold">
          Dashboard
        </h2>
      </div>
      <div className="xl:px-[12.5rem] px-[1rem]">
        <Application />
        {/* <Profile /> */}
        {/* <NoApplication /> */}
        {/* <NewRegistration /> */}
      </div>
    </div>
  );
}

export default LearnerDashboard;
