"use client";

import React, { useState } from "react";
import {
  UserRound,
  Mail,
  MapPin,
  GraduationCap,
  UsersRound,
  Phone,
  Image,
  CircleDollarSign,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import * as Yup from "yup";
import RegistrationText from "../../(home)/home-register/RegistrationText";
import Button from "../../components/button/Button";
import GreyButton from "../../components/button/GreyButton";
import genderOptions from "../../../json/home-register/genderOptions.json";
import disabilityOptions from "../../../json/home-register/disability.json";
import courseModuleOptions from "../../../json/home-register/course_module.json";
import CustomForm from "@/app/components/custom-form/CustomForm";
import { useRouter } from "next/navigation";
import { useToast } from "../../../hooks/use-toast";

function NewRegistration({ onComplete }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

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
    course: Yup.string()
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

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Submitting Registrations Data", values);
    setLoading(true);
    try {
      const apiLearnersUrl =
        "https://tmp-se-project.azurewebsites.net/api/learners";
      const formData = new FormData();
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
      });

      const res = await fetch(apiLearnersUrl, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "applications/json",
        },
      });
      const data = await res.json();
      console.log("API Response", data);

      if (res.ok) {
        toast({
          title: "Registration Successful",
          description: "Your registration has been completed successfully!",
          duration: 3000,
          className: "bg-emerald-700 text-white",
        });

        setTimeout(() => {
          setSubmitting(false);
          if (onComplete) {
            onComplete();
          }
        }, 1000);
      } else {
        throw new Error(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.log("Registration Error", error);
      toast({
        title: "Registration Failed ❌",
        description: error.message,
        duration: 3000,
        variant: "destructive",
      });
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
          name: "course",
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
      <div className="xl:pt-[4.75rem] pt-[3rem]">
        <RegistrationText Text="Start new application" />
        <CustomForm
          initialValues={initialValues}
          validationSchema={newRegistrationSchema}
          onSubmit={handleSubmit}
          fieldSections={fieldSections}
          submitButton={(isSubmitting, isValid) => (
            <div className="w-full xl:flex xl:flex-row xl:items-center mt-[3.375rem] flex flex-col gap-[1.5rem]">
              <GreyButton
                Text="Back"
                Icon={<ChevronLeft size={25} />}
                iconPosition="left"
                onClick={() => router.back()}
              />
              <Button
                type="submit"
                Text={loading ? "Registering..." : "Register"}
                Icon={<ChevronRight size={25} />}
                disabled={isSubmitting || !isValid}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default NewRegistration;
