import styled from "styled-components";

export const SolutionsContainer = styled.div`
 background-color: #fff;
 padding: 1.25rem 1rem 3rem;

 @media (min-width: 1200px) {
    padding: 5.875rem 11.875rem 4.688rem;
 }
 .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 }
  .title {
    color: #000;
    font-size: 2.5rem;
    font-weight: 700;
    font-family: "Lato", serif;
    margin-bottom: 1rem;
  }
  .description {
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Inter", serif;
  }
  .card-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3.5rem;

@media (min-width: 1200px) {
    flex-direction: row;
    gap: 1.75rem;
}
  }
  .card-container {
   border: 1px solid #fff;
   margin-bottom: 1.75rem;
   box-shadow: 0px 16px 32px 0px #00000026;
   padding: 1.5rem;
  }
  img {
   margin-bottom: 1rem;
  }
  h4 {
   color: #000;
   font-size: 1.25rem;
   font-weight: 600;
   font-family: "Inter", serif;
   line-height: 2rem;
   margin-bottom: 2rem;
   text-align: left;
  }
  .description {
   color: #000;
   font-size: 1rem;
   font-weight: 400;
   font-family: "Inter", serif;
   line-height: 1.5rem;
   margin-bottom: 1rem;
   text-align: left;
  }
  .price {
   color: #999;
   font-size: 1rem;
   font-weight: 600;
   font-family: "Inter", serif;
   line-height: 1.5rem;
   margin-bottom: 1rem;
   text-align: left;
  }
  span {
   color: #000;
  }
`;