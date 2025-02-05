"use client";

import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import ModalContainer from "../modal/ModalContainer";
import "./navbar.css";

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <Navbar expand="md" className="navbar-container">
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
                  <Nav.Link href="/" className="menu-links">
                    Home
                  </Nav.Link>
                  <Nav.Link href="" className="menu-links">
                    Courses
                  </Nav.Link>
                </div>
                <Nav.Link className="btn" onClick={handleShowModal}>
                  Login
                  <FiLogIn />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <ModalContainer show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

export default NavBar;
