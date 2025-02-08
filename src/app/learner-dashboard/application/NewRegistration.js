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
import {
  UserRound,
  Mail,
  MapPin,
  GraduationCap,
  UsersRound,
  Phone,
  Image,
  CircleDollarSign,
} from "lucide-react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import RegistrationText from "../../(home)/home-register/RegistrationText";
import Button from "../../components/button/Button";
import GreyButton from "../../components/button/GreyButton";
import genderOptions from "../../../json/home-register/genderOptions.json";
import disabilityOptions from "../../../json/home-register/disability.json";
import courseModuleOptions from "../../../json/home-register/course_module.json";
import CustomForm from "@/app/components/custom-form/CustomForm";

function NewRegistration() {
  const initialValues = {
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
  };

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

  const handleSubmit = (values) => {
    console.log(values);
  };

  const fieldSections = [
    {
      isGrid: true,
      fields: [
        {
          name: "firstName",
          type: "text",
          placeholder: "First name",
          icon: UserRound,
        },
        {
          name: "lastName",
          type: "text",
          placeholder: "Last name",
          icon: UserRound,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email",
          icon: Mail,
        },
        {
          name: "location",
          type: "text",
          placeholder: "Location",
          icon: MapPin,
        },
      ],
    },
    {
      isGrid: true,
      fields: [
        {
          name: "courseModule",
          placeholder: "Choose module",
          icon: GraduationCap,
          options: courseModuleOptions,
        },
        {
          name: "gender",
          placeholder: "Gender",
          icon: UserRound,
          options: genderOptions,
        },
        {
          name: "disability",
          placeholder: "Disabled",
          icon: UsersRound,
          options: disabilityOptions,
        },
        {
          name: "contact",
          type: "text",
          placeholder: "Phone",
          icon: Phone,
        },
      ],
    },
    {
      isGrid: false,
      fields: [
        {
          name: "uploadImage",
          type: "file",
          placeholder: "Upload Image",
          icon: Image,
        },
        {
          name: "amount",
          type: "text",
          placeholder: "Amount",
          icon: CircleDollarSign,
        },
        {
          name: "description",
          as: "textarea",
          placeholder: "Description",
        },
      ],
    },
  ];

  return (
    <div className="bg-white xl:pt-[1.5rem] xl:pb-[6.25rem] xl:pl-[3.438rem] xl:bottom-[5rem] md:bottom-[1.5rem] pt-[1rem] pb-[6.25rem] relative bottom-[0.75rem] rounded-[5px]">
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
        <CustomForm
          initialValues={initialValues}
          validationSchema={newRegistrationSchema}
          onSubmit={handleSubmit}
          fieldSections={fieldSections}
          submitButton={(isSubmitting) => (
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
                disabled={isSubmitting}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default NewRegistration;
