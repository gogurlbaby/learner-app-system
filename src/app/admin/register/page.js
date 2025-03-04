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
    <div className="lg:bg-[url(/images/admin/register.svg)] lg:bg-auto lg:bg-no-repeat bg-[linear-gradient(180deg,#01589A_0%,#13A3DF_100%)] w-full h-[200vh] pt-[1.5rem] pb-[6.25rem] px-[1rem]">
      {/* Mobile */}
      <div className="lg:pt-[3.75rem] flex justify-between items-center">
        <img
          src="/images/admin/azubi-logo.svg"
          alt=""
          className="lg:w-[15%] lg:mb-[1.5rem] w-[30%]"
        />
        <div className="flex gap-[1.5rem] items-baseline">
          <p className="hidden lg:block lg:text-[#404040] lg:text-[1.25rem] lg:font-sans lg:font-normal lg:underline">
            Already have an account?
          </p>
          <button
            type="button"
            className="lg:bg-[#01589A] lg:text-white lg:border-[#01589A] flex gap-[0.75rem] items-center justify-center py-[0.5rem] px-[1rem] rounded-[5px] bg-[#F5F5F5] border border-solid border-[#F5F5F5] text-base font-semibold font-sans text-[#01589A]"
          >
            Login
            <ChevronRight size={25} className="lg:text-white text-[#01589A]" />
          </button>
        </div>
      </div>
      {/* Desktop */}
      <h4 className="hidden lg:block lg:text-white lg:font-serif lg:font-bold lg:text-[1rem] lg:text-left">
        Create Your Account to Manage and Access the Dashboard Effortlessly.
      </h4>
      <div className="">
        <h2 className="lg:text-black text-white font-serif font-bold lg:text-[2.5rem] text-center mt-[4.75rem] mb-[2rem]">
          Register to get started
        </h2>
        <div className="lg:bg-none lg:border-none lg:p-0 bg-white rounded-lg p-[0.5rem] border border-solid border-white">
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
        </div>
        <p className="lg:text-black text-white text-base font-normal font-sans text-center mt-[2.5rem]">
          By confirming your email, you agree to our 
          <a href="" className="lg:text-black text-white underline">
            Terms of Service
          </a>{" "}
           and that you have read and understood our 
          <a href="" className="lg:text-black text-white underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Register;
