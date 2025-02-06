"use client";

import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
import { LuCircleDollarSign } from "react-icons/lu";
import { PiGraduationCap } from "react-icons/pi";
import { RiParentLine } from "react-icons/ri";
import { GoImage } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdOutlineEmail,
} from "react-icons/md";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RegistrationText from "../../(home)/home-register/RegistrationText";
import Button from "../../components/button/Button";
import GreyButton from "../../components/button/GreyButton";
import genderOptions from "../../../json/home-register/genderOptions.json";
import disabilityOptions from "../../../json/home-register/disability.json";
import courseModuleOptions from "../../../json/home-register/course_module.json";

function NewRegistration() {
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/gif",
  ];
  const FILE_SIZE_LIMIT = 5 * 1024 * 1024;

  const newRegistrationSchema = Yup.object().shape({
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
    disability: Yup.string()
      .oneOf(
        disabilityOptions.map((option) => option.value),
        "Invalid"
      )
      .required("Kindly choose if you are disability or not"),
    contact: Yup.string().required("Your contact is required").length(10),
    uploadImage: Yup.mixed().required("Image is required"),
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
    <div className="bg-white xl:pt-[1.5rem] xl:pb-[6.25rem] xl:pl-[3.438rem] xl:bottom-[5rem] pt-[1rem] pb-[6.25rem] relative bottom-[0.75rem] rounded-[5px]">
      <div className="xl:flex xl:justify-start flex justify-center items-center gap-[1rem] mb-[2.188rem]">
        <h4 className="text-black text-[1.25rem] font-sans font-semibold leading-[2rem]">
          Application
        </h4>
        <h4 className="text-black text-[1.25rem] font-sans font-semibold leading-[2rem]">
          Profile
        </h4>
      </div>

      <div className="xl:pt-[4.75rem] pt-[3rem]">
        <RegistrationText Text="Start new application" />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            location: "",
            courseModule: "",
            gender: "",
            disability: "",
            contact: "",
            uploadImage: "",
            amount: "",
            description: "",
          }}
          validationSchema={newRegistrationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form className="form">
              <div className="xl:grid xl:grid-cols-2 gap-x-[2rem] grid grid-cols-1">
                <div className="">
                  <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                    <FaRegUser size={25} className="text-[#666666]" />
                    <Field
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First name"
                      value={values.firstName}
                      onChange={handleChange}
                      className="bg-inherit w-full border-none outline-none text-black text-base font-normal font-sans"
                    />
                  </div>
                  {errors.firstName && touched.firstName ? (
                    <div className="text-red-500 text-base">
                      {errors.firstName}
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                    <FaRegUser size={25} className="text-[#666666]" />
                    <Field
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last name"
                      value={values.lastName}
                      onChange={handleChange}
                      className="bg-inherit w-full border-none outline-none text-black text-base font-normal font-sans"
                    />
                  </div>
                  {errors.lastName && touched.lastName ? (
                    <div className="text-red-500 text-base">
                      {errors.lastName}
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                    <MdOutlineEmail size={25} className="text-[#666666]" />
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      className="bg-inherit w-full border-none outline-none text-black text-base font-normal font-sans"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <div className="text-red-500 text-base">{errors.email}</div>
                  ) : null}
                </div>

                <div>
                  <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                    <GrLocation size={25} className="text-[#666666]" />
                    <Field
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Location"
                      value={values.location}
                      onChange={handleChange}
                      className="bg-inherit w-full border-none outline-none text-black text-base font-normal font-sans"
                    />
                  </div>
                  {errors.location && touched.location ? (
                    <div className="text-red-500 text-base">
                      {errors.location}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="xl:grid xl:grid-cols-2 gap-x-[2rem] grid grid-cols-1">
                <div>
                  <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                    <PiGraduationCap size={25} className="text-[#666666]" />
                    <Field
                      as="select"
                      id="courseModule"
                      name="courseModule"
                      placeholder="Choose module"
                      value={values.courseModule}
                      onChange={handleChange}
                      onFocus={() => setIsOpen(true)}
                      onBlur={() => setIsOpen(true)}
                      className="w-full w-full bg-inherit border-none outline-none block text-[#666] text-base font-normal font-sans appearance-none pr-[2rem]"
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
                    <MdKeyboardArrowDown
                      size={25}
                      className="absolute right-[0.75rem] text-[#666] pointer-events-none"
                    />
                    {/* )} */}
                  </div>
                  {errors.courseModule && touched.courseModule ? (
                    <div className="text-red-500 text-base">
                      {errors.courseModule}
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                    <FaRegUser size={25} className="text-[#666666]" />
                    <Field
                      as="select"
                      id="gender"
                      name="gender"
                      placeholder="Gender"
                      value={values.gender}
                      onChange={handleChange}
                      onFocus={() => setIsOpen(true)}
                      onBlur={() => setIsOpen(true)}
                      className="w-full bg-inherit border-none outline-none block text-[#666] text-base font-normal font-sans appearance-none pr-[2rem]"
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
                    <MdKeyboardArrowDown
                      size={25}
                      className="absolute right-[0.75rem] text-[#666] pointer-events-none"
                    />
                    {/* )} */}
                  </div>
                  {errors.gender && touched.gender ? (
                    <div className="text-red-500 text-base">
                      {errors.gender}
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                    <RiParentLine size={25} className="text-[#666666]" />
                    <Field
                      as="select"
                      id="disability"
                      name="disability"
                      placeholder="Disabled"
                      value={values.disabled}
                      onChange={handleChange}
                      onFocus={() => setIsOpen(true)}
                      onBlur={() => setIsOpen(true)}
                      className="w-full bg-inherit border-none outline-none block text-[#666] text-base font-normal font-sans appearance-none pr-[2rem]"
                    >
                      <option value="">Disabled</option>
                      {disabilityOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                    {/* {isOpen ? (
                <MdKeyboardArrowUp size={25} className="select-icon" />
                ) : ( */}
                    <MdKeyboardArrowDown
                      size={25}
                      className="absolute right-[0.75rem] text-[#666] pointer-events-none"
                    />
                    {/* )} */}
                  </div>
                  {errors.disability && touched.disability ? (
                    <div className="text-red-500 text-base">
                      {errors.disability}
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                    <HiOutlinePhone size={25} className="text-[#666666]" />
                    <Field
                      type="text"
                      name="contact"
                      id="contact"
                      placeholder="Phone"
                      value={values.contact}
                      onChange={handleChange}
                      className="bg-inherit w-full border-none outline-none text-black text-base font-normal font-sans"
                    />
                  </div>
                  {errors.contact && touched.contact ? (
                    <div className="text-red-500 text-base">
                      {errors.contact}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                <GoImage size={25} className="text-[#666666]" />
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
                <div className="text-red-500 text-base">
                  {errors.uploadImage}
                </div>
              ) : null}
              <div className="relative bg-[#F5F5F5] border border-solid border-[#E6E6E6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                <LuCircleDollarSign size={25} className="text-[#666666]" />
                <Field
                  type="amount"
                  name="amount"
                  id="amount"
                  placeholder="Amount"
                  value={values.amount}
                  onChange={handleChange}
                  className="bg-inherit w-full border-none outline-none text-black text-base font-normal font-sans"
                />
              </div>
              {errors.amount && touched.amount ? (
                <div className="text-red-500 text-base">{errors.amount}</div>
              ) : null}
              <div>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  placeholder="Description"
                  value={values.description}
                  onChange={handleChange}
                  className="w-full bg-[#F5F5F5] border border-solid border-[#E6E6E6] h-[9rem] rounded-[5px] outline-none text-black text-base font-normal font-sans p-[1.5rem] mt-[3.375rem]"
                />
              </div>
              {errors.description && touched.description ? (
                <div className="text-red-500 text-base mb-[0.5rem]">
                  {errors.description}
                </div>
              ) : null}
              <div className="w-full xl:flex xl:flex-row xl:items-center mt-[3.375rem] flex flex-col gap-[1.5rem]">
                <GreyButton
                  Text="Back"
                  Icon={<MdKeyboardArrowLeft size={25} />}
                  iconPosition="left"
                />
                <Button
                  type="submit"
                  Text="Register"
                  Icon={<MdKeyboardArrowRight size={25} />}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default NewRegistration;
