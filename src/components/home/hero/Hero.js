"use client"

import React from 'react'
import { HeroContainer } from "../hero/HeroContainer.styled"
function Hero() {
  return (
    <HeroContainer>
        <div className="text-container">
          <h1 className="hero-title">Unlock Your Potential with Industry-Leading Courses!</h1>
          <p className="hero-subtitle">
          "Join thousands of learners gaining real-world skills and advancing their careers. 
          Our expert-led courses are designed to empower you to succeed."
          </p>
          <div className="btn-container">
            <a href="" className="hero-btn">Get Started</a>
          </div>
        </div>

        <div className="image-container">
            <img src="/images/home/hero-image.svg" alt="Hero Image" />
        </div>
    </HeroContainer>
  )
}

export default Hero