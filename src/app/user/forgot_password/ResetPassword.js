"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { MdKeyboardArrowRight, MdOutlineLock } from "react-icons/md";
import * as Yup from "yup";
import Button from "../../components/button/Button";
// import { useRouter } from "next/router";

function ResetPassword() {
  //   const router = useRouter();
  //   const { token } = router.query;

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
        setMessage("Your password has been reset successfully");
        // setTimeout(() => router.push("/login"), 2000);
      } else {
        setMessage("Failed to reset password. Please try again.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Reset password</h1>
        <p>Create a new password and get started</p>
      </div>
      {message && <p>{message}</p>}
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={resetPasswordSchema}
        onSubmit={handleResetPassword}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="bg-[#f5f5f5] border border-solid border-[#e6e6e6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
              <MdOutlineLock size={25} className="text-[#666666]" />
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="New password"
                className="w-full bg-inherit outline-none border-none text-black text-base font-normal font-sans"
              />
            </div>
            {errors.password && touched.password && (
              <span className="text-red-600 text-base">{errors.password}</span>
            )}
            <div className="bg-[#f5f5f5] border border-solid border-[#e6e6e6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
              <MdOutlineLock size={25} className="text-[#666666]" />
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Password"
                className="w-full bg-inherit outline-none border-none text-black text-base font-normal font-sans"
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <span className="text-red-600 text-base">
                {errors.confirmPassword}
              </span>
            )}
            <Button
              type="submit"
              Text="Reset password"
              Icon={<MdKeyboardArrowRight size={25} />}
              disabled={isSubmitting || loading}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ResetPassword;
