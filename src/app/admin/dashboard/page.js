"use client";

import React, { useEffect, useState } from "react";
import { Banknote, Clock, FileText, Users } from "lucide-react";
import Theme from "../components/theme";
import Chart from "../components/chart";
import LatestInvoices from "../components/latest_invoices";
import { Card, CardContent } from "../../../components/ui/card";
import { useRouter } from "next/navigation";

function AdminDashboard() {
  const [adminUser, setAdminUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedAdmin = localStorage.getItem("adminUser");

    if (storedAdmin) {
      try {
        const parsedAdmin = JSON.parse(storedAdmin);
        setAdminUser(parsedAdmin);
      } catch (error) {
        console.error("Error parsing adminUser from localStorage:", error);
        localStorage.removeItem("adminUser");
        router.push("/admin/login");
      }
    } else {
      router.push("/admin/login");
    }
  }, []);
  return (
    <>
      {adminUser ? (
        <>
          <h2>Welcome {adminUser.email}</h2>

          <div className="absolute right-0 pr-2 lg:pr-[4rem]">
            <Theme />
          </div>
          <div className="mt-[3.375rem]">
            <div>
              <h2 className="text-black font-sans font-semibold font-lg">
                Dashboard
              </h2>
              <p className="text-black font-sans font-normal font-sm">
                Welcome back, John
              </p>
            </div>

            <div className="lg:grid-cols-4 grid grid-cols-1 gap-4">
              <Card className="bg-[#F5F5F5] pt-[1rem] pb-[0.5rem] px-[1rem]">
                <CardContent>
                  <div className="flex gap-2">
                    <Banknote size={25} />
                    <p className="text-[#404040] font-sans font-bold font-md">
                      Collected
                    </p>
                  </div>
                  <Card className="bg-white p-[1rem]">
                    <CardContent>
                      <p className="text-[#404040] font-sans font-bold font-md">
                        $20000
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="bg-[#F5F5F5] pt-[1rem] pb-[0.5rem] px-[1rem]">
                <CardContent>
                  <div className="flex gap-2">
                    <Clock />
                    <p className="text-[#404040] font-sans font-bold font-md">
                      Pending
                    </p>
                  </div>
                  <Card className="bg-white py-[1rem] px-[3rem]">
                    <CardContent>
                      <p className="text-[#404040] font-sans font-bold font-md">
                        $10000
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="bg-[#F5F5F5] pt-[1rem] pb-[0.5rem] px-[1rem]">
                <CardContent>
                  <div className="flex gap-2">
                    <FileText />
                    <p className="text-[#404040] font-sans font-bold font-md">
                      Total Invoices
                    </p>
                  </div>
                  <Card className="bg-white py-[1rem] px-[3rem]">
                    <CardContent>
                      <p className="text-[#404040] font-sans font-bold font-md">
                        35
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>

              <Card className="bg-[#F5F5F5] pt-[1rem] pb-[0.5rem] px-[1rem]">
                <CardContent>
                  <div className="flex gap-2">
                    <Users />
                    <p className="text-[#404040] font-sans font-bold font-md">
                      Total Learners
                    </p>
                  </div>
                  <Card className="bg-white py-[1rem] px-[3rem]">
                    <CardContent>
                      <p className="text-[#404040] font-sans font-bold font-md">
                        50
                      </p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>

            <div className="lg:grid-cols-2 grid grid-cols-1 gap-4 lg:mt-[2rem] mt-5">
              <div>
                <p className="text-black font-sans font-semibold font-lg ">
                  Recent Revenue
                </p>
                <Chart />
              </div>

              <div>
                <p className="text-black font-sans font-semibold font-lg">
                  Latest Invoices
                </p>
                <LatestInvoices />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default AdminDashboard;
