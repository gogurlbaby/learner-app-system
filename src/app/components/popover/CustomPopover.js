"use client";

import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { LogIn } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import SignUp from "../../user/signup/SignUp";
import Login from "../../user/login/LoginForm";
import ForgotPassword from "@/app/user/forgot_password/ForgotPassword";
import ResetPassword from "@/app/user/forgot_password/ResetPassword";
import OtpVerification from "@/app/user/otp/OtpVerification";

function CustomPopover({ handleLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [activeForm, setActiveForm] = useState("login");
  const [userEmail, setUserEmail] = useState("");

  const handleOtpFlow = (email) => {
    setUserEmail(email);
    setActiveForm("otpVerification");
  };

  const renderForm = () => {
    switch (activeForm) {
      case "signup":
        return (
          <SignUp
            onSwitch={() => setActiveForm("login")}
            handleOtpFlow={handleOtpFlow}
          />
        );
      case "forgotPassword":
        return <ForgotPassword onSwitch={() => setActiveForm("login")} />;
      case "resetPassword":
        return <ResetPassword onSwitch={() => setActiveForm("login")} />;
      case "otpVerification":
        return (
          <OtpVerification
            email={userEmail}
            onSwitch={() => setActiveForm("login")}
            handleLogin={handleLogin}
          />
        );
      default:
        return (
          <Login
            onSwitch={() => setActiveForm("signup")}
            handleOtpFlow={handleOtpFlow}
          />
        );
    }
  };

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
    setActiveForm((prev) => (prev === "signup" ? "login" : "signup"));
  };

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant=""
            className="text-[#01589a] bg-white border border-solid border-[#01589a] rounded-[5px] flex justify-center items-center py-[0.75rem]! px-[1.5rem]! hover:bg-[#01589a]! hover:text-white! cursor-pointer"
          >
            Login <LogIn />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="xl:w-[120%] w-full border border-solid border-[#01589a] rounded-[5px]">
          {(activeForm === "login" || activeForm === "signup") && (
            <div className="text-black text-[2.5rem] font-bold font-serif leading-[3rem] text-center mb-[2rem]">
              {isSignUp ? "Sign Up" : "Login"}
            </div>
          )}
          {renderForm()}
          {activeForm === "login" && (
            <div className="mt-4">
              <a
                onClick={() => setActiveForm("forgotPassword")}
                className="no-underline text-[#177ddc] text-base font-normal font-sans cursor-pointer"
              >
                Forgot password?
              </a>
            </div>
          )}

          <button
            onClick={handleToggle}
            className="text-[#404040] underline decoration-[#01589a] text-lg mt-4 cursor-pointer"
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Need to create an account? Signup"}
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default CustomPopover;
