import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import Button from "../../components/button/Button";
import { GoogleLogin } from "@react-oauth/google";
// import OtpInput from "react-otp-input";
import { jwtDecode } from "jwt-decode";

function Login({ handleLogin }) {
  // const [otp, setOtp] = useState("");

  const loginFormSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please Email Address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please Password is required"),
  });

  const handleUserLogin = () => {
    const userData = { name: "John Doe" };
    handleLogin(userData);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://tmp-se-project.azurewebsites.net/api/user/auth/signin";
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
    } catch (error) {
      console.log("Login error", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginFormSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <div>
              {/* <OtpInput
           value={otp}
           onChange={setOtp}
           numInputs={6}
           renderSeparator={<span>-</span>}
           renderInput={(props) => <input {...props} />}
          /> */}

              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  console.log(jwtDecode(credentialResponse.credential));
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              <p className="no-underline text-base font-normal font-sans mt-[1.5rem] mb-[1rem] text-center">
                or
              </p>
            </div>
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
            <div className="bg-[#f5f5f5] border border-solid border-[#e6e6e6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
              <MdOutlineLock size={25} className="text-[#666666]" />
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full bg-inherit outline-none border-none text-black text-base font-normal font-sans"
              />
            </div>
            {errors.password && touched.password && (
              <span className="text-red-600 text-base">{errors.password}</span>
            )}
            <div className="mt-[1rem] mb-[1.5rem]">
              <a className="no-underline text-[#177ddc] text-base font-normal font-sans cursor-pointer">
                Forgot password ?
              </a>
            </div>
            <Button
              type="submit"
              Text="Login"
              Icon={<MdKeyboardArrowRight size={25} />}
              onClick={handleUserLogin}
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
