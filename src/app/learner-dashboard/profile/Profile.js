"use client";

import React, { useState } from "react";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineLock,
} from "react-icons/md";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Button from "../../components/button/Button";
import GreyButton from "../../components/button/GreyButton";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const oldToNewPasswordSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please enter the old password"),
    newPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please enter your new password"),
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

      <div className="xl:flex xl:items-center xl:gap-[2.5rem] mb-[2.813rem]">
        <img
          src="/images/learner_dashboard/profile_icon.svg"
          alt=""
          className="xl:mb-0 mb-4"
        />
        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">
            John Doe
          </h4>
          <span className="text-black text-base font-sans font-normal">
            Johndoe@gamil.com
          </span>
        </div>

        <hr className="xl:block xl:bg-[#E6E6E6] xl:border-1 xl:w-[0.1rem] xl:h-[5rem] hidden" />

        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">
            Location
          </h4>
          <span className="text-black text-base font-sans font-normal">
            Kumasi
          </span>
        </div>

        <hr className="xl:block xl:bg-[#E6E6E6] xl:w-[0.2rem] xl:h-[5rem] hidden" />

        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">
            Gender
          </h4>
          <span className="text-black text-base font-sans font-normal">
            Male
          </span>
        </div>
        <hr className="xl:block xl:bg-[#E6E6E6] xl:w-[0.2rem] xl:h-[5rem] hidden" />

        <div className="xl:flex xl:flex-col flex gap-[0.5rem]">
          <h4 className="text-[#999] text-base font-sans font-normal">Phone</h4>
          <span className="text-black text-base font-sans font-normal">
            +23341002402
          </span>
        </div>
      </div>

      <hr className="xl:block xl:bg-[#E6E6E6] xl:my-[2.813rem] hidden" />

      <Formik
        initialValues={{ oldPassword: "", newPassword: "" }}
        validationSchema={oldToNewPasswordSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="xl:flex xl:gap-[2.5rem] xl:mb-[3.625rem] mb-5">
            <div className="bg-[#f5f5f5] border border-solid border-[#e6e6e6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
              <MdOutlineLock size={25} className="text-[#666666]" />
              <Field
                type="oldPassword"
                name="newPassword"
                id="oldPassword"
                placeholder="Old password"
                className="w-full bg-inherit outline-none border-none text-black text-base font-normal font-sans"
              />
              <div
                className=""
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
              </div>
            </div>
            {/* {errors.oldPassword && touched.oldPassword && (
              <span className="text-red-600 text-base">
                {errors.oldPassword}
              </span>
            )} */}
            <div className="bg-[#f5f5f5] border border-solid border-[#e6e6e6] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
              <MdOutlineLock size={25} className="text-[#666666]" />
              <Field
                type="newPassword"
                name="newPassword"
                id="newPassword"
                placeholder="New Password"
                className="w-full bg-inherit outline-none border-none text-black text-base font-normal font-sans"
              />
              <div
                className=""
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <BsEye size={20} /> : <BsEyeSlash size={20} />}
              </div>
            </div>
            {/* {errors.newPassword && touched.newPassword && (
              <span className="text-red-600 text-base">
                {errors.newPassword}
              </span>
            )} */}
            <button
              type="submit"
              className="xl:relative xl:top-2 bg-transparent text-[#01589A] border-none outline-none underline decoration-[#01589A] flex items-center justify-center text-[1.125rem] font-normal font-sans leading-[2rem]"
            >
              Update
            </button>
          </Form>
        )}
      </Formik>

      <div className="application-btn-container">
        <GreyButton
          Text="Back"
          Icon={<MdKeyboardArrowLeft size={25} />}
          iconPosition="left"
        />
        <Button
          Text="Edit"
          Icon={<MdKeyboardArrowRight size={25} />}
          className="application-btn"
        />
      </div>
    </div>
  );
}

export default Profile;
