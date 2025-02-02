import styled from "styled-components";

export const FooterContainer = styled.footer`
 background-color: #01589A;
 padding: 2.875rem 1.875rem 1.125rem;
@media (min-width: 1200px) {
    padding: 3.125rem 12.5rem 1.5rem;
  }
 .footer-section {
    
@media (min-width: 1200px) {
    display: flex;
    align-items: center;
    gap: 14.875rem;
  }
 }
 .footer-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
@media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }
 }
 img {
    width: 100%;
    margin-bottom: 2.5rem;
 }
 .menu,
 .contact,
 .social {
    color: #fff;
    font-size: 1.25rem;
    font-weight: 600;
    font-family: "Inter", serif;
    line-height: 2rem;
    margin-bottom: 0.875rem;
 }
 .menu-flex,
 .social-flex {
    display: flex;
    flex-direction: column;
    gap: 1rem;
 }
 .footer-menu-list,
 .number,
 .address {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Inter", serif;
    line-height: 1.5rem;
 }
 .number {
    margin-bottom: 1rem;
 }
 .social-link {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Inter", serif;
    text-decoration: underline;
    line-height: 1.5rem;
 }
 hr {
    margin: 4.625rem 0 1.25rem;
    color: #fff;
 }
 .copyright-container {
    @media (min-width: 1200px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
 }
 .copyright {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 400;
    font-family: "Inter", serif;
    line-height: 2rem;
    text-align: center;
 }
 .back-to-top-container {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1.5rem;
 }
 .back-to-top {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 400;
    font-family: "Inter", serif;
    line-height: 2rem;
    text-align: center;
 }
 .arrow-icon {
    color: #fff;
    border: 1px solid #fff;
 }
`;

