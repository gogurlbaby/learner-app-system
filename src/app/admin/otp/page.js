"use client";

import React, { useEffect, useState } from "react";
import CustomForm from "../../components/custom-form/CustomForm";
import Button from "../../components/button/Button";
import * as Yup from "yup";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "../../../hooks/use-toast";

function EmailVerification() {
  const [otp, setOtp] = useState("");
  const [loading, SetLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const initialValues = {
    emailVerification: "",
  };

  const otpSchema = Yup.object().shape({
    emailVerification: Yup.string()
      .matches(/^\d{6}$/, "OTP must be exactly 6 numbers")
      .required("OTP is required"),
  });

  useEffect(() => {
    const storedOtp = localStorage.getItem("otp");

    if (storedOtp) {
      setOtp(storedOtp);
    }
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/admin/auth/verify-email";

    const requestBody = {
      token: values.emailVerification,
    };

    console.log("Sending to API:", requestBody);

    SetLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log("OTP Verification Response", data);

      if (res.ok) {
        toast({
          title: data.message,
          description: "Redirecting to dashboard...",
          duration: 3000,
          className: "bg-emerald-700 text-white",
        });
        localStorage.setItem(
          "adminUser",
          JSON.stringify({ email: localStorage.getItem("adminEmail") })
        );
        localStorage.removeItem("otp");
        localStorage.removeItem("adminEmail");
        router.push("/admin/dashboard");
      } else {
        toast({
          title: "Invalid or expired OTP.",
          description: data.message || "Please try again.",
          duration: 3000,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error.",
        description: "Something went wrong. Please try again.",
        duration: 3000,
        className: "bg-yellow-500 text-white",
      });
    } finally {
      setSubmitting(false);
      SetLoading(false);
    }
  };

  const fields = [
    { name: "emailVerification", type: "text", placeholder: "123456" },
  ];
  return (
    <>
      {/* Left Section */}
      <div className="xl:flex xl:gap-x-[9rem] xl:h-screen h-[150vh] xl:bg-[url(/images/admin/otp.svg)] xl:bg-contain xl:bg-no-repeat bg-[linear-gradient(180deg,#01589A_0%,#13A3DF_100%)]">
        {/* Mobile */}
        <div className="xl:hidden pt-[1.5rem] px-[1rem]">
          <img src="/images/admin/azubi-logo.svg" alt="" className="w-[30%]" />
          <button
            type="button"
            onClick={() => router.back("")}
            className="mt-[2rem] flex gap-[0.75rem] items-center justify-center py-[0.5rem] px-[1rem] rounded-[5px] bg-transparent border border-solid border-[#F5F5F5] text-base font-semibold font-sans text-white"
          >
            <ArrowLeft size={25} className="text-white" />
            Back
          </button>
        </div>
        {/* Desktop */}
        <div className="hidden xl:block xl:pt-[3.75rem] xl:px-[2rem]">
          <img
            src="/images/admin/azubi-logo.svg"
            alt=""
            className="xl:w-[30%] xl:mb-[1.5rem]"
          />
          <h4 className="xl:text-white xl:font-serif xl:font-semibold xl:text-[1.25rem] xl:max-w-lg">
            Secure Your Account with OTP Verification. Simply enter the code
            we’ve sent to ensure your information stays safe and protected.
          </h4>
        </div>
        {/* Form */}
        <div className="xl:pt-[3.75rem] pt-[4.688rem] pb-[6.25rem] px-[1rem]">
          <div className="hidden xl:flex xl:justify-start xl:gap-[1.5rem] xl:mb-[1rem]">
            <button
              type="button"
              onClick={() => router.back("")}
              className="xl:bg-white xl:text-[#01589A] xl:border xl:border-solid xl:border-[#01589A] xl:flex xl:gap-[0.75rem] xl:items-center xl:justify-center xl:py-[0.5rem] xl:px-[1rem] xl:rounded-[5px] xl:font-semibold xl:font-sans"
            >
              <ArrowLeft size={25} className="text-[#01589A]" />
              Back
            </button>
          </div>
          <p className="text-white font-serif font-normal text-base text-center mb-[2rem]">
            Enter the verification code we sent to your{" "}
            <strong>admindemo@gmail.com</strong>
          </p>
          <h2 className="xl:mt-[6rem] xl:text-left xl:text-[#000] text-[#fff] font-serif font-bold text-[2rem] text-center mb-[2rem]">
            OTP verification
          </h2>
          <div className="xl:border-none xl:rounded-none bg-white rounded-xl p-[0.5rem] border border-solid border-white">
            {otp && (
              <p className="text-red-500 text-center text-lg font-semibold">
                OTP: {otp}
              </p>
            )}

            <CustomForm
              initialValues={initialValues}
              validationSchema={otpSchema}
              fields={fields}
              onSubmit={handleSubmit}
              formType="admin"
              submitButton={(isSubmitting) => (
                <div className="mt-3">
                  <Button
                    Text={loading ? "Verifying..." : "Verify"}
                    type="submit"
                    disabled={isSubmitting}
                    Icon={<ChevronRight size={25} />}
                  />
                </div>
              )}
            />
          </div>
          <p className="xl:text-[#000] text-[#fff] text-base font-normal font-sans text-center mt-[2.5rem]">
            Didn’t you receive the OPT?{" "}
            <a href="" className="xl:text-blue-500 text-[#fff] underline">
              Resend OTP
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default EmailVerification;
