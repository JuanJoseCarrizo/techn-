import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <Navbar
  expand="sm"
  sticky="top"
  className="navbar-techne"
  style={{
    backgroundImage: `url(${import.meta.env.BASE_URL}imagenes/nav.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <Container>

    {/* Logo */}
    <Navbar.Brand as={Link} to="/" className="logo-text fs-5">
      Instituto Téchne
    </Navbar.Brand>

    {/* Botón hamburguesa */}
    <Navbar.Toggle aria-controls="main-navbar" />

    {/* Menú */}
    <Navbar.Collapse id="main-navbar">
      <Nav className="ms-auto text-center">
        <Nav.Link as={Link} to="/" className="nav-text">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/Catalogo" className="nav-text">Cursos</Nav.Link>
        <Nav.Link as={Link} to="/" className="nav-text">Nosotros</Nav.Link>
        <Nav.Link as={Link} to="/" className="nav-text">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Container>
</Navbar>
    );
}

export default Navigation;