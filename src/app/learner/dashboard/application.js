"use client";

import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../../styles/application.css";
import stacksButton from "../json/application_buttons.json";
import GreyButton from "../../components/button/GreyButton";
import { useRouter } from "next/navigation";

function Application({ onStartRegistration }) {
  const [applicationData, setApplicationData] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const router = useRouter();

  useEffect(() => {
    const fetchApplicationData = async () => {
      if (!user.email) return;

      try {
        const res = await fetch(
          `https://tmp-se-project.azurewebsites.net/api/learners/${user.email}`
        );
        const data = await res.json();

        if (res.ok) {
          setApplicationData(data.learner);
        } else {
          console.log("Error fetching application:", data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchApplicationData();
  }, [user.email]);

  // if (!applicationData) {
  //   return <p>Loading application details...</p>;
  // }

  const [useDefaultClass, setUseDefaultClass] = useState(false);
  const getClassName = (index) => {
    const classes = [
      "border-white",
      "border-blue",
      "border-green",
      "border-red",
    ];
    return classes[index % classes.length];
  };
  return (
    <div className="bg-white xl:pt-[1.5rem] xl:pb-[6.25rem] xl:pl-[3.438rem] pt-[1rem] pb-[6.25rem] rounded-[5px]">
      <div className="xl:flex xl:gap-[2.5rem] mb-[2.813rem]">
        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">
            Program
          </h4>
          <span className="text-black text-base font-sans font-normal">
            {/* {applicationData.course} */}
            Data Science
          </span>
        </div>

        <hr className="xl:block xl:bg-[#E6E6E6] xl:border-1 xl:w-[0.1rem] xl:h-[5rem] hidden" />

        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">
            Date registered
          </h4>
          <span className="text-black text-base font-sans font-normal">
            {/* {new Date(applicationData.createdAt).toLocaleDateString()} */}
            2024/11/16
          </span>
        </div>

        <hr className="xl:block xl:bg-[#E6E6E6] xl:w-[0.2rem] xl:h-[5rem] hidden" />

        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">
            Status
          </h4>
          <span className="text-black text-base font-sans font-normal">
            {/* {applicationData.status || "Pending"} */}
            Registered
          </span>
        </div>
        <hr className="xl:block xl:bg-[#E6E6E6] xl:w-[0.2rem] xl:h-[5rem] hidden" />

        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">Paid</h4>
          <span className="text-black text-base font-sans font-normal">
            {/* ${applicationData.amount || "N/A"} */}
            $150.00
          </span>
        </div>
      </div>

      <hr className="xl:block xl:bg-[#E6E6E6] xl:my-[2.813rem] hidden" />

      <div className="flex flex-wrap gap-[1.5rem] mb-[3.5rem]">
        {stacksButton.map((item, index) => (
          <a
            key={item.id}
            href={item.link}
            className={`btn ${useDefaultClass ? "" : getClassName(index)}`}
          >
            {item.stackName}
          </a>
        ))}
      </div>
      <div className="application-btn-container">
        <Button
          Text="Start new application"
          iconPosition="left"
          Icon={<ChevronLeft size={25} />}
          onClick={onStartRegistration}
        />
        <GreyButton
          Text="Home"
          Icon={<ChevronRight size={25} className="text-[#404040]" />}
          onClick={() => router.push("/")}
        />
      </div>
    </div>
  );
}

export default Application;
