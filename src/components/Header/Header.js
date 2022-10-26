import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import { Button, Image } from "react-bootstrap";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
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
            <Nav.Link>
              <Link to="/">
                {" "}
                <Button variant="light">Courses</Button>
              </Link>
            </Nav.Link>

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
            {/* <Link
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "5px",
              }}
            >
              {user?.displayName}
            </Link> */}
            <Nav.Link>
              {" "}
              {user?.photoURL ? (
                <Image
                  style={{ height: "25px" }}
                  roundedCircle
                  src={user.photoURL}
                ></Image>
              ) : (
                <FaUser></FaUser>
              )}{" "}
            </Nav.Link>
            <Nav.Link>
              {user?.uid ? (
                <>
                  <span>{user?.dispmayName} </span>
                  {/* <Link onClick={handleLogOut}>Logout</Link> */}
                  <Button variant="light" onClick={handleLogOut}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="light">Login</Button>
                  </Link>
                </>
              )}
            </Nav.Link>

            {/* <Link
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "5px",
              }}
              to="/login"
            >
              Login
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
