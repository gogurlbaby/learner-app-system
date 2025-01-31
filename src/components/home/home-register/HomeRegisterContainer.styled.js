import styled from "styled-components";

export const HomeRegisterContainer = styled.div`
   background-color: #fff;
   padding: 6.25rem 1rem 5.375rem;

 @media (min-width: 1200px) {
   padding: 3rem 12.5rem 3.75rem;
 }
 .register-container{
    display: flex;
    flex-direction: column;

@media (min-width: 1200px) {
     flex-direction: row;
     align-items: center;
     gap: 7rem;
   }
 }
 .icon {
    color: #177DDC;
 }
 hr {
    border: 1px solid #D1E5F8;
    width: 0.063rem;                 
    height: 5rem;  
    position: relative;
    left: 1.2rem;
 @media (min-width: 768px) {
     height: 3rem; 
    }

@media (min-width: 1200px) {
     height: 7rem; 
    } 
 }
 .text-icon-container {
    display: flex;
    gap: 1.875rem;
 }
 .title-text-container {
    margin-top: 2.875rem;
 }
 .title {
    color: #000;
    font-size: 1rem;
    font-weight: 700;
    font-family: "Inter", serif;
    line-height: 1.5rem;
    margin-bottom: 1rem;
 }
 .text {
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Inter", serif;
    line-height: 1.5rem; 
    text-align: left;
 }
`;