"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "../components/ui/toaster";
import { usePathname } from "next/navigation";
import AdminLayout from "./admin/layout";
import LearnerLayout from "./learner/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith("/admin");
  const isLearnerPage = pathname.startsWith("/learner");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          {isAdminPage ? (
            <AdminLayout>{children}</AdminLayout>
          ) : isLearnerPage ? (
            children
          ) : (
            <LearnerLayout>{children}</LearnerLayout>
          )}
        </GoogleOAuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
