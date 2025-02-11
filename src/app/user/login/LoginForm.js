"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import { Mail, LockKeyhole, ChevronRight } from "lucide-react";
import Button from "../../components/button/Button";
import CustomForm from "@/app/components/custom-form/CustomForm";

function Login({ handleOtpFlow }) {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const initialValues = { email: "", password: "" };

  const loginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please Email Address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/user/auth/signin";

    setLoading(true);
    setApiError("");
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Login successful", data);
        handleOtpFlow(data.user.email, data.user.verificationToken);
        console.log("Token Expires At:", data.user.verificationTokenExpiresAt);
      } else {
        setApiError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setApiError("Network error. Please try again later.");
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      icon: Mail,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      icon: LockKeyhole,
    },
  ];

  return (
    <div>
      {apiError && (
        <p className="text-red-500 text-sm text-center mb-2">{apiError}</p>
      )}
      <CustomForm
        initialValues={initialValues}
        validationSchema={loginFormSchema}
        onSubmit={handleSubmit}
        fields={fields}
        showGoogleAuth={true}
        submitButton={(isSubmitting) => (
          <Button
            type="submit"
            Text={loading ? "Verifying Login..." : "Login"}
            Icon={<ChevronRight size={25} />}
            disabled={isSubmitting}
          />
        )}
      />
    </div>
  );
}

export default Login;
