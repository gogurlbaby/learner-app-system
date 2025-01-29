import styled from "styled-components";

export const StackContainer = styled.div`
 background-color: #01589A;
 padding: 1.5rem 1rem 6.438rem;

@media (min-width: 768px) {
   padding: 1.5rem 3rem 6.438rem;
}

@media (min-width: 1200px) {
   padding: 2.125rem 21rem 3.938rem;
}
 .title {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 700;
    font-family: "Lato", serif;
    line-height: 3rem;
    text-align: center;
    margin-bottom: 1rem;
 }
 .text {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Inter", serif;
    line-height: 1.5rem;
    text-align: center;
    margin-bottom: 2.5rem;
 }
 .btn-container {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 1.5rem;
   margin-top: 2.5rem;

@media (min-width: 768px) {
     grid-template-columns: repeat(4, 1fr);
   }

@media (min-width: 1200px) {
     grid-template-columns: repeat(6, 1fr);
     margin-top: 3.25rem;
   }
 }
 .btn {
    color: #fff;
    padding: 0.75rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Inter", serif;
    line-height: 1.5rem;
 }
 .border-white {
    border: 1px solid #E6E6E6;
 }
 .border-blue {
    border: 1px solid #28ACE2;
 }
 .border-green {
    border: 1px solid #77C053;
 }
 .border-red {
    border: 1px solid #A61D24;
 }
 .border-orange {
    border: 1px solid #D89614;
 }
 .border-grey {
    border: 1px solid #999999;
 }
`;