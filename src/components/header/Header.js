import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <Navbar dark color="dark" expand="sm">
        <div className="container">
          <NavbarBrand href="/" className="mr-auto">
            F Shrabon
          </NavbarBrand>
          <div>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to={"/"} className="nav-link active">
                  Home
                </Link>
              </NavItem>

              <NavItem>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/service"} className="nav-link">
                  Service
                </Link>
              </NavItem>
              <NavItem>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
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
