import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className="animate__animated  animate__rubberBand">
      <Navbar dark className="main-bg" expand="sm">
        <div className="container">
          <NavbarBrand href="/" className="mr-auto">
            F Shrabon
          </NavbarBrand>
          <div>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
    
                <NavItem>
                  <NavLink exact to={"/"} className="nav-link">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to={"/about"} className="nav-link">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to={"/service"} className="nav-link">
                    Service
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink exact to={"/contact"} className="nav-link">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </div>
      </Navbar>
      
    </div>
  );
};

export default Header;
