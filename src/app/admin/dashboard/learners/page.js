"use client";

import React, { useEffect, useState } from "react";
import Theme from "../../components/theme";
import { Plus, Search, Pencil, Trash2, Eye } from "lucide-react";
import CreateLearners from "./CreateLearners";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../components/ui/sheet";

function Learners() {
  const [showCreateLearners, setShowCreateLearners] = useState(false);
  // const [learners, setLearners] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLearner, setSelectedLearner] = useState(null);

  useEffect(() => {
    fetchLearners();
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

  const fetchLearners = async () => {
    const apiUrl = "https://tmp-se-project.azurewebsites.net/api/learners";

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setInvoices(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching learners:", error);
      setLoading(false);
    }
  };

  const handleLearnersCreated = (newLearner) => {
    setLearners((prevLearners) => [newLearner, ...prevLearners]);
    setShowCreateLearners(false);
  };

  const learners = [
    {
      id: 1,
      learner: "John Doe",
      amount: "500",
      date: "2024-03-01",
      gender: "Male",
      course: "Software Development",
      imageUrl: "/images/admin/avatar.svg",
    },
    {
      id: 2,
      learner: "Jane Smith",
      amount: "700",
      date: "2024-02-15",
      gender: "Female",
      course: "Data Science",
      imageUrl: "/images/admin/avatar.svg",
    },
    {
      id: 3,
      learner: "David Johnson",
      amount: "600",
      date: "2024-01-20",
      gender: "Male",
      course: "Cloud Computing",
      imageUrl: "/images/admin/avatar.svg",
    },
  ];

  return (
    <>
      {!showCreateLearners ? (
        <>
          <div className="absolute right-0 pr-[4rem]">
            <Theme />
          </div>
          <div className="mt-[3.375rem] ">
            <h2 className="text-black font-sans font-semibold font-lg">
              Learners
            </h2>
            <div className="lg:flex lg:gap-[1.5rem] lg:items-center">
              <div className="w-[70%] border-b border-[#01589A] relative bg-[#F5F5F5] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                <Search size={25} className="text-[#01589A]" />
                <input
                  type="search"
                  name="search"
                  placeholder="Search learners"
                  className="bg-inherit border-none outline-none block text-[#666] text-base font-normal font-sans appearance-none pr-[2rem]"
                />
              </div>
              <button
                type="submit"
                onClick={() => setShowCreateLearners(true)}
                className="bg-[#01589A] py-[0.75rem] px-[1.5rem] text-white flex justify-center items-center gap-[0.5rem] text-base font-semibold rounded-[5px] border border-solid border-[#01589A] hover:bg-[#014273] hover:border-[#014273]"
              >
                Create learner
                <Plus size={25} />
              </button>
            </div>
            <div className="bg-[#F5F5F5] h-auto p-[1rem] w-full mt-[2rem]">
              {loading ? (
                <p>Loading learners...</p>
              ) : (
                <Card>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Learners</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Gender</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="bg-white p-[1.5rem]">
                        {learners.length > 0 ? (
                          learners.map((learner) => (
                            <TableRow
                              key={learner.id}
                              className="cursor-pointer hover:bg-gray-200"
                              onClick={() => setSelectedLearner(learner)}
                            >
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <img
                                    src={learner.imageUrl}
                                    alt=""
                                    className="w-10"
                                  />
                                  {learner.learner}
                                </div>
                              </TableCell>
                              <TableCell>{learner.course}</TableCell>
                              <TableCell>${learner.amount}</TableCell>
                              <TableCell>
                                {new Date(learner.date).toLocaleDateString()}
                              </TableCell>
                              <TableCell>{learner.gender}</TableCell>

                              <TableCell className="flex gap-2">
                                <button className="text-[#115EA5] bg-[#D1E5F8] p-[0.5rem]">
                                  <Eye />
                                </button>
                                <button className="text-[#77C053] bg-[#EDF7E8] p-[0.5rem]">
                                  <Pencil />
                                </button>
                                <button className="text-[#A61D24] bg-[#F7E9EA] p-[0.5rem]">
                                  <Trash2 />
                                </button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan="6" className="text-center">
                              No learners found.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </>
      ) : (
        <CreateLearners onLearnersCreated={handleLearnersCreated} />
      )}

      <Sheet
        open={!!selectedLearner}
        onOpenChange={() => setSelectedLearner(null)}
      >
        <SheetContent>
          <div className="flex flex-col items-center gap-4">
            <img
              src="/images/admin/avatar.svg"
              alt=""
              className="w-50 rounded-full"
            />
            <div className="text-[1.25rem] font-semibold font-sans text-black">
              John Doe
            </div>
            <div className="text-base font-normal font-sans text-black">
              johndoe@gmail.com
            </div>

            <div className="flex flex-col gap-[2rem] justify-start items-start">
              <div className="text-base font-normal font-sans text-black flex gap-[2rem] text-left">
                Program <strong>Software Development</strong>
              </div>
              <div className="text-base font-normal font-sans text-black flex gap-[2rem] text-left">
                Gender <strong>Male</strong>
              </div>
              <div className="text-base font-normal font-sans text-black flex gap-[2rem] text-left">
                Contact <strong>+23341000012</strong>
              </div>
              <div className="text-base font-normal font-sans text-black flex gap-[2rem] text-left">
                Location <strong>Accra, Ghana</strong>
              </div>
              <div className="text-base font-normal font-sans text-black flex gap-[2rem] text-left">
                Paid
                <strong>$450.00</strong>
              </div>
              <div className="text-base font-normal font-sans text-black flex gap-[2rem] text-left">
                Bio{" "}
                <strong>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </strong>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
export default Learners;
