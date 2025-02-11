"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import { ChevronRight } from "lucide-react";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import OTPInput from "react-otp-input";

function OtpVerification({ email, onOtpSuccess }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
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
    setMessage("");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token: values.otp }),
      });

      const data = await response.json();
      console.log("Verification Response:", data);

      if (response.ok) {
        setMessage("OTP Verified Successfully ✅");

        const userData = { name: "John Doe" };
        onOtpSuccess(userData);
      } else {
        setMessage(data.message || "Invalid or expired token.");
      }
    } catch (error) {
      console.error("Verification Error", error);
      setMessage("Something went wrong. Please try again.");
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
      {message && <p>{message}</p>}
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={otpVerificationSchema}
        onSubmit={handleVerifyOtp}
      >
        {({ values, errors, touched, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <OTPInput
              value={values.otp}
              onChange={(otp) => setFieldValue("otp", otp)}
              numInputs={6}
              inputStyle={{
                width: "3rem",
                height: "3.375rem",
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

            <p>
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
