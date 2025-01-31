import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import Button from "../button/Button";
import { GoogleLogin } from "@react-oauth/google";
import OtpInput from "react-otp-input";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { LoginFormContainer } from "../login/LoginFormContainer.styled";

function SignUp() {
    // const [otp, setOtp] = useState("");
    const navigate = useNavigate();

  const signUpSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Please Email Address is required"),
        password: Yup.string().required("Please Password is required"), 
        confirmPassword: Yup.string().required("Please Confirm your Password"), 
      });

  return (
    <LoginFormContainer>
      <Formik
       initialValues={{ email: "", password: "", confirmPassword: "" }}
       validationSchema={signUpSchema}
       onSubmit={(values) => {
          console.log(values);
         }}
        >
         {({ errors, touched, values, handleChange }) => (
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
             onSuccess={credentialResponse => {
              console.log(credentialResponse);
              console.log(jwtDecode(credentialResponse.credential));
                 navigate("/");
            }}
            onError={() => {
              console.log("SignUp Failed");   
            }}
           />
             <p className="or">or</p>
            </div>
             <div className="input-container">
               <MdOutlineEmail size={25} className="input-icon" />
               <Field
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                className="input"
               /> 
             </div>
             {errors.email && touched.email && (
                <span className="error">{errors.email}</span>
                )}
             <div className="input-container">
              <MdOutlineLock size={25} className="input-icon" />
              <Field
               type="password"
               name="password"
               id="password"
               placeholder="Password"
               value={values.password}
               onChange={handleChange}
               className="input"
              /> 
             </div>
             {errors.password && touched.password && (
                <span className="error">{errors.password}</span>
               )}
             <div className="input-container">
              <MdOutlineLock size={25} className="input-icon" />
              <Field
               type="password"
               name="confirmPassword"
               id="confirmPassword"
               placeholder="Confirm Password"
               value={values.confirmPassword}
               onChange={handleChange}
               className="input"
              /> 
             </div>
             {errors.confirmPassword && touched.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
               )}
             <div className="forgot-container">
                <a href="" className="forgot">Forgot password ?</a>
             </div>
             <Button type="submit" Text="Register" Icon={<MdKeyboardArrowRight size={25} />} />
          </Form>
         )}
        </Formik>
    </LoginFormContainer>
  )
}

export default SignUp