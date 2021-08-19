import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { NavLink, Redirect, useHistory } from 'react-router-dom';
import Logout from './Logout';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {token, setToken} = props;

  const toggle = () => setIsOpen(!isOpen);

  // Modal
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [pathname, setPathname] = useState(history.location.pathname);

  const toggleModal = () => {
    setModal(!modal);
  }

  const logoutImpl = () => {
    console.log(pathname);
    setToken(null);
    toggleModal();
    <Redirect to="/home" />
  }

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavLink className="navbar-brand" to="/home" style={{margin: "0 0 0 25px"}}>
          Website Administrator
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              (token==="null" || token===null || token===undefined) ? 
              <>
                <NavItem>
                  <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
                </NavItem> 
                <NavItem>
                  <NavLink to="/signup" className="nav-link" activeClassName="active">Sign Up</NavLink>
                </NavItem>
              </>  
              : 
              <>
                <NavItem>
                  <NavLink to={pathname} className="nav-link" 
                    activeClassName="active"
                    onClick={() => toggleModal()}>
                    Logout
                  </NavLink>
                </NavItem>
              </>
            }
            {/* {
              (token!=="null" || token!=null) ? 
              <>
                <NavItem>
                  <NavLink to={pathname} className="nav-link" 
                    activeClassName="active"
                    onClick={() => toggleModal()}>
                    Logout
                  </NavLink>
                </NavItem>
              </>
              : 
              <>
                <NavItem>
                  <NavLink to="/login" className="nav-link" activeClassName="active">Login</NavLink>
                </NavItem> 
                <NavItem>
                  <NavLink to="/signup" className="nav-link" activeClassName="active">Sign Up</NavLink>
                </NavItem>
              </>  
            } */}
          </Nav>
        </Collapse>
      </Navbar>
      {
        modal ? <Logout modal={modal} handleModal={toggleModal} setToken={logoutImpl} /> : ""
      }
    </>
  );
}

export default NavbarComponent;