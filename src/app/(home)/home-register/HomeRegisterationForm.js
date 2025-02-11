"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import * as Yup from "yup";
import RegistrationText from "./RegistrationText";
import Button from "../../components/button/Button";
import genderOptions from "../../../json/home-register/genderOptions.json";
import disabilityOptions from "../../../json/home-register/disability.json";
import courseModuleOptions from "../../../json/home-register/course_module.json";
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
import CustomForm from "@/app/components/custom-form/CustomForm";

function HomeRegisterationForm({ email }) {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: email || "",
    location: "",
    courseModule: "",
    gender: "",
    disability: "",
    contact: "",
    uploadImage: "",
    amount: "",
    description: "",
  };

  // const SUPPORTED_FORMATS = [
  //   "image/jpg",
  //   "image/jpeg",
  //   "image/png",
  //   "image/gif",
  // ];
  // const FILE_SIZE_LIMIT = 5 * 1024 * 1024;

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
    disability: Yup.string()
      .oneOf(
        disabilityOptions.map((option) => option.value),
        "Invalid"
      )
      .required("Kindly choose if you have a disability or not"),
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

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl = "https://tmp-se-project.azurewebsites.net/api/learners";
    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ email, ...values }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (res.ok) {
        console.log("Registration successful:", data);
      } else {
        console.error("Registration failed:", data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   setEmail(params.get("email") || "");
  // }, []);

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
          disabled: true,
          value: email,
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
    <div className="pt-[4.75rem]">
      <RegistrationText Text="Register" />
      <CustomForm
        initialValues={initialValues}
        validationSchema={homeRegisterSchema}
        onSubmit={handleSubmit}
        fieldSections={fieldSections}
        submitButton={(isSubmitting) => (
          <Button
            type="submit"
            Text={loading ? "Completing registeration..." : "Register"}
            Icon={<ChevronRight size={25} />}
            disabled={isSubmitting}
          />
        )}
      />
    </div>
  );
}

export default HomeRegisterationForm;
