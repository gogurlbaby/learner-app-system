"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { MdKeyboardArrowRight, MdOutlineLock } from "react-icons/md";
import { ChevronRight, LockKeyhole } from "lucide-react";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import CustomForm from "../../components/custom-form/CustomForm";
import { useToast } from "../../../hooks/use-toast";

// import { useRouter } from "next/router";

function ResetPassword() {
  //   const router = useRouter();
  //   const { token } = router.query;
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const initialValues = { password: "", confirmPassword: "" };

  const resetPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please enter a new password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your new password"),
  });

  const handleResetPassword = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/user/auth/reset-password/token";

    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ ...values, token }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        toast({
          title: data.message,
          description: "You can now log in with your new password.",
          duration: 3000,
          className: "bg-emerald-700 text-white",
        });
        // setTimeout(() => router.push("/login"), 2000);
      } else {
        toast({
          title: "Error",
          description:
            data.message || "Failed to reset password. Please try again.",
          duration: 3000,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error.",
        description: "Something went wrong. Please try again later.",
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
      name: "password",
      type: "password",
      placeholder: "New Password",
      icon: LockKeyhole,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      icon: LockKeyhole,
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-black text-[2.5rem] font-bold font-serif leading-[3rem] text-center mb-[2rem]">
          Reset password
        </h2>
        <p className="text-black text-base font-normal font-sans text-center mb-[1.5rem]">
          Create a new password and get started
        </p>
      </div>
      <CustomForm
        initialValues={initialValues}
        validationSchema={resetPasswordSchema}
        onSubmit={handleResetPassword}
        fields={fields}
        submitButton={(isSubmitting) => (
          <Button
            type="submit"
            Text={loading ? "Resetting..." : "Reset password"}
            Icon={<ChevronRight size={25} />}
            disabled={isSubmitting || loading}
          />
        )}
      />
    </div>
  );
}

export default ResetPassword;
