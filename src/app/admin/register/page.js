"use client";

import React, { useState } from "react";
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
import { useRouter } from "next/navigation";
import { useToast } from "../../../hooks/use-toast";

function Register() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  };

  const registerSchema = Yup.object().shape({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    contact: Yup.string()
      .matches(
        /^(0[235678][0-9]{8})$/,
        "Invalid phone number. Must be 10 digits long."
      )
      .required("Contact is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/admin/auth/signup";

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
      console.log("Registration Response", data);

      if (res.ok) {
        toast({
          title: "Registration Succesful",
          description: data.message,
          duration: 3000,
          className: "bg-emerald-700 text-white",
        });
        localStorage.setItem("otp", data.Admin.verificationToken);
        localStorage.setItem("adminEmail", data.Admin.email);
        router.push("/admin/otp");
      } else {
        toast({
          title: "Error",
          description: data.message || "Registration Failed.",
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
      setSubmitting(false);
      setLoading(false);
    }
  };

  const fieldSections = [
    {
      isGrid: true,
      fields: [
        {
          name: "first_name",
          type: "text",
          placeholder: "First Name",
          icon: UserRound,
        },
        {
          name: "last_name",
          type: "text",
          placeholder: "Last Name",
          icon: UserRound,
        },
      ],
    },
    {
      isGrid: false,
      fields: [
        { name: "email", type: "email", placeholder: "Email", icon: Mail },
      ],
    },
    {
      isGrid: true,
      fields: [
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
      ],
    },
    {
      isGrid: false,
      fields: [
        { name: "contact", type: "text", placeholder: "Contact", icon: Phone },
      ],
    },
  ];
  return (
    <>
      {/* Left Section */}
      <div className="xl:flex xl:gap-x-[9rem] xl:h-screen h-[150vh] xl:bg-[url(/images/admin/register.svg)] xl:bg-contain xl:bg-no-repeat bg-[linear-gradient(180deg,#01589A_0%,#13A3DF_100%)]">
        {/* Mobile */}
        <div className="xl:hidden flex justify-between items-center pt-[1.5rem] px-[1rem]">
          <img src="/images/admin/azubi-logo.svg" alt="" className="w-[30%]" />
          <button
            type="button"
            onClick={() => router.push("/admin/login/")}
            className="flex gap-[0.75rem] items-center justify-center py-[0.5rem] px-[1rem] rounded-[5px] bg-[#F5F5F5] border border-solid border-[#F5F5F5] text-base font-semibold font-sans text-[#01589A]"
          >
            Login
            <ChevronRight size={25} className="text-[#01589A]" />
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden xl:block xl:pt-[3.75rem] xl:px-[2rem]">
          <img
            src="/images/admin/azubi-logo.svg"
            alt=""
            className="xl:w-[30%] xl:mb-[1.5rem]"
          />
          <h4 className="xl:text-white xl:font-serif xl:font-bold xl:text-[2rem] xl:max-w-md">
            Create Your Account to Manage and Access the Dashboard Effortlessly.
          </h4>
        </div>

        {/*Form */}
        <div className="xl:block xl:pt-[3.75rem] xl:pr-[4.688rem] pt-[4.688rem] pb-[6.25rem] px-[1rem]">
          <div className="hidden xl:flex xl:justify-end items-baseline xl:gap-[1.5rem] xl:mb-[1rem]">
            <p className="xl:text-[#404040] xl:text-[1.25rem] xl:font-sans xl:font-normal xl:underline">
              Already have an account?
            </p>
            <button
              type="button"
              onClick={() => router.push("/admin/login/")}
              className="xl:bg-[#01589A] xl:text-white xl:border-[#01589A] xl:flex xl:gap-[0.75rem] xl:items-center xl:justify-center xl:py-[0.5rem] xl:px-[1rem] xl:rounded-[5px] xl:font-semibold xl:font-sans"
            >
              Login
              <ChevronRight size={25} className="xl:text-white" />
            </button>
          </div>
          <h2 className="xl:text-left xl:text-[#000] text-[#fff] font-serif font-bold text-[2rem] text-center mb-[2rem]">
            Register to get started
          </h2>
          <div className="xl:border-none xl:rounded-none bg-white rounded-xl p-[0.5rem] border border-solid border-white">
            <CustomForm
              initialValues={initialValues}
              validationSchema={registerSchema}
              fieldSections={fieldSections}
              onSubmit={handleSubmit}
              formType="admin"
              submitButton={(isSubmitting) => (
                <div className="mt-3">
                  <GreyButton
                    Text={loading ? "Creating account..." : "Create account"}
                    type="submit"
                    disabled={isSubmitting}
                    Icon={<ChevronRight size={25} />}
                  />
                </div>
              )}
            />
          </div>
          <p className="xl:text-[#000] text-[#fff] text-base font-normal font-sans text-center mt-[2.5rem]">
            By confirming your email, you agree to our 
            <a href="" className="xl:text-[#000] text-[#fff] underline">
              Terms of Service
            </a>{" "}
             and that you have read and understood our 
            <a href="" className="xl:text-[#000] text-[#fff] underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
