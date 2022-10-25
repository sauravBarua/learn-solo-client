import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar
      style={{ marginBottom: "20px" }}
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <img
          style={{ width: "3%" }}
          src="https://www.pngfind.com/pngs/m/170-1701498_code-png-code-logo-png-transparent-png.png"
          alt=""
        />
        <Link style={{ textDecoration: "none", marginLeft: "7px" }} to="/">
          <Navbar.Brand>Learn Solo</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/"
            >
              Courses
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "5px",
              }}
            >
              More
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "5px",
              }}
            >
              More
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "5px",
              }}
            >
              More
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "5px",
              }}
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
