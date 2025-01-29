import React, { useState } from "react";
import { LoginFormContainer } from "./LoginFormContainer.styled";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import Button from "../button/Button";
import { GoogleLogin } from "@react-oauth/google";
import OtpInput from "react-otp-input";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login() {
   const [otp, setOtp] = useState("");
   const navigate = useNavigate();

  const loginFormSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Please Email Address is required"),
        password: Yup.string().required("Please Password is required")
      });

  return (
    <LoginFormContainer>
      <Formik
       initialValues={{ email: "", password: "" }}
       validationSchema={loginFormSchema}
       onSubmit={(values) => {
           console.log(values);
         }}
      >
       {({ errors, touched, values, handleChange }) => (
        <Form>
          <div>
          <OtpInput
           value={otp}
           onChange={setOtp}
           numInputs={6}
           renderSeparator={<span>-</span>}
           renderInput={(props) => <input {...props} />}
          />

          <GoogleLogin 
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              console.log(jwtDecode(credentialResponse.credential));
               navigate("/");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
          </div>
          <div>
            <MdOutlineEmail />
            <Field
             type="email"
             name="email"
             id="email"
             placeholder="Email"
             value={values.email}
             onChange={handleChange}
             className="input"
            /> 
              {errors.email && touched.email && (
                <span className="error">{errors.email}</span>
              )}
           </div>
           <div>
             <MdOutlineLock />
             <Field
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              className="input"
             /> 
              {errors.password && touched.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div>
              <a href="">Forgot password ?</a>
             </div>
            <Button type="submit" Text="Login" Icon={<MdKeyboardArrowRight size={25} />} />
        </Form>
         )}
      </Formik>
    </LoginFormContainer>
  )
}

export default Login