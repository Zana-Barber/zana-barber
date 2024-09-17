// NavigationBar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavigationBar.css';

function NavigationBar({ handleShowReserva }) {
    return (
        <Navbar expand="lg" sticky="top" className="navbar">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src="/images/logo.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top me-2"
                        alt="Zana Barber Logo"
                    />
                    Zana Barber
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#galeria">Galería</Nav.Link>
                        <Nav.Link href="#testimonios">Testimonios</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
