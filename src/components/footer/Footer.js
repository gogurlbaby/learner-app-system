"use client"

import React from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import { FooterContainer } from "./FooterContainer.styled"

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <div className="footer-section">
       <img src="/images/azubi-footer-logo.svg" alt="Footer Logo" />

      <div className="footer-container">
        <div className="menu-container">
          <p className="menu">Menu</p>
        <div className="menu-flex">
          <a href="" className="footer-menu-list home">Home</a>
          <a href="" className="footer-menu-list">Courses</a>
        </div>
      </div>

      <div className="contact-container">
       <p className="contact">Contact</p>
       <p className="number">+23341002000</p>
       <p className="address">New  Reiss, Ghana, Accra</p>
      </div>

      <div className="social-container">
       <p className="social">Social</p>
      <div className="social-flex">
        <a href="" className="social-link linkedin">LinkedIn</a>
        <a href="" className="social-link">Facebook</a>
      </div>
     </div>
    </div>
   </div>
     <div>
       <hr />
      <div className="copyright-container">
        <span className="copyright">copyright {currentYear} - G-client, All rights reserved</span>
       <div className="back-to-top-container">
         <p className="back-to-top">Back to top</p>
          <IoArrowUpOutline size={25} className="arrow-icon" />
       </div>
      </div>
     </div>
    </FooterContainer>
  )
}

export default Footer

