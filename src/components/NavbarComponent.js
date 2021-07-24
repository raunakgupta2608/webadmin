import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { NavLink } from 'react-router-dom';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavLink className="navbar-brand" to="/" style={{margin: "0 0 0 25px"}}>Website Administrator</NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link" activeClassName="active">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavbarComponent;