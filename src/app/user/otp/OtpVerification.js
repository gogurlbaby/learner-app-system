import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { MdKeyboardArrowRight } from "react-icons/md";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import OTPInput from "react-otp-input";

function OtpVerification() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);

  const otpVerificationSchema = Yup.object().shape({
    otp: Yup.string()
      .matches(/^\d{6}$/, "OTP must be exactly 6 numbers")
      .required("OTP is required"),
  });

  const handleVerifyOtp = async (values, { setErrors }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/user/auth/verify-email";

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

  const handleResendOtp = async (values, { setErrors }) => {
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
        setErrors({ otp: data.message || "Failed to resend OTP." });
      }
    } catch (error) {
      setErrors({ otp: "Something went wrong. Please try again." });
    }
    setTimeout(() => setResendDisabled(false), 3000);
  };

  return (
    <div>
      <div>
        <h1>OTP Verification</h1>
        <p>Verify your accounts using the six digit sent to test@gmail.com</p>
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
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  width: "100%",
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
                {...(touched.otp && errors.otp && (
                  <p className="text-red-600 text-base">{errors.otp}</p>
                ))}
              />
              <p>
                Didn’t get a code? <a href="">click to resend</a>
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
    </div>
  );
}

export default OtpVerification;
