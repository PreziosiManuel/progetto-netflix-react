import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BellFill, Search } from "react-bootstrap-icons";
import logo from "../media/logo.png";
import Avatar from "../media/avatar.png";
import { Link } from "react-router-dom";

function NetflixNavbar() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" className="align-content-center">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo Netflix" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav align-items-center">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            {/* <Nav.Link href="/1">Tv Shows</Nav.Link> */}
            <Link to="/" className="my-auto px-1">
              Home
            </Link>
            <Link className=" my-auto px-1" to="/1">
              Tv Shows
            </Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#recent">Recently Added</Nav.Link>
            <Nav.Link href="#mylist">My List</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <Nav.Item>
              <Search color="white" size="1rem" className="nav-icon" />
            </Nav.Item>
            <Nav.Item>
              <span className="nav-icon">Manuel</span>
            </Nav.Item>
            <Nav.Item>
              <BellFill color="white" size="1rem" className="nav-icon" />
            </Nav.Item>
            <img src={Avatar} alt="avatar" className="nav-avatar" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNavbar;
