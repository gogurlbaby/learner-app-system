import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const NavbarContainer = styled(Navbar)`
  background-color: #fff;
  padding: 1rem;
  width: 100%;
@media (min-width: 1200px) {
  padding: 1.75rem 12.563rem;
}
.menu-links {
  color: #000;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Inter", serif;
  line-height: 1.5rem;
}
.menu-container {
  display: flex;
  align-items: center;
  gap: 2rem;

@media (min-width: 1200px) {
  margin-right: 38rem;
}
}
.btn {
  color: #01589A !important;
  background-color: #fff !important;
  border: 1px solid #01589A !important;
  border-radius: 5px !important;
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;

  &:hover {
    background-color: #01589A !important;
    color: #fff ;
  }
}
`;