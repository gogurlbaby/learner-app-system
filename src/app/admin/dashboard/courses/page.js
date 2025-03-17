"use client";

import React, { useEffect, useState } from "react";
import Theme from "../../components/theme";
import { Search, Plus, ChevronRight } from "lucide-react";
import CreateCourse from "./CreateCourse";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardFooter,
} from "../../../../components/ui/card";
import Button from "../../../components/button/Button";

function Courses() {
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCourses();
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

  const fetchCourses = async () => {
    const apiUrl = "https://tmp-se-project.azurewebsites.net/api/course";

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();

      if (res.ok) {
        setCourses(data);
      } else {
        console.log("Error fetching courses:", data.message);
      }
    } catch (error) {
      console.log("Error fetching course:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCourseCreated = (newCourse) => {
    setCourses((prevCourses) => [newCourse, ...prevCourses]);
    setShowCreateCourse(false);
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
            <div className="lg:flex lg:gap-[1.5rem] lg:items-center">
              <div className="w-[70%] border-b border-[#01589A] relative bg-[#F5F5F5] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
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

            {loading ? (
              <p className="text-center text-[#01589A] mt-5">
                Loading courses...
              </p>
            ) : courses.length === 0 ? (
              <p className="text-center text-gray-500 mt-5">
                No courses available.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {courses.map((course) => (
                  <Card key={course._id} className="w-[350px] bg-[#F5F5F5]">
                    <CardHeader className="flex justify-center items-center">
                      <img
                        src={course.uploadImage || "/images/admin/course.svg"}
                        alt="Course"
                        className="mb-[2rem] w-full object-cover"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="text-black font-sans font-semibold text-base">
                        {course.courseTitle}
                      </CardTitle>
                      <div className="mt-[1.5rem] flex justify-between items-center border-b border-[#E6E6E6]">
                        <p className="text-black font-sans font-normal text-base">
                          Price:
                        </p>
                        <span className="text-black font-sans font-semibold text-base">
                          ${course.price}
                        </span>
                      </div>

                      <div className="mt-[1.5rem] flex justify-between items-center border-b border-[#E6E6E6]">
                        <p className="text-black font-sans font-normal text-base">
                          Duration:
                        </p>
                        <span className="text-black font-sans font-semibold text-base">
                          {course.duration} weeks
                        </span>
                      </div>

                      <div className="mt-[1.5rem] flex justify-between items-center border-b border-[#E6E6E6]">
                        <p className="text-black font-sans font-normal text-base">
                          Instructor:
                        </p>
                        <span className="text-black font-sans font-semibold text-base">
                          {course.instructor}
                        </span>
                      </div>

                      <div className="mt-[1.5rem] flex justify-between items-center">
                        <p className="text-black font-sans font-normal text-base">
                          Stacks:
                        </p>
                        <span className="text-black font-sans font-semibold text-base">
                          {course.stacks}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        Text="View more"
                        Icon={<ChevronRight size={25} />}
                      />
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <CreateCourse onCourseCreated={handleCourseCreated} />
      )}
    </>
  );
}

export default Courses;
