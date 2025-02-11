"use client";

import React, { useState } from "react";
import { ChevronRight, Mail } from "lucide-react";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import CustomForm from "../../components/custom-form/CustomForm";
import { useToast } from "../../../hooks/use-toast";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const initialValues = { email: "" };

  const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please Email Address is required"),
  });

  const handleForgotPassword = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/admin/auth/forgot-password";

    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("reset", data);

      if (res.ok) {
        toast({
          title: data.message,
          description: "Check your email for the reset link.",
          duration: 3000,
          className: "bg-emerald-700 text-white",
        });
      } else {
        toast({
          title: "Error",
          description:
            data.message || "Something went wrong. Please try again.",
          duration: 3000,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error.",
        description: "Unable to process your request. Try again later.",
        duration: 3000,
        className: "bg-yellow-500 text-white",
      });
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
  ];
  return (
    <div>
      <div>
        <h2 className="text-black text-[2.5rem] font-bold font-serif leading-[3rem] text-center mb-[2rem]">
          Forgot password
        </h2>
        <p className="text-black text-base font-normal font-sans text-center mb-[1.5rem]">
          Enter your email address to reset your password
        </p>
      </div>
      <CustomForm
        initialValues={initialValues}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleForgotPassword}
        fields={fields}
        submitButton={(isSubmitting) => (
          <Button
            type="submit"
            Text={loading ? "Sending..." : "Reset password"}
            Icon={<ChevronRight size={25} />}
            disabled={isSubmitting || loading}
          />
        )}
      />
    </div>
  );
}

export default ForgotPassword;
