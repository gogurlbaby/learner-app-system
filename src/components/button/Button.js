import React from "react";
import { ButtonContainer } from "./ButtonContainer.styled";


function Button({ type="button", onClick, Text, Icon }) {
  return (
    <ButtonContainer>
      <button type={type} onClick={onClick}>
        {Text} 
        {Icon && Icon}
      </button>
    </ButtonContainer>
  )
}

export default Button