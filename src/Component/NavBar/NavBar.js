import React, { useState } from 'react';
import { Nav, Navbar, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useAuth } from '../Authentication/Contexts/AuthContext'
import './NavBar.css'

const NavBar = () => {
    const { currentUser, logout } = useAuth();
    const history = useHistory()
    const [error, setError] = useState('');
    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/login')
        }
        catch (error) {
            let errorMessage = error.message;
            setError('Failed to log out ' + errorMessage)
        }
    }
    return (
        <div className="navbar-style">
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand href="/">
                        <h1 className="logo">Aircnc</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Host your home</Nav.Link>
                            <Nav.Link href="#home">Host your experience</Nav.Link>
                            <Nav.Link href="#link">Help</Nav.Link>
                            {
                                currentUser ?
                                    <DropdownButton id="dropdown-item-button" title={currentUser.email}>
                                        <Dropdown.Item as="button" onClick={handleLogout}>Logout</Dropdown.Item>
                                    </DropdownButton>
                                    :
                                    <>
                                        <Nav.Link to="/login">Login</Nav.Link>
                                        <Button className="main-button">Sign up</Button>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </div>
    );
};

export default NavBar;