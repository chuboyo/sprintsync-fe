// src/components/AppNavbar.js
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function NavBar({ onLogout }) {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/tasks">
          <img
            src="/logo192.png"
            alt="App Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          SprintSync
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-danger" onClick={onLogout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
