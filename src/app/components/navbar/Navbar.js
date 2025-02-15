"use client";

import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Offcanvas, Dropdown } from "react-bootstrap";
import { GraduationCap, LogIn } from "lucide-react";
import CustomPopover from "../popover/CustomPopover";
import { useRouter } from "next/navigation";
import "./navbar.css";

function NavBar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setTimeout(() => setUser(JSON.parse(storedUser)), 100);
    }
  }, []);

  const handleLogin = (userData) => {
    console.log("User Logged In:", userData);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <Navbar expand="md" className="navbar-container">
        <Container fluid>
          <Navbar.Brand onClick={() => router.push("/")}>
            <img
              src="/images/azubi-logo.svg"
              alt="Logo"
              className="navbar-logo"
            />
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
                  <Nav.Link
                    onClick={() => router.push("/")}
                    className="menu-links"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link className="menu-links">Courses</Nav.Link>
                </div>
                {user ? (
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      as="button"
                      className="flex items-center gap-2 text-black text-base font-base"
                    >
                      <img
                        src="/images/learner_dashboard/user_icon.svg"
                        alt=""
                        className=""
                      />
                      <span>{user.name}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => router.push("/learner/dashboard")}
                        className="dropdown-item"
                      >
                        <GraduationCap className="icon" />
                        Portal
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={handleLogout}
                        className="dropdown-item"
                      >
                        <LogIn className="icon" />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <CustomPopover handleLogin={handleLogin} user={user} />
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
