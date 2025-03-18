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
import genderOptions from "../../components/json/home-register/genderOptions.json";
import disabilityOptions from "../../components/json/home-register/disability.json";
import courseModuleOptions from "../../components/json/home-register/course_module.json";
import CustomForm from "../../components/custom-form/CustomForm";
import { useRouter } from "next/navigation";
import { useToast } from "../../../hooks/use-toast";

function NewRegistration({ onComplete }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const storedUser = localStorage.getItem("user");
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const userEmail = parsedUser?.email || "";

  console.log("Stored user:", parsedUser);
  console.log("Expected email:", userEmail);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: userEmail,
    location: "",
    course: "",
    gender: "",
    disability: "",
    phone: "",
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
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Address is required")
      .test("match-email", "Email must match signup email", function (value) {
        console.log("Entered email:", value); // Debugging
        console.log("Stored email from localStorage:", userEmail); // Debugging
        return (
          value &&
          userEmail &&
          value.trim().toLowerCase() === userEmail.trim().toLowerCase()
        );
      }),
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
      .required("Kindly choose if you have a disability or not"),
    phone: Yup.string()
      .matches(
        /^(0[235678][0-9]{8})$/,
        "Invalid phone number. Must be 10 digits long."
      )
      .required("Your phone number is required")
      .length(10),
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
    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Please enter an amount"),
    description: Yup.string().required("Please add a description"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Submitting Registrations Data", values);
    setLoading(true);
    try {
      const apiLearnersUrl =
        "https://tmp-se-project.azurewebsites.net/api/learners";
      // const formData = new FormData();
      // Object.keys(values).forEach((key) => {
      //   formData.append(key, values[key]);
      // });

      const res = await fetch(apiLearnersUrl, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
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
        if (onComplete) {
          onComplete();
        }
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
          name: "uploadImage",
          type: "file",
          placeholder: "Upload Image",
          icon: Image,
        },
        {
          name: "amount",
          type: "number",
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
          submitButton={(isSubmitting) => (
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
                disabled={isSubmitting || loading}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default NewRegistration;
