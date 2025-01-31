import styled from "styled-components";

export const ButtonContainer = styled.div`
  
  button{
    background-color: #01589A;
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Inter", serif;
    border: 1px solid #01589A;
    border-radius: 5px;
    
  &:hover{
    background-color: #014273;
    border: 1px solid #014273;
  }   
    @media (max-width: 768px) {
       
    }
  }
`;