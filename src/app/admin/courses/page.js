"use client";

import React, { useEffect, useState } from "react";
import Theme from "../components/theme";
import { Search, Plus } from "lucide-react";
import CreateCourse from "./CreateCourse";

function Courses() {
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [learners, setLearners] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourse();
  }, []);

  // const initialValues = {
  //   search: "",
  // };

  // const searchSchema = Yup.object().shape({
  //   search: Yup.string()
  //     .min(3, "Search term must be at least 3 characters")
  //     .max(50, "Search term is too long")
  //     .required("Search field is required"),
  // });

  const fetchCourse = async () => {
    const apiUrl = "https://tmp-se-project.azurewebsites.net/api/course";

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setInvoices(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching course:", error);
      setLoading(false);
    }
  };

  const handleCourseCreated = () => {
    setCourse((prevCourse) => [newCourse, ...preCourse]);
    setLoading(false);
  };
  return (
    <>
      {!showCreateCourse ? (
        <>
          <div className="absolute right-0 pr-[4rem]">
            <Theme />
          </div>
          <div className="mt-[3.375rem] ">
            <h2 className="text-black font-sans font-semibold font-lg">
              Courses
            </h2>
            <div className="flex gap-[1.5rem] items-center">
              <div className="w-full border-b border-[#01589A] relative bg-[#F5F5F5] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                <Search size={25} className="text-[#01589A]" />
                <input
                  type="search"
                  name="search"
                  placeholder="Search Course"
                  className="bg-inherit border-none outline-none block text-[#666] text-base font-normal font-sans appearance-none pr-[2rem]"
                />
              </div>
              <button
                type="submit"
                onClick={() => setShowCreateCourse(true)}
                className="bg-[#01589A] py-[0.75rem] px-[1.5rem] text-white flex justify-center items-center gap-[0.5rem] text-base font-semibold rounded-[5px] border border-solid border-[#01589A] hover:bg-[#014273] hover:border-[#014273]"
              >
                Create Course
                <Plus size={25} />
              </button>
            </div>
          </div>
        </>
      ) : (
        <CreateCourse onCourseCreated={handleCourseCreated} />
      )}
    </>
  );
}

export default Courses;
