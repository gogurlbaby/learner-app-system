"use client"

import React, { useState } from "react";
import stacks from "../../json/stacks.json"
import { StackContainer } from "./StackContainer.styled";

function Stacks() {
    const [useDefaultClass, setUseDefaultClass] = useState(false);
    const getClassName = (index) => {
        const classes = [
            "border-white", 
            "border-blue",
            "border-green",
            "border-red",
            "border-orange",
            "border-grey"
        ];
        return classes[index % classes.length]
    }
  return (
    <StackContainer>
      <h4 className="title">What will be next step</h4>
      <p className="text">
       Discover our diverse stack of solutions, including software development, data science, and cloud tools. Sign up today and kickstart your journey!
      </p>
      <div className="btn-container">
       {stacks.map((item, index) => (
          <a 
           key={item.id} 
           href={item.link} 
           className={`btn ${useDefaultClass ? "" : getClassName(index)}`}
          >
          {item.stack}
         </a>
       ))}
      </div> 
    </StackContainer>
  )
}

export default Stacks