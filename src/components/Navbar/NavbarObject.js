import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

class NavbarObject extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand>Andy Estevez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavbarObject;