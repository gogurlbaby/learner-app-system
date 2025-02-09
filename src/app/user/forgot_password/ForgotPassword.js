import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import * as Yup from "yup";
import Button from "../../components/button/Button";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
      if (res.ok) {
        setMessage("Password reset link has been sent to your email");
      } else {
        setMessage("Something went wrong. Please try again");
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
        <h2 className="text-black text-[2.5rem] font-bold font-serif leading-[3rem] text-center mb-[2rem]">
          Forgot password
        </h2>
        <p className="text-black text-base font-normal font-sans text-center mb-[1.5rem]">
          Enter your email address to reset your password
        </p>
      </div>
      {message && <p>{message}</p>}
      <Formik
        initialValues={{ email: "" }}
        validationSchema={forgotPasswordSchema}
        onSubmit={handleForgotPassword}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div className="bg-[#f5f5f5] border border-solid border-[#e6e6e6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
              <MdOutlineEmail size={25} className="text-[#666666]" />
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full bg-inherit outline-none border-none text-black text-base font-normal font-sans"
              />
            </div>
            {errors.email && touched.email && (
              <span className="text-red-600 text-base">{errors.email}</span>
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

export default ForgotPassword;
