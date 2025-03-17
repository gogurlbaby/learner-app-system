import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

function LatestInvoices() {
  return (
    <div>
      <Card className="pt-[2rem]">
        <CardContent>
          <div className="flex justify-between items-center border-b border-[#E6E6E6] mb-[1rem]">
            <div className="flex gap-[1rem] items-center">
              {" "}
              <img
                src="/images/admin/invoice_user1.svg"
                alt=""
                className="w-10"
              />
              <div>
                <p className="text-base text-black font-semibold font-sans mb-1">
                  Jane Cooper
                </p>
                <p className="text-base text-black font-normal font-sans">
                  Software Developer
                </p>
              </div>
            </div>
            <p className="text-base text-black font-semibold font-sans mb-1">
              $420.00
            </p>
          </div>

          <div className="flex justify-between items-center border-b border-[#E6E6E6] mb-[1rem]">
            <div className="flex gap-[1rem] items-center">
              {" "}
              <img
                src="/images/admin/invoice_user2.svg"
                alt=""
                className="w-10"
              />
              <div>
                <p className="text-base text-black font-semibold font-sans mb-1">
                  Savannah Nguyen
                </p>
                <p className="text-base text-black font-normal font-sans">
                  Data Science
                </p>
              </div>
            </div>
            <p className="text-base text-black font-semibold font-sans mb-1">
              $420.00
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LatestInvoices;
