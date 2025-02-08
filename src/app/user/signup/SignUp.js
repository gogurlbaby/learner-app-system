"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Mail, LockKeyhole } from "lucide-react";
import Button from "../../components/button/Button";
import CustomForm from "@/app/components/custom-form/CustomForm";

function SignUp({ handleLogin }) {
  const [loading, setLoading] = useState(false);

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

  const handleUserLogin = () => {
    const userData = { name: "John Doe" };
    handleLogin(userData);
  };

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
      console.log(data);

      // if (res.ok) {
      //   toast({
      //     title: "Signup Successful",
      //     description: "User created suucessfully.Please verify your email",
      //     status: "success",
      //     duration: 3000,
      //     isClosable: true,
      //     position: "top-right",
      //   });
      // } else if (data.message === "User already exists") {
      //   toast({
      //     title: "Signup Failed",
      //     description:
      //       "This email is already registered. Try logging in instead",
      //     status: "error",
      //     duration: 3000,
      //     isClosable: true,
      //     position: "top-right",
      //   });
      // } else {
      //   throw new Error(data.message || "Signup failed, please try again!");
      // }
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: error.message || "Something went wrong. Please try again",
      //   status: "error",
      //   duration: 3000,
      //   isClosable: true,
      //   position: "top-right",
      // });
      console.log(error);
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
          <>
            <div className="mt-[1rem] mb-[1.5rem]">
              <a className="no-underline text-[#177ddc] text-base font-normal font-sans cursor-pointer">
                Forgot password ?
              </a>
            </div>
            <Button
              type="submit"
              Text="Register"
              Icon={<MdKeyboardArrowRight size={25} />}
              onClick={handleUserLogin}
              disabled={isSubmitting}
            />
          </>
        )}
      />
    </div>
  );
}

export default SignUp;
