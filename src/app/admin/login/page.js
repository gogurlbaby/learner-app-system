"use client";

import React from "react";
import CustomForm from "../../components/custom-form/CustomForm";
import GreyButton from "../../components/button/GreyButton";
import * as Yup from "yup";
import { Mail, LockKeyhole, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net//api/admin/auth/login";

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

      if (res.ok) {
        localStorage.setItem("adminUser", JSON.stringify(data));
        router.push("/admin/dashboard");
      } else {
        console.log("Login Failed", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fields = [
    { name: "email", type: "email", placeholder: "Email", icon: Mail },

    {
      name: "password",
      type: "password",
      placeholder: "Password",
      icon: LockKeyhole,
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
            className="flex gap-[0.75rem] items-center justify-center py-[0.5rem] px-[1rem] rounded-[5px] bg-[#F5F5F5] border border-solid border-[#F5F5F5] text-base font-semibold font-sans text-[#01589A]"
          >
            Sign up
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
        <div className="xl:pt-[3.75rem] pt-[4.688rem] pb-[6.25rem] px-[1rem]">
          <div className="hidden xl:flex xl:justify-end items-baseline xl:gap-[1.5rem]">
            <p className="xl:text-[#404040] xl:text-[1.25rem] xl:font-sans xl:font-normal xl:underline">
              Need to create an account ?
            </p>
            <button
              type="button"
              className="xl:bg-[#01589A] xl:text-white xl:border-[#01589A] xl:flex xl:gap-[0.75rem] xl:items-center xl:justify-center xl:py-[0.5rem] xl:px-[1rem] xl:rounded-[5px] xl:font-semibold xl:font-sans"
            >
              Sign up
              <ChevronRight size={25} className="xl:text-white" />
            </button>
          </div>
          <h2 className="xl:mt-[6rem] xl:text-left xl:text-[#000] text-[#fff] font-serif font-bold text-[2rem] text-center">
            Login into your account
          </h2>
          <div className="xl:border-none xl:rounded-none bg-white rounded-xl p-[0.5rem] border border-solid border-white">
            <CustomForm
              initialValues={initialValues}
              validationSchema={loginSchema}
              fields={fields}
              onSubmit={handleSubmit}
              formType="admin"
              submitButton={(isSubmitting) => (
                <>
                  <div>
                    <a className="no-underline text-[#177ddc] text-base font-normal font-sans cursor-pointer">
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-3">
                    <GreyButton
                      Text="Login"
                      type="submit"
                      disabled={isSubmitting}
                      Icon={<ChevronRight size={25} />}
                    />
                  </div>
                </>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
