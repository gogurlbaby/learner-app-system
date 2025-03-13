import React from "react";
import { Banknote, Clock, FileText, Users } from "lucide-react";
import Theme from "../components/theme";

function AdminDashboard() {
  return (
    <>
      <div className="absolute right-0 pr-[4rem]">
        <Theme />
      </div>
      <div className="mt-[3.375rem]">
        <div>
          <h2 className="text-black font-sans font-semibold font-lg">
            Dashboard
          </h2>
          <p className="text-black font-sans font-normal font-sm">
            Welcome back, John
          </p>
        </div>

        <div className="lg:grid-cols-4 grid grid-cols-1 gap-4 mt-[2rem]">
          <div className="flex bg-[#F5F5F5] pt-[1rem] pb-[0.5rem] rounded-md">
            <Banknote />
            <p className="text-[#404040] font-sans font-bold font-md">
              Collected
            </p>
            <div className="bg-white py-[1rem] px-[3rem] rounded-md mt-[2rem]">
              <p className="text-[#404040] font-sans font-bold font-md">
                $20000
              </p>
            </div>
          </div>

          <div className="flex gap-2 bg-[#F5F5F5] pt-[1rem] pb-[0.5rem] px-[1rem] rounded-md">
            <Clock />
            <p className="text-[#404040] font-sans font-bold font-md">
              Pending
            </p>
            <div className="bg-white py-[1rem] px-[3rem] rounded-md mt-[2rem]">
              <p className="text-[#404040] font-sans font-bold font-md">
                $10000
              </p>
            </div>
          </div>

          <div className="flex gap-2 bg-[#F5F5F5] pt-[1rem] pb-[0.5rem] px-[1rem] rounded-md">
            <FileText />
            <p className="text-[#404040] font-sans font-bold font-md">
              Total Invoices
            </p>
            <div className="bg-white py-[1rem] px-[3rem] rounded-md mt-[2rem]">
              <p className="text-[#404040] font-sans font-bold font-md">35</p>
            </div>
          </div>

          <div className="flex gap-2 bg-[#F5F5F5] pt-[1rem] pb-[0.5rem] px-[1rem] rounded-md">
            <Users />
            <p className="text-[#404040] font-sans font-bold font-md">
              Total Learners
            </p>
            <div className="bg-white py-[1rem] px-[3rem] rounded-md mt-[2rem]">
              <p className="text-[#404040] font-sans font-bold font-md">50</p>
            </div>
          </div>
        </div>

        <div className="lg:grid-cols-2 grid grid-cols-1 gap-4 mt-[2rem] mt-5">
          <div>
            <p className="text-black font-sans font-semibold font-lg ">
              Recent Revenue
            </p>
            <div className="bg-[#F5F5F5] py-[5rem] px-[6rem] rounded-md">
              <div className="bg-white py-[4rem] px-[5rem]"></div>
            </div>
          </div>

          <div>
            <p className="text-black font-sans font-semibold font-lg">
              Latest Invoices
            </p>
            <div className="bg-[#F5F5F5] py-[5rem] px-[6rem] rounded-md">
              <div className="bg-white py-[4rem] px-[5rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
