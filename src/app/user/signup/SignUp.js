"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import { Mail, LockKeyhole, ChevronRight } from "lucide-react";
import Button from "../../components/button/Button";
import CustomForm from "@/app/components/custom-form/CustomForm";
import { useToast } from "../../../hooks/use-toast";

function SignUp({ handleOtpFlow }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const initialValues = { email: "", password: "", confirmPassword: "" };

  const signUpSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please Confirm your Password"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/user/auth/signup";

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
      if (res.ok) {
        toast({
          title: "Signup Successful",
          description: data.message,
          duration: 3000,
          className: "bg-emerald-700 text-white",
        });
        localStorage.setItem("user", JSON.stringify(data.user));
        handleOtpFlow(data.user.email, data.user.verificationToken);
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
        description: "Please try again later.",
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
    {
      name: "password",
      type: "password",
      placeholder: "Password",
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
      <CustomForm
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={handleSubmit}
        fields={fields}
        showGoogleAuth={true}
        submitButton={(isSubmitting) => (
          <Button
            type="submit"
            Text={loading ? "Registering..." : "Register"}
            Icon={<ChevronRight size={25} />}
            disabled={isSubmitting}
          />
        )}
      />
    </div>
  );
}

export default SignUp;
