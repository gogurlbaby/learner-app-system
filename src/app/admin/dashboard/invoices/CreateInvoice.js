"use client";

import React, { useState } from "react";
import Theme from "../../components/theme";
import CustomForm from "../../../components/custom-form/CustomForm";
import * as Yup from "yup";
import {
  UserRound,
  CircleDollarSign,
  Calendar,
  Clock,
  Pencil,
  ChevronRight,
} from "lucide-react";
import selectLearnerOptions from "../../../components/json/select_learner.json";
import statusOptions from "../../../components/json/status.json";
import GreyButton from "../../../components/button/GreyButton";
import Button from "../../../components/button/Button";

function CreateInvoice({ onInvoiceCreated }) {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    selectLearner: "",
    amount: "",
    date: "",
    status: "",
    paymentDetails: "",
  };

  const createInvoiceSchema = Yup.object().shape({
    selectLearner: Yup.string()
      .oneOf(
        selectLearnerOptions.map((option) => option.value),
        "Not a learner"
      )
      .required("Select a learner"),

    amount: Yup.number()
      .typeError("Amount must be a number")
      .required("Please enter an amount"),
    date: Yup.string().required("Please select a date"),
    status: Yup.string()
      .oneOf(
        statusOptions.map((option) => option.value),
        "Invalid status"
      )
      .required("Status of payment is required"),

    paymentDetails: Yup.string().required("Please enter Payment details"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl = "https://tmp-se-project.azurewebsites.net/api/invoices";
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
      console.log("Invoice Response", data);

      if (res.ok) {
        onInvoiceCreated(data);
      } else console.log("Failed to create invoice", data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const fields = [
    {
      name: "selectLearner",
      placeholder: "Select learner",
      icon: UserRound,
      options: selectLearnerOptions,
    },
    {
      name: "amount",
      type: "number",
      placeholder: "Enter amount in USD",
      icon: CircleDollarSign,
    },
    {
      name: "date",
      type: "text",
      placeholder: "Collection date",
      icon: Calendar,
    },
    {
      name: "status",
      type: "text",
      placeholder: "Status",
      icon: Clock,
      options: statusOptions,
    },
    {
      name: "paymentDetails",
      type: "text",
      placeholder: "Payment details",
      icon: Pencil,
    },
  ];
  return (
    <>
      <div className="absolute right-0 pr-[4rem]">
        <Theme />
      </div>
      <div className="mt-[3.375rem] ">
        <h2 className="text-[#999] font-sans font-semibold font-lg">
          Invoices | <span className="text-black">Create invoice</span>
        </h2>

        <div>
          <CustomForm
            initialValues={initialValues}
            validationSchema={createInvoiceSchema}
            onSubmit={handleSubmit}
            fields={fields}
            submitButton={(isSubmitting) => (
              <div className="xl:flex xl:flex-row xl:items-center mt-[3.375rem] flex flex-col gap-[1.5rem]">
                <GreyButton
                  Text="Cancel"
                  Icon={<ChevronRight size={25} />}
                  onClick={() => on(null)}
                />
                <Button
                  type="submit"
                  Text={loading ? "Creating invoice..." : "Create invoice"}
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

export default CreateInvoice;
