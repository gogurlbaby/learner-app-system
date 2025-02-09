import React, { useState } from "react";
import { Formik, Form } from "formik";
import { MdKeyboardArrowRight } from "react-icons/md";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import OTPInput from "react-otp-input";

function OtpVerification() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const email = "test@gmail.com"; // Replace this with dynamic email if needed

  const otpVerificationSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^\d{6}$/, "OTP must be exactly 6 numbers")
      .required("OTP is required"),
  });

  const handleVerifyOtp = async (values, { setErrors }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/user/auth/verify-email";
    const email = localStorage.getItem("userEmail"); // Or pass via props

    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ email, otp: values.otp }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("OTP Verified Successfully");
      } else {
        setErrors({ otp: data.message || "Invalid OTP. Please try again." });
      }
    } catch (error) {
      setErrors({ otp: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResendDisabled(true);
    setMessage("");

    try {
      const res = await fetch("https://your-api-endpoint.com/resend-otp", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("New OTP Sent!");
      } else {
        setMessage(data.message || "Failed to resend OTP.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }
    setTimeout(() => setResendDisabled(false), 3000);
  };

  return (
    <div>
      <h2 className="text-black text-[2.5rem] font-bold font-serif leading-[3rem] text-center mb-[2rem]">
        OTP Verification
      </h2>
      <p className="text-black text-base font-normal font-sans text-center mb-[1.5rem]">
        Verify your account using the six-digit code sent to {email}
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
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={resendDisabled}
                className="text-blue-500"
              >
                Click to resend
              </button>
            </p>

            <Button
              type="submit"
              Text={loading ? "Verifying..." : "Verify account"}
              Icon={<MdKeyboardArrowRight size={25} />}
              disabled={loading || values.otp.length !== 6}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default OtpVerification;
