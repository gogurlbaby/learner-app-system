"use client";

import React, { use, useEffect, useState } from "react";
import Theme from "../components/theme";
import Button from "../../components/button/Button";
import { Plus, Search, Pencil, Trash2 } from "lucide-react";
import CustomForm from "../../components/custom-form/CustomForm";
import * as Yup from "yup";
import CreateInvoice from "./CreateInvoice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

function Invoices() {
  const [showCreateInvoice, setShowCreateInvoice] = useState(false);
  const [invoices, setInvoices] = useState([]);
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

  const handleInvoiceCreated = () => {
    setInvoices((prevInvoices) => [newInvoice, ...preInvoices]);
    setLoading(false);
  };

  return (
    <>
      {!showCreateInvoice ? (
        <>
          <div className="absolute right-0 pr-[4rem]">
            <Theme />
          </div>
          <div className="mt-[3.375rem] ">
            <h2 className="text-black font-sans font-semibold font-lg">
              Invoices
            </h2>
            <div className="flex gap-[1.5rem] items-center">
              <div className="w-full border-b border-[#01589A] relative bg-[#F5F5F5] rounded-[5px] flex items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] mt-[2rem] mb-[0.5rem]">
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
            <div className="bg-[#F5F5F5] h-auto p-[1rem] w-full mt-[2rem]">
              {loading ? (
                <p>Loading invoices...</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Learners</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="bg-white p-[1.5rem]">
                    {invoices.length > 0 ? (
                      invoices.map((invoice) => (
                        <TableRow key={invoice._id}>
                          <TableCell>{invoice.selectLearner}</TableCell>
                          <TableCell>{invoice.email || "N/A"}</TableCell>
                          <TableCell>${invoice.amount}</TableCell>
                          <TableCell>
                            {new Date(invoice.date).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <button
                              className={`py-[0.5rem] px-[1.5rem] rounded-md ${
                                invoice.status === "Paid"
                                  ? "bg-[#77C053] text-white"
                                  : "bg-[#FFC107] text-black"
                              }`}
                            >
                              {invoice.status}
                            </button>
                          </TableCell>
                          <TableCell className="flex gap-2">
                            <button className="text-[#77C053]">
                              <Pencil />
                            </button>
                            <button className="text-[#A61D24]">
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
