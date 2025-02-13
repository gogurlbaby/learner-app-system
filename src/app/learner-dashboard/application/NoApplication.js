import React from "react";
import Button from "../../components/button/Button";
import GreyButton from "../../components/button/GreyButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

function NoApplication({ onStartRegistration }) {
  const router = useRouter();

  const handleStartNewApplication = () => {
    localStorage.setItem("registrationInProgress", true);
    onStartRegistration();
  };

  return (
    <div className="bg-white xl:pt-[1.5rem] xl:pb-[6.25rem] xl:pl-[3.438rem] xl:bottom-[5rem] md:bottom-[1.5rem] pt-[1rem] pb-[6.25rem] relative bottom-[0.75rem] rounded-[5px]">
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
          Icon={<ChevronLeft size={25} />}
          iconPosition="left"
          onClick={() => router.back()}
        />
        <Button
          Text="Start new application"
          Icon={<ChevronRight size={25} />}
          onClick={handleStartNewApplication}
        />
      </div>
    </div>
  );
}

export default NoApplication;
