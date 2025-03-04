"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import { ChevronRight } from "lucide-react";
import * as Yup from "yup";
import Button from "../../../components/button/Button";
import OTPInput from "react-otp-input";
import { toast, useToast } from "../../../../hooks/use-toast";

function OtpVerification({ email, onOtpSuccess }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  // const [resendDisabled, setResendDisabled] = useState(false);

  const otpVerificationSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^\d{6}$/, "OTP must be exactly 6 numbers")
      .required("OTP is required"),
  });

  const handleVerifyOtp = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/user/auth/verify-email";

    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token: values.otp }),
      });

      const data = await response.json();
      console.log("Verification Response:", data);

      if (response.ok) {
        const existingUser = JSON.parse(localStorage.getItem("user")) || {};
        const verifiedUser = {
          name: existingUser.name || "",
          email: data.User.email,
        };

        localStorage.setItem("user", JSON.stringify(verifiedUser));

        console.log("User stored after signup:", verifiedUser);
        toast({
          title: "OTP Verified Successfully",
          description: data.message,
          duration: 3000,
          className: "bg-emerald-700 text-white",
        });
        onOtpSuccess(verifiedUser);
      } else {
        toast({
          title: "Invalid or expired token.",
          description: data.message || "Please try again.",
          duration: 3000,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Verification Error", error);
      toast({
        title: "Network error.",
        description: "Something went wrong. Please try again.",
        duration: 3000,
        className: "bg-yellow-500 text-white",
      });
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  // const handleResendOtp = async () => {
  //   setResendDisabled(true);
  //   setMessage("");

  //   try {
  //     const res = await fetch(
  //       "https://tmp-se-project.azurewebsites.net/api/user/auth/resend-otp",
  //       {
  //         method: "POST",
  //         body: JSON.stringify({ email }), // Ensure 'email' is passed correctly
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const data = await res.json();
  //     console.log("API Response:", data);

  //     if (res.ok) {
  //       setMessage("New OTP Sent!");
  //       console.log("New OTP:", data.otp); // ✅ Log the new OTP for testing

  //       // If the API returns the new OTP, update the input
  //       if (data.otp) {
  //         setOtp(data.otp); // Update the OTP input if needed
  //       }
  //     } else {
  //       setMessage(data.message || "Failed to resend OTP.");
  //     }
  //   } catch (error) {
  //     setMessage("Something went wrong. Please try again.");
  //   }

  //   setTimeout(() => setResendDisabled(false), 3000);
  // };

  return (
    <div>
      <h2 className="text-black text-[2.5rem] font-bold font-serif leading-[3rem] text-center mb-[2rem]">
        OTP Verification
      </h2>
      <p className="text-black text-base font-normal font-sans text-center mb-[1.5rem]">
        Verify your accounts using the six digit sent to test@gmail.com
      </p>
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={otpVerificationSchema}
        onSubmit={handleVerifyOtp}
      >
        {({ values, errors, touched, setFieldValue, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <OTPInput
              value={values.otp}
              onChange={(otp) => setFieldValue("otp", otp)}
              numInputs={6}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                fontSize: "1.5rem",
                textAlign: "center",
                backgroundColor: "#F5F5F5",
                border: "1px solid #E6E6E6",
                outline: "none",
                color: "#000",
                fontWeight: "400",
                borderRadius: "5px",
                margin: "0.5rem",
              }}
              renderInput={(inputProps) => <input {...inputProps} />}
            />
            {touched.otp && errors.otp && (
              <p className="text-red-600 text-base">{errors.otp}</p>
            )}

            <p className="mt-3">
              Didn’t get a code?{" "}
              <button type="button" className="text-blue-500">
                Click to resend
              </button>
            </p>

            <Button
              type="submit"
              Text={loading ? "Verifying..." : "Verify account"}
              Icon={<ChevronRight size={25} />}
              disabled={loading || values.otp.length !== 6}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default OtpVerification;
