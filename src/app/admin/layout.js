"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import AdminDashboard from "./dashboard/page";
import Invoices from "./dashboard/invoices/page";
import Learners from "./dashboard/learners/page";
import Courses from "./dashboard/courses/page";
import Report from "./dashboard/report/page";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/admin/login" || pathname === "/admin/register";
  const [activeContent, setActiveContent] = useState("dashboard");

  const renderContent = () => {
    switch (activeContent) {
      case "dashboard":
        return <AdminDashboard />;
      case "invoices":
        return <Invoices />;
      case "learners":
        return <Learners />;
      case "courses":
        return <Courses />;
      case "report":
        return <Report />;
      default:
        return <AdminDashboard />;
    }
  };

  return isAuthPage ? (
    <div>{children}</div>
  ) : (
    <SidebarProvider>
      {/* <div className="flex h-screen"> */}
      {/* Sidebar */}
      <AppSidebar setActiveContent={setActiveContent} />

      {/* Main Content */}
      {/* <div className="flex flex-col flex-grow"> */}
      <SidebarTrigger className="p-2" />
      <main className="px-[4rem] w-[62vw] h-screen overflow-auto">
        {renderContent()}
      </main>
      {/* </div> */}
      {/* </div> */}
    </SidebarProvider>
  );
}
