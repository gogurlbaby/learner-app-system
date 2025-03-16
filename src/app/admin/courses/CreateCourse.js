"use client";

import React, { useState } from "react";
import Theme from "../components/theme";
import CustomForm from "../../components/custom-form/CustomForm";
import * as Yup from "yup";
import {
  UserRound,
  Clock,
  CircleDollarSign,
  Image,
  GlobeLock,
  GraduationCap,
  Phone,
  ChevronRight,
} from "lucide-react";
import GreyButton from "../../components/button/GreyButton";
import Button from "../../components/button/Button";
import selectProgramOptions from "../../learner/json/home-register/course_module.json";
import genderOptions from "../../learner/json/home-register/genderOptions.json";
import disabilityOptions from "../../learner/json/home-register/disability.json";

function CreateCourse({ onCourseCreated }) {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    courseTitle: "",
    price: "",
    instructor: "",
    duration: "",
    stacks: "",
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

  const createCourseSchema = Yup.object().shape({
    courseTitle: Yup.string().required("Please add Course Title"),
    price: Yup.number()
      .typeError("Amount must be a number")
      .required("Please enter an amount"),
    instructor: Yup.string().required("Please add instructor"),
    duration: Yup.string().required("Please choose duration"),
    stacks: Yup.string().required("Please add stacks"),
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
    const apiUrl = "https://tmp-se-project.azurewebsites.net/api/course";
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
      console.log("Course Response", data);

      if (res.ok) {
        onCourseCreated(data);
      } else console.log("Failed to create course", data);
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
          name: "courseTitle",
          type: "text",
          placeholder: "Course Title",
          icon: GraduationCap,
        },
        {
          name: "price",
          type: "number",
          placeholder: "Price",
          icon: CircleDollarSign,
        },
      ],
    },
    {
      isGrid: false,
      fields: [
        {
          name: "instructor",
          type: "text",
          placeholder: "Instructor",
          icon: UserRound,
        },
        {
          name: "duration",
          type: "text",
          placeholder: "Duration",
          icon: Clock,
        },
        {
          name: "stacks",
          type: "text",
          placeholder: "Stacks",
          icon: GlobeLock,
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
          Courses | <span className="text-black">Create Course</span>
        </h2>

        <div>
          <CustomForm
            initialValues={initialValues}
            validationSchema={createCourseSchema}
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
                  Text={loading ? "Creating course..." : "Create course"}
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

export default CreateCourse;
