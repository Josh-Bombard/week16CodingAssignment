import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className='pretty' href="/">Movie App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/">
                <Button>Home</Button>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/movie-list">
                <Button>Movies</Button>
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/users">
                <Button>Users</Button>
              </Link>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;



