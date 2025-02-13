"use client";

import React, { useEffect, useState } from "react";
import Application from "./application/application";
import Profile from "./profile/Profile";
import NoApplication from "./application/NoApplication";
import NewRegistration from "./application/NewRegistration";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

function LearnerDashboard() {
  const [activeTab, setActiveTab] = useState("no-application");
  const [registrationComplete, setRegistrationComplete] = useState(false);

  useEffect(() => {
    const isSignedUp = localStorage.getItem("userSignedUp");
    if (isSignedUp) {
      setActiveTab("no-application");
      localStorage.removeItem("userSignedUp");
    }
  }, []);

  const handleStartRegistration = () => {
    setActiveTab("new-registration");
  };

  const handleRegistrationComplete = () => {
    setRegistrationComplete(true);
    setActiveTab("application");
  };

  return (
    <div className="">
      <div className="xl:pt-[2.625rem] xl:pb-[7.125rem] xl:pl-[11.813rem] lg:pl-[7.5rem] md:pl-[5rem] bg-[#01589A] flex items-center gap-[1rem] pt-[1rem] pb-[2rem] pl-[1rem]">
        <img src="/images/learner_dashboard/layout-dashboard.svg" alt="" />
        <h2 className="text-white text-[2.5rem] leading-[3rem] font-serif font-bold">
          Dashboard
        </h2>
      </div>
      <div className="xl:bottom-[3.5rem] relative bottom-[1.5rem] xl:px-[12.5rem] lg:px-[7.5rem] md:px-[5rem] px-[1rem]">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="shadow-none w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            {registrationComplete && (
              <>
                <TabsTrigger
                  value="application"
                  className="text-black text-base font-sans font-semibold"
                >
                  Application
                </TabsTrigger>
                <TabsTrigger
                  value="profile"
                  className="text-black text-base font-sans font-semibold"
                >
                  Profile
                </TabsTrigger>
              </>
            )}
          </TabsList>

          {!registrationComplete && (
            <TabsContent value="no-application">
              <NoApplication onStartRegistration={handleStartRegistration} />
            </TabsContent>
          )}
          <TabsContent value="new-registration">
            <NewRegistration onComplete={handleRegistrationComplete} />
          </TabsContent>

          {registrationComplete && (
            <>
              <TabsContent value="application">
                <Application onStartRegistration={handleStartRegistration} />
              </TabsContent>
              <TabsContent value="profile">
                <Profile />
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
}

export default LearnerDashboard;
