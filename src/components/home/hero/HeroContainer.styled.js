import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: #01589A;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.313rem 1.125rem;

@media (min-width: 1200px) {
     flex-direction: row;
     gap: 4.063rem;
     padding: 6.813rem 12.625rem;
   }
  .text-container {
    order: 2;

  @media (min-width: 1200px) {
     order: 1;
     display: flex;
     flex-direction: column;
     align-items: flex-start;
   }
  }
  .hero-title {
    font-size: 1.25rem;
    font-weight: 700;
    font-family: "Lato", serif;
    color: #fff;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    text-align: left;
  
  @media (min-width: 768px) {
    text-align: center;
   } 
   @media (min-width: 1200px) {
    font-size: 2.5rem;
    line-height: 3rem;
    text-align: left;
   }    
  }
  .hero-subtitle {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Inter", serif;
    color: #fff;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: left;

  @media (min-width: 768px) {
    text-align: center;
   } 
  @media (min-width: 1200px) {
    font-size: 1.25rem;
    line-height: 2rem;
    text-align: left;
   } 
  }
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-btn {
    text-decoration: none;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    border: 1px solid #fff;
    font-size: 1rem;
    font-weight: 600;
    font-family: "inter", serif;
    line-height: 1.5rem;
    cursor: pointer;
    
    &:hover {
      border: 1px solid #E6EFF5;
    }
  }
  .image-container {
    text-align: center;
    order: 1;
    margin-bottom: 1.5rem;

  @media (min-width: 1200px) {
     order: 2;
   }
  }
  img {
   /* width: 100%; */
  }
`;