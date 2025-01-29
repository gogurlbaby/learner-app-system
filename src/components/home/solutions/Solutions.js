"use client"

import React from "react";
import solutions from "../../json/solutions.json"
import { SolutionsContainer } from "./SolutionsContainer.styled"

function Solutions() {
  return (
    <SolutionsContainer>
     <div className="text-container">
       <h2 className="title">Our solutions</h2>
       <p className="description">
        Create your account quickly with just your email or social media login, then explore a wide range 
       </p>
     </div>

      <div className="card-section">
        {solutions.map((solution) => (
            <div key={solution.id} className="card-container">
               <img src={solution.iconUrl} alt={solution.title } /> 
               <h4>{solution.title}</h4>
               <p className="description">{solution.description}</p>
               <p className="price">Price: <span>{solution.price}</span></p>
            </div>
        ))}
      </div>
    </SolutionsContainer>
  )
}

export default Solutions