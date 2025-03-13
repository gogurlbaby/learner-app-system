import React from "react";
import Theme from "../components/theme";
import Button from "../../components/button/Button";
import { Plus, Search } from "lucide-react";
import CustomForm from "../../components/custom-form/CustomForm";
import * as Yup from "yup";

export default function Invoices() {
  const initialValues = {
    search: "",
  };

  const searchSchema = Yup.object().shape({
    search: Yup.string()
      .min(3, "Search term must be at least 3 characters")
      .max(50, "Search term is too long")
      .required("Search field is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };
  const fields = [
    {
      name: "search",
      type: "text",
      placeholder: "Search Invoices",
      icon: Search,
    },
  ];
  return (
    <>
      <div className="absolute right-0 pr-[4rem]">
        <Theme />
      </div>
      <div className="mt-[3.375rem] ">
        <h2 className="text-black font-sans font-semibold font-lg">Invoices</h2>
        <div className="">
          <CustomForm
            initialValues={initialValues}
            validationSchema={searchSchema}
            fields={fields}
            onSubmit={handleSubmit}
            formType="admin"
          />
          <Button Text="Create invoice" Icon={<Plus size={25} />} />
        </div>
      </div>
    </>
  );
}
