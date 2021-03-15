import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar-style">
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <h1 className="logo">Aircnc</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Host your home</Nav.Link>
                            <Nav.Link href="#home">Host your experience</Nav.Link>
                            <Nav.Link href="#link">Help</Nav.Link>
                            <Nav.Link href="#link">Login</Nav.Link>
                            <Button className="main-button">Sign up</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </div>
    );
};

export default NavBar;