import React from "react";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function LearnerLayout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
