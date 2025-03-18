"use client";

import React, { useEffect, useState } from "react";
import Theme from "../../components/theme";
import { Plus, Search, Pencil, Trash2, Check, Clock } from "lucide-react";
import CreateInvoice from "./CreateInvoice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { Card, CardContent } from "../../../../components/ui/card";

function Invoices() {
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);
  // const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchInvoices();
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

  const fetchInvoices = async () => {
    const apiUrl = "https://tmp-se-project.azurewebsites.net/api/invoices";

    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setInvoices(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching invoices:", error);
      setLoading(false);
    }
  };

  const handleInvoiceCreated = (newInvoice) => {
    setInvoices((prevInvoices) => [newInvoice, ...prevInvoices]);
    setShowCreateInvoice(false);
  };

  const invoices = [
    {
      id: 1,
      learner: "John Doe",
      email: "johndoe@example.com",
      amount: "500",
      date: "2024-03-01",
      icon: Check,
      status: "Paid",
    },
    {
      id: 2,
      learner: "Jane Smith",
      email: "janesmith@example.com",
      amount: "700",
      date: "2024-02-15",
      icon: Clock,
      status: "Pending",
    },
    {
      id: 3,
      learner: "David Johnson",
      email: "davidj@example.com",
      amount: "600",
      date: "2024-01-20",
      icon: Check,
      status: "Paid",
    },
  ];

  return (
    <>
      {!showCreateInvoice ? (
        <>
          <div className="absolute right-0 pr-[4rem]">
            <Theme />
          </div>
          <div className="mt-[3.375rem]">
            <h2 className="text-black font-sans font-semibold font-lg">
              Invoices
            </h2>
            <div className="lg:flex lg:gap-[1.5rem] lg:items-center">
              <div className="w-[70%] border-b border-[#01589A] relative bg-[#F5F5F5] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
                <Search size={25} className="text-[#01589A]" />
                <input
                  type="search"
                  name="search"
                  placeholder="Search Invoices"
                  className="bg-inherit border-none outline-none block text-[#666] text-base font-normal font-sans appearance-none pr-[2rem]"
                />
              </div>
              <button
                type="submit"
                onClick={() => setShowCreateInvoice(true)}
                className="bg-[#01589A] py-[0.75rem] px-[1.5rem] text-white flex justify-center items-center gap-[0.5rem] text-base font-semibold rounded-[5px] border border-solid border-[#01589A] hover:bg-[#014273] hover:border-[#014273]"
              >
                Create invoice
                <Plus size={25} />
              </button>
            </div>
            <div className="bg-[#F5F5F5] p-[1rem] w-full mt-[2rem]">
              {loading ? (
                <p>Loading invoices...</p>
              ) : (
                <Card>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Learner</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="bg-white p-[1.5rem]">
                        {invoices.length > 0 ? (
                          invoices.map((invoice) => (
                            <TableRow key={invoice.id}>
                              <TableCell>{invoice.learner}</TableCell>
                              <TableCell>{invoice.email}</TableCell>
                              <TableCell>${invoice.amount}</TableCell>
                              <TableCell>
                                {new Date(invoice.date).toLocaleDateString()}
                              </TableCell>
                              <TableCell>
                                <button
                                  className={`flex gap-2 items-center py-[0.5rem] px-[0.8rem] rounded-md ${
                                    invoice.status === "Paid"
                                      ? "bg-[#77C053] text-white"
                                      : "bg-[#E6E6E6] text-black"
                                  }`}
                                >
                                  {invoice.status}
                                  <invoice.icon
                                    size={20}
                                    className={
                                      invoice.status === "Paid"
                                        ? "text-white"
                                        : "text-black"
                                    }
                                  />
                                </button>
                              </TableCell>
                              <TableCell className="flex gap-2">
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
                              No invoices found.
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
        <CreateInvoice onInvoiceCreated={handleInvoiceCreated} />
      )}
    </>
  );
}

export default Invoices;
