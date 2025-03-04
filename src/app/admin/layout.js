"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/admin");
  return <div>{isAuthPage ? children : <div>{children}</div>}</div>;
}
