import React from "react";
import styled from "styled-components";

function RegistrationText({ Text }) {
  return (
    <Container>
      <h1 className="title">{Text}</h1>
    </Container>
  )
}

export default RegistrationText

const Container = styled.div`
  
  .title{
    color: #000;
    font-size: 2.5rem !important;
    font-weight: 700;
    font-family: "Lato", serif;
    line-height: 3rem;
    margin-bottom: 2.5rem;
    text-align: center;
}
`;