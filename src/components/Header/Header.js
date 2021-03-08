import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">BBC</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Live</Nav.Link>
      <NavDropdown title="Top News" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Asia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Europe</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Africa</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Australia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">South America</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">North America</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">South Asia</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Bangladeshi Top News</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;