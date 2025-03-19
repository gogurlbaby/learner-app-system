"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import { Mail, LockKeyhole, ChevronRight } from "lucide-react";
import Button from "../../../components/button/Button";
import CustomForm from "../../../components/custom-form/CustomForm";
import { useToast } from "../../../../hooks/use-toast";

function Login({ handleLogin }) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

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
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("api response", data);

      if (res.ok) {
        toast({
          title: data.message,
          description: "",
          duration: 1000,
          className: "bg-emerald-700 text-white",
        });
        const userData = data.user;
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: userData.name,
            email: userData.email,
          })
        );
        console.log(
          "User stored after signup:",
          JSON.parse(localStorage.getItem("user"))
        );
        handleLogin(data.user);
      } else {
        toast({
          title: "Error",
          description:
            data.message || "Something went wrong. Please try again.",
          duration: 1000,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error.",
        description: "Please try again later.",
        duration: 1000,
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
  ];

  return (
    <div>
      <CustomForm
        initialValues={initialValues}
        validationSchema={loginFormSchema}
        onSubmit={handleSubmit}
        fields={fields}
        showGoogleAuth={true}
        submitButton={(isSubmitting) => (
          <Button
            type="submit"
            Text={loading ? "Logging in..." : "Login"}
            Icon={<ChevronRight size={25} />}
            disabled={isSubmitting}
          />
        )}
      />
    </div>
  );
}

export default Login;
