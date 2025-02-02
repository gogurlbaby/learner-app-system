"use client"

import React, { useState } from "react";  
import { FiLogIn } from "react-icons/fi";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { NavbarContainer } from "./NavbarContainer.styled";
import ModalContainer from "../modal/ModalContainer";
import styled from "styled-components";
function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
      <>
       <NavbarContainer expand="md">
      <Container fluid>
            <Navbar.Brand href="/">
              <img src="/images/azubi-logo.svg" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Offcanvas
              id="responsive-navbar-nav"
              aria-labelledby=""
              placement="end"
              style={{ width: "270px" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title> </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className="menu-container">
                  <Nav.Link href="/" className="menu-links">Home</Nav.Link>
                  <Nav.Link href="" className="menu-links">Courses</Nav.Link>
                  </div>
                 <Nav.Link 
                  className="btn" 
                  onClick={handleShowModal}
                 >
                    Login 
                     <FiLogIn />
        
                 </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
      </NavbarContainer>

      <ModalContainer show={showModal} handleClose={handleCloseModal} />
      </>
  )
}

export default NavBar

const NavButton = styled.button`
  padding: 0.75rem 1rem !important;
  color: #01589A !important;
  background-color: #fff !important;
  border: 1px solid #01589A !important;
  border-radius: 5px !important;
  display: flex !important;
  align-items: center !important;
  gap: 0.5rem !important;

  &:hover {
    background-color: #01589A !important;
    color: #fff !important;
  }
  @media (max-width: 768px) {
    justify-content: center !important; 
    padding: 0.5rem 0.75rem !important;
    margin-top: 1rem !important;
  }
`;