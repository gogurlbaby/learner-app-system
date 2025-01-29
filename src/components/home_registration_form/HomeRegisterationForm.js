import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { LuCircleDollarSign } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { GoImage } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { HomeRegisterContainer } from "./HomeRegisterationFormContainer.styled";

function HomeRegisterationForm() {

  const homeRegisterSchema = Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
    });

  return (
    <HomeRegisterContainer className="form-container">      
            <Formik
             initialValues={{}}
             validationSchema={homeRegisterSchema}
             onSubmit={(values) => {
              console.log(values);
             }}
            >
             {({ errors, touched, values, handleChange }) => (
              <Form className="form">
                <div>
                <FaRegUser />
                <Field
                 type="text"
                 name="firstName"
                 id="firstName"
                 placeholder="First name"
                 value={values.firstName}
                 onChange={handleChange}
                 className="input"
                />
                {errors.firstName && touched.firstName ? (
                    <div className="error">{errors.firstName}</div>
                  ) : null}
              </div>

              <div>
              <FaRegUser />
                <Field
                 type="text"
                 name="lastName"
                 id="lastName"
                 placeholder="Last name"
                 className="input"
                />
              </div>

              <div>
                <MdOutlineEmail />
                <Field
                 type="email"
                 name="email"
                 id="email"
                 placeholder="Email"
                 className="input"
                />
              </div>
              <div>
                <Field
                 type="text"
                 name="location"
                 id="location"
                 placeholder="Location"
                 className="input"
                />
              </div>

              <div>
                <PiGraduationCap />
              <Field
               as="select"
               id="module"
               name="module"
               placeholder="Choose module"
               className="select-input"
              >
              <option value="">Choose module</option>
              </Field>
              </div>

              <div>
                <FaRegUser />
              <Field
               as="select"
               id="gender"
               name="gender"
               placeholder="Gender"
               className="select-input"
              >
              <option value="">Gender</option>
              </Field>
              </div>

              <div>
                <RiParentLine />
              <Field
               as="select"
               id="disabled"
               name="disabled"
               placeholder="Disabled"
               className="select-input"
              >
              <option value="">Disabled</option>
              </Field>
              </div>

              <div>
                <HiOutlinePhone />
                <Field
                 type="tel"
                 name="contact"
                 id="contact"
                 placeholder="Phone"
                 className="input"
                />
              </div>

              <div>
                <LuCircleDollarSign />
                <Field
                 type="amount"
                 name="amount"
                 id="amount"
                 placeholder="Amount"
                 className="input"
                />
              </div>

              <div>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  placeholder="Description"
                  className="textarea"
                    />
              </div>

              <div>
                <GoImage />
                <Field 
                 type="file" 
                 name="uploadImage" 
                 id="uploadImage" 
                />
              </div>

              <div className="btn-container">
                <button>Register</button>
                  <MdKeyboardArrowRight />
              </div>
              </Form>
             )}
            </Formik>
          </HomeRegisterContainer>
  )
}

export default HomeRegisterationForm