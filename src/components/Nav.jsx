import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="sm"
      expanded={expanded}
      sticky="top"
      className="navbar-techne"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}imagenes/nav.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <Container>

        <Navbar.Brand as={Link} to="/" className="logo-text fs-5">
          Instituto Téchne
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navbar"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto text-center">

            <Nav.Link className="nav-text" as={Link} to="/" onClick={() => setExpanded(false)}>
              Inicio
            </Nav.Link>

            <Nav.Link className="nav-text" as={Link} to="/Catalogo" onClick={() => setExpanded(false)}>
              Cursos
            </Nav.Link>

            <Nav.Link className="nav-text" as={Link} to="/" onClick={() => setExpanded(false)}>
              Nosotros
            </Nav.Link>

            <Nav.Link className="nav-text" as={Link} to="/" onClick={() => setExpanded(false)}>
              Contacto
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
};

export default Navigation;