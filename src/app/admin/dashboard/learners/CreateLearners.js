"use client";

import React, { useState } from "react";
import Theme from "../../components/theme";
import CustomForm from "../../../components/custom-form/CustomForm";
import * as Yup from "yup";
import {
  UserRound,
  UsersRound,
  MapPin,
  CircleDollarSign,
  Image,
  Mail,
  GraduationCap,
  Phone,
  ChevronRight,
} from "lucide-react";
import GreyButton from "../../../components/button/GreyButton";
import Button from "../../../components/button/Button";
import selectProgramOptions from "../../../components/json/home-register/course_module.json";
import genderOptions from "../../../components/json/home-register/genderOptions.json";
import disabilityOptions from "../../../components/json/home-register/disability.json";

function CreateLearners({ onLearnersCreated }) {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    selectProgram: "",
    gender: "",
    location: "",
    phone: "",
    disability: "",
    amount: "",
    uploadImage: "",
    description: "",
  };

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/gif",
  ];
  const FILE_SIZE_LIMIT = 5 * 1024 * 1024;

  const createLearnersSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required"),
    selectProgram: Yup.string()
      .oneOf(
        selectProgramOptions.map((option) => option.value),
        "Invalid program"
      )
      .required("Please select a program"),
    gender: Yup.string()
      .oneOf(
        genderOptions.map((option) => option.value),
        "Invalid gender"
      )
      .required("Gender is required"),
    location: Yup.string().required("Please add your location"),
    phone: Yup.string().required("Your phone number is required").length(10),
    disability: Yup.string()
      .oneOf(
        disabilityOptions.map((option) => option.value),
        "Invalid"
      )
      .required("Kindly choose if you have a disability or not"),
    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Please enter an amount"),
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
    description: Yup.string().required("Please add a description"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl = "https://tmp-se-project.azurewebsites.net/api/learners";
    const token = localStorage.getItem("authToken");

    if (!token) {
      console.log("No authentication token found.");
      //   setLoading(false);
      //   setSubmitting(false);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("Learners Response", data);

      if (res.ok) {
        onLearnersCreated(data);
      } else console.log("Failed to create learners", data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const fieldSections = [
    {
      isGrid: true,
      fields: [
        {
          name: "firstname",
          type: "text",
          placeholder: "First name",
          icon: UserRound,
        },
        {
          name: "lastname",
          type: "text",
          placeholder: "Last name",
          icon: UserRound,
        },
      ],
    },
    {
      isGrid: false,
      fields: [
        { name: "email", type: "email", placeholder: "Email", icon: Mail },
      ],
    },
    {
      isGrid: true,
      fields: [
        {
          name: "selectProgram",
          placeholder: "Select Program",
          icon: GraduationCap,
          options: selectProgramOptions,
        },
        {
          name: "gender",
          placeholder: "Gender",
          icon: UserRound,
          options: genderOptions,
        },
        {
          name: "location",
          type: "text",
          placeholder: "Location",
          icon: MapPin,
        },
        {
          name: "phone",
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
          name: "disability",
          placeholder: "Disabled",
          icon: UsersRound,
          options: disabilityOptions,
        },
        {
          name: "amount",
          type: "number",
          placeholder: "Amount",
          icon: CircleDollarSign,
        },
        {
          name: "uploadImage",
          type: "file",
          placeholder: "Upload Image",
          icon: Image,
        },
        {
          name: "description",
          as: "textarea",
          placeholder: "Description",
          //   icon: Pencil,
        },
      ],
    },
  ];
  return (
    <>
      <div className="absolute right-0 pr-[4rem]">
        <Theme />
      </div>
      <div className="mt-[3.375rem] ">
        <h2 className="text-[#999] font-sans font-semibold font-lg">
          Learners | <span className="text-black">Create Learners</span>
        </h2>

        <div>
          <CustomForm
            initialValues={initialValues}
            validationSchema={createLearnersSchema}
            onSubmit={handleSubmit}
            fieldSections={fieldSections}
            submitButton={(isSubmitting) => (
              <div className="xl:flex xl:flex-row xl:items-center mt-[3.375rem] flex flex-col gap-[1.5rem]">
                <GreyButton
                  Text="Cancel"
                  Icon={<ChevronRight size={25} />}
                  onClick={() => on(null)}
                />
                <Button
                  type="submit"
                  Text={loading ? "Creating learner..." : "Create learner"}
                  Icon={<ChevronRight size={25} />}
                  disabled={loading || isSubmitting}
                />
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default CreateLearners;
