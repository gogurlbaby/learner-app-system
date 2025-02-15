"use client";

import React from "react";
import CustomForm from "../../components/custom-form/CustomForm";
import GreyButton from "../../components/button/GreyButton";
import * as Yup from "yup";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Phone,
  ChevronRight,
} from "lucide-react";
import "./register.css";

function Register() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  };

  const registerSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    contact: Yup.string().required("Contact is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  const fields = [
    {
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      icon: UserRound,
    },
    {
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      icon: UserRound,
    },
    { name: "email", type: "email", placeholder: "Email", icon: Mail },
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
    { name: "contact", type: "text", placeholder: "Contact", icon: Phone },
  ];
  return (
    <div className="w-full h-full flex xl:gap-[9rem]">
      <div className="register-image-container">
        <img
          src="images/admin/azubi-logo.svg"
          alt=""
          className="xl:mb-[1.5rem]"
        />
        <h4 className="xl:block xl:text-white xl:font-serif xl:font-bold xl:[3rem] xl:leading-[2.5rem] xl:text-left hidden">
          Create Your Account to Manage and Access the Dashboard Effortlessly.
        </h4>
      </div>
      <div className=" xl:pt-[3.5rem] xl:pb-[5rem] xl:pr-[5rem]">
        <div className="flex gap-[1.5rem] items-baseline justify-end mb-[2rem]">
          <p className="text-[#404040] text-[1.25rem] font-sans font-normal leading-[2rem] underline">
            Already have an account?
          </p>
          <a
            href="/"
            className="no-underline bg-[#01589A] py-[0.75rem] px-[1.5rem] text-white flex justify-center items-center gap-[0.5rem] text-base font-semibold rounded-[5px] border border-solid border-[#01589A] hover:bg-[#014273] hover:border-[#014273]"
          >
            Login
            <ChevronRight size={25} className="text-white" />
          </a>
        </div>
        <h2 className="text-black font-serif font-bold xl:text-[2.5rem] xl:leading-[3rem] mb-[2rem]">
          Register to get started
        </h2>
        <CustomForm
          initialValues={initialValues}
          validationSchema={registerSchema}
          fields={fields}
          onSubmit={handleSubmit}
          submitButton={(isSubmitting) => (
            <GreyButton
              Text="Create account"
              type="submit"
              disabled={isSubmitting}
              Icon={<ChevronRight size={25} />}
              text="Create accounts"
            />
          )}
        />
        <p className="text-black text-base font-normal font-sans text-center mt-[2.5rem]">
          By confirming your email, you agree to our Terms of Service  and that
          you have read and understood our Privacy Policy .
        </p>
      </div>
    </div>
  );
}

export default Register;
