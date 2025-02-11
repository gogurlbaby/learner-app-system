import React from "react";
import Application from "./application/application";
import Profile from "./profile/Profile";
import NoApplication from "./application/NoApplication";
import NewRegistration from "./application/NewRegistration";
import { Card, CardContent } from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

function LearnerDashboard() {
  return (
    <div className="">
      <div className="xl:pt-[2.625rem] xl:pb-[7.125rem] xl:pl-[11.813rem] lg:pl-[7.5rem] md:pl-[5rem] bg-[#01589A] flex items-center gap-[1rem] pt-[1rem] pb-[2rem] pl-[1rem]">
        <img src="/images/learner_dashboard/layout-dashboard.svg" alt="" />
        <h2 className="text-white text-[2.5rem] leading-[3rem] font-serif font-bold">
          Dashboard
        </h2>
      </div>
      <div className="xl:bottom-[6rem] relative bottom-[1.5rem] xl:px-[12.5rem] lg:px-[7.5rem] md:px-[5rem] px-[1rem]">
        <Tabs defaultValue="account" className="shadow-none w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="account"
              className="text-black text-base font-sans font-semibold"
            >
              Application
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="text-black text-base font-sans font-semibold"
            >
              Profile
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardContent>
                <div className="">
                  <Application />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardContent>
                <div className="">
                  <Profile />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        {/* <NoApplication /> */}
        {/* <NewRegistration /> */}
      </div>
    </div>
  );
}

export default LearnerDashboard;
