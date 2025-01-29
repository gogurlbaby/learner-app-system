import React, { useState } from "react";
import { LoginModalContainer } from "./LoginModalContainer.styled";
import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Button from "../button/Button";

function Login({show, handleClose}) {

  const loginFormSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address")
          .required("Email Address is required"),
        password: Yup.string().required("Password is required"), 
      });

  return (
    <LoginModalContainer>
       <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
        <Modal.Title>Login</Modal.Title>
          <div style={{display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center", cursor: "pointer", border: "1px solid black", padding: "0.5rem", borderRadius: "5px"}}>
          <FcGoogle size={25} />
          Log in using Google
          </div>
          or 
          {" "}
        </div>
      <Modal.Body>
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
             <Modal.Footer>
        <div>
        <Button type="submit" Text="Login" Icon={<MdKeyboardArrowRight size={25} />} onClick={handleClose} />
        </div>
      </Modal.Footer>
          </Form>
         )}
        </Formik>
      </Modal.Body>
    </Modal>
    </LoginModalContainer>
  )
}

export default Login