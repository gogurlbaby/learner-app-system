import React, { useState } from "react";
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
import RegistrationText from "./RegistrationText";
import Button from "../../button/Button";
import genderOptions from "../../json/home-register/genderOptions.json";
import disabledOptions from "../../json/home-register/disabled.json";
import courseModuleOptions from "../../json/home-register/course_module.json";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function HomeRegisterationForm() {
  const [isOpen, setIsOpen] = useState(false);

  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
  const FILE_SIZE_LIMIT = 5 * 1024 * 1024; 

  const homeRegisterSchema = Yup.object().shape({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Address is required"),
      location: Yup.string().required("Please add your location"),
      courseModule: Yup.string()
        .oneOf(
          courseModuleOptions.map((option) => option.value),
          "Invalid course module"
        )
        .required("Course module is required"), 
      gender: Yup.string()
        .oneOf(
          genderOptions.map((option) => option.value),
          "Invalid gender"
        )
        .required("Gender is required"),
      disabled: Yup.string()
        .oneOf(
          disabledOptions.map((option) => option.value),
          "Invalid"
        )
        .required("Kindly choose if you are disabled or not"),
      contact: Yup.string().required("Your contact is required").length(10),
      uploadImage: Yup.mixed()
        .required("Image is required"),
        // .test(
        //   "fileSize",
        //   "File size must be less than 5MB",
        //     (value) => value && value.size <= FILE_SIZE_LIMIT
        //    )
        // .test(
        //   "fileFormat",
        //   "Unsupported file format",
        //   (value) => value && SUPPORTED_FORMATS.includes(value.type)),
      amount: Yup.string().required("Please enter an amount"),
      description: Yup.string().required("Please add a description"),
    });

  return (
    <HomeRegisterContainer>   
      <RegistrationText Text="Register" /> 
        <Formik
         initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            location: "",
            courseModule: "",
            gender: "",
            disabled: "",
            contact: "",
            uploadImage: "",
            amount: "",
            description: "",
         }}
         validationSchema={homeRegisterSchema}
         onSubmit={(values) => {
           console.log(values);
          }}
        >
         {({ errors, touched, values, handleChange }) => (
          <Form className="form">
            <div className="flex-container">
            <div>
            <div className="input-container">
              <FaRegUser size={25} className="input-icon" />
              <Field
               type="text"
               name="firstName"
               id="firstName"
               placeholder="First name"
               value={values.firstName}
               onChange={handleChange}
               className="input"
              />
            </div>
            {errors.firstName && touched.firstName ? (
                    <div className="error">{errors.firstName}</div>
                  ) : null}
            <div className="input-container">
              <FaRegUser size={25} className="input-icon" />
              <Field
               type="text"
               name="lastName"
               id="lastName"
               placeholder="Last name"
               value={values.lastName}
               onChange={handleChange}
               className="input"
              />
            </div>
            {errors.lastName && touched.lastName ? (
                    <div className="error">{errors.lastName}</div>
                  ) : null}
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
            {errors.email && touched.email ? (
                    <div className="error">{errors.email}</div>
                  ) : null}
            <div className="input-container">
              <Field
               type="text"
               name="location"
               id="location"
               placeholder="Location"
               value={values.location}
               onChange={handleChange}
               className="input"
              />
            </div>
            {errors.location && touched.location ? (
                    <div className="error">{errors.location}</div>
                  ) : null}
            </div>
            <div>
            <div className="input-container">
              <PiGraduationCap size={25} className="input-icon" />
              <Field
               as="select"
               id="courseModule"
               name="courseModule"
               placeholder="Choose module"
               value={values.courseModule}
               onChange={handleChange}
               onFocus={() => setIsOpen(true)}
               onBlur={() => setIsOpen(true)}
               className="select-input"
              >
                <option value="">Choose module</option>
                {courseModuleOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              {/* {isOpen ? (
                <MdKeyboardArrowUp size={25} className="select-icon" />
                ) : ( */}
               <MdKeyboardArrowDown size={25} className="select-icon" />
                {/* )} */}
              </div>
              {errors.courseModule && touched.courseModule ? (
                    <div className="error">{errors.courseModule}</div>
                  ) : null}
              <div className="input-container">
                <FaRegUser size={25} className="input-icon" />
                <Field
                 as="select"
                 id="gender"
                 name="gender"
                 placeholder="Gender"
                 value={values.gender}
                 onChange={handleChange}
                 onFocus={() => setIsOpen(true)}
                 onBlur={() => setIsOpen(true)}
                 className="select-input"
                >
                  <option value="">Gender</option>
                  {genderOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                {/* {isOpen ? (
                <MdKeyboardArrowUp size={25} className="select-icon" />
                ) : ( */}
               <MdKeyboardArrowDown size={25} className="select-icon" />
                {/* )} */}
              </div>
              {errors.gender && touched.gender ? (
                    <div className="error">{errors.gender}</div>
                  ) : null}
              <div className="input-container"> 
                <RiParentLine />
                <Field
                 as="select"
                 id="disabled"
                 name="disabled"
                 placeholder="Disabled"
                 value={values.disabled}
                 onChange={handleChange}
                 onFocus={() => setIsOpen(true)}
                 onBlur={() => setIsOpen(true)} 
                 className="select-input"
               >
                  {disabledOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                     {option.label}
                    </option>
                  ))}
                </Field>
                {/* {isOpen ? (
                <MdKeyboardArrowUp size={25} className="select-icon" />
                ) : ( */}
               <MdKeyboardArrowDown size={25} className="select-icon" />
                {/* )} */}
              </div>
              {errors.disabled && touched.disabled ? (
                    <div className="error">{errors.disabled}</div>
                  ) : null}
              <div className="input-container">
                <HiOutlinePhone size={25} className="input-icon" />
                <Field
                 type="text"
                 name="contact"
                 id="contact"
                 placeholder="Phone"
                 value={values.contact}
                 onChange={handleChange}
                 className="input"
                />
              </div>
              {errors.contact && touched.contact ? (
                    <div className="error">{errors.contact}</div>
                  ) : null}
            </div>
            </div>
              <div className="input-container">
                <GoImage size={25} className="input-icon" />
                <Field 
                 type="file" 
                 name="uploadImage" 
                 id="uploadImage" 
                 placeholder="Upload Image"
                 value={values.uploadImage}
                 onChange={handleChange}
                />
              </div>
              {errors.uploadImage && touched.uploadImage ? (
                    <div className="error">{errors.uploadImage}</div>
                  ) : null}
              <div className="input-container">
                <LuCircleDollarSign size={25} className="input-icon" />
                <Field
                 type="amount"
                 name="amount"
                 id="amount"
                 placeholder="Amount"
                 value={values.amount}
                 onChange={handleChange}
                 className="input"
                />
              </div>
              {errors.amount && touched.amount ? (
                    <div className="error">{errors.amount}</div>
                  ) : null}
              <div>
                <Field
                 as="textarea"
                 id="description"
                 name="description"
                 placeholder="Description"
                 value={values.description}
                 onChange={handleChange}
                 className="textarea"
                />
              </div>
              {errors.description && touched.description ? (
                    <div className="textarea-error">{errors.description}</div>
                  ) : null}
              <div className="btn-container">
                <Button type="submit" Text="Register" Icon={<MdKeyboardArrowRight size={25} />} />
              </div>
              </Form>
             )}
            </Formik>            
    </HomeRegisterContainer>
  )
}

export default HomeRegisterationForm






