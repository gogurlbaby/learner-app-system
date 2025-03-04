"use client";

import React, { useState } from "react";
import { LogIn } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import SignUp from "../../learner/auth/signup/SignUp";
import Login from "../../learner/auth/login/LoginForm";
import ForgotPassword from "../../learner/auth/forgot_password/ForgotPassword";
import ResetPassword from "../../learner/auth/forgot_password/ResetPassword";
import OtpVerification from "../../learner/auth/otp/OtpVerification";

function CustomPopover({ handleLogin }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [activeForm, setActiveForm] = useState("login");
  const [userEmail, setUserEmail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [otp, setOtp] = useState("");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleOtpFlow = (email, verificationToken) => {
    setUserEmail(email);
    setOtp(verificationToken);
    setActiveForm("otpVerification");
    setPopoverOpen(true);
  };

  const handleOtpSuccess = (userData) => {
    handleLogin(userData);
    setPopoverOpen(false);
  };

  const handleToggle = (form = "login", email = "", token = "") => {
    setActiveForm(form);
    setUserEmail(email);
    if (token) setResetToken(token);
    setIsSignUp(form === "signup");
    setPopoverOpen(true);
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
      case "otpVerification":
        return (
          <OtpVerification
            email={userEmail}
            token={otp}
            onOtpSuccess={handleOtpSuccess}
          />
        );
      case "forgotPassword":
        return <ForgotPassword onSwitch={handleToggle} />;
      case "resetPassword":
        return (
          <ResetPassword resetToken={resetToken} onSwitch={setActiveForm} />
        );
      default:
        return (
          <Login
            onSwitch={() => setActiveForm("signup")}
            handleLogin={handleLogin}
          />
        );
    }
  };

  return (
    <div>
      {!popoverOpen && (
        <button
          className="text-[#01589a] border-1 border-solid border-[#01589a] rounded-[5px] font-semibold font-sans text-base flex gap-[0.5rem] items-center py-[0.5rem] px-[1.5rem] hover:bg-[#01589a] hover:text-white cursor-pointer"
          onClick={() => setPopoverOpen(true)}
        >
          Login <LogIn />
        </button>
      )}
      <Popover modal open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <div></div>
        </PopoverTrigger>
        <PopoverContent
          style={{ maxWidth: "300px" }}
          className="w-full border border-solid border-[#01589a] rounded-[5px] z-[1050] bg-white"
        >
          {(activeForm === "login" || activeForm === "signup") && (
            <div className="text-black text-[2.5rem] font-bold font-serif leading-[3rem] text-center mb-[2rem]">
              {isSignUp ? "Sign Up" : "Login"}
            </div>
          )}
          {otp && (
            <p className="text-red-500 text-center text-base">
              Your OTP: {otp}
            </p>
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

          {(activeForm === "login" || activeForm === "signup") && (
            <button
              onClick={() => handleToggle(isSignUp ? "login" : "signup")}
              className="text-[#404040] underline decoration-[#01589a] text-lg mt-4 cursor-pointer"
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Need to create an account? Signup"}
            </button>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default CustomPopover;
