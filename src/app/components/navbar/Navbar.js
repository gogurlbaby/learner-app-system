"use client";

import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Offcanvas, Dropdown } from "react-bootstrap";
import { GraduationCap, LogIn } from "lucide-react";
import CustomPopover from "../custom-popover/CustomPopover";
import { useRouter } from "next/navigation";
import "../../styles/navbar.css";

function NavBar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogin = (userData) => {
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : {};

    const newUserData = {
      name: userData.name || parsedUser.name || "John Doe",
      email: userData.email || parsedUser.email || "",
    };

    localStorage.setItem("user", JSON.stringify(newUserData));

    console.log("User stored in localStorage:", newUserData);
    setUser(newUserData);
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
            placement="end"
            className="w-full"
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
                  <CustomPopover handleLogin={handleLogin} />
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
