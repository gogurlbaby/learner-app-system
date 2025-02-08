"use client";

import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Navbar, Container, Nav, Offcanvas, Dropdown } from "react-bootstrap";
import ModalContainer from "../modal/ModalContainer";
import "./navbar.css";

function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleLogin = (userData) => {
    setUser(userData);
    handleCloseModal();
  };

  const handleLogout = () => {
    setUser(null);
  };

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
                {user ? (
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      as="button"
                      className="flex items-center gap-2 text-black text-base font-base"
                    >
                      <img src="/images/user_icon.svg" alt="" className="" />
                      <span>{user.name}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="">Portal</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Nav.Link className="btn" onClick={handleShowModal}>
                    Login
                    <FiLogIn />
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <ModalContainer
        show={showModal}
        handleClose={handleCloseModal}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default NavBar;
