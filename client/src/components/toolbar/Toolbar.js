import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import Logo from './Logo';
import NavItem from './NavItem';

const toolbar = () => {
  return (
    <header className="Toolbar">
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem link="/" exact>Home</NavItem>
            <NavItem link="/gallery">Gallery</NavItem>
            <NavItem link="/login" exact>Login</NavItem>
            <NavItem link="/logout">Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default toolbar;