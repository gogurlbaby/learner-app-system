import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import Button from "../../components/button/Button";
import { GoogleLogin } from "@react-oauth/google";
// import OtpInput from "react-otp-input";
import { jwtDecode } from "jwt-decode";
// import { useToast } from "@chakra-ui/react";

function SignUp({ handleLogin }) {
  // const toast = useToast();
  const [loading, setLoading] = useState(false);
  // const [otp, setOtp] = useState("");

  const signUpSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Please Email Address is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please Password is required"),
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

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={signUpSchema}
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
                  console.log("SignUp Failed");
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
            <div className="bg-[#f5f5f5] border border-solid border-[#e6e6e6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
              <MdOutlineLock size={25} className="text-[#666666]" />
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full bg-inherit outline-none border-none text-black text-base font-normal font-sans"
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <span className="text-red-600 text-base">
                {errors.confirmPassword}
              </span>
            )}
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
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
