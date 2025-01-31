"use client"

import React from "react";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { HomeRegisterContainer } from "./HomeRegisterContainer.styled";
import HomeRegisterationForm from "./HomeRegisterationForm";


function HomeRegister() {
  return (
    <HomeRegisterContainer>
        <div className="register-container">
          <div className="text-icon-container">
            <div className="icon-container">
              <BsFillRecordCircleFill size={40} className="icon" />
              <hr />
              <BsFillRecordCircleFill size={40} className="icon" />
              <hr />
              <BsFillRecordCircleFill size={40} className="icon" />
            </div>
            
            <div className="text-container">
              <div>
                <p className="title">Sign Up and Choose Your Course</p>
                <p className="text">Create your account quickly with just your email or social media login, then explore a wide range</p>
              </div>

              <div className="title-text-container">
                <p className="title">Onboarding</p>
                <p className="text">Create your account quickly with just your email or social media login, then explore a wide range</p>
              </div>

              <div className="title-text-container">
                <p className="title">Start Learning</p>
                <p className="text">Create your account quickly with just your email or social media login, then explore a wide range</p>
              </div>
            </div>
          </div>
            <HomeRegisterationForm />       
        </div>
    </HomeRegisterContainer>
  )
}

export default HomeRegister