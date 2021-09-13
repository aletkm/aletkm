import React, { StrictMode, useState } from 'react';
import { useEffect } from 'react';
import {
  Button,
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import RouterLink from './RouterLink';
import Logo from './Logo.js';
import { useAuth } from '../context/AuthUserContext';
import { useRouter } from 'next/router';
import { BsPerson } from "react-icons/bs";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { authUser, loading, signOut, fbToken } = useAuth();
  const router = useRouter();
  
  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/')
  }, [authUser, loading])
  
   
  return (
    
      <Navbar body="true" inverse="true" className="navbar-dark cursor-pointer" style={{ backgroundColor: '#0A1921', borderColor: '#0A1921' }}  expand="md">
        <Container>
          <NavbarBrand href="/"><Logo /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar fixed-top="true">
              
              <NavItem>
                <RouterLink href="/" className="nav-link" >
                  
                </RouterLink>
              </NavItem>
              
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {authUser && (
                <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                  <DropdownToggle nav caret id="profileDropDown">
                    <BsPerson
                      alt="Profile"
                      className="nav-user-profile rounded-circle navbar-dark cursor-pointer"
                      width="100"
                      height="100"
                      data-testid="navbar-picture-desktop"
                    />  {authUser.email}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header data-testid="navbar-user-desktop">
                      {authUser.email}
                    </DropdownItem>
                    <DropdownItem className="dropdown-profile navbar-dark cursor-pointer" tag="span">
                      <RouterLink href="./profile" icon="user" className="cursor-pointer" testId="navbar-profile-desktop">
                        My Account
                      </RouterLink>
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                      <Button onClick={signOut} className="button cursor-pointer"><span>Sign out</span></Button>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {authUser && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <span className="user-info text-light">
                  <BsPerson
                      alt="Profile"
                      className="nav-user-profile rounded-circle navbar-dark cursor-pointer text-light"
                      width="100"
                      height="100"
                      data-testid="navbar-picture-desktop"
                    />  {authUser.email}
                  </span>
                </NavItem>
                <NavItem>
                  <RouterLink href="./profile" icon="user" className="navbar-dark text-light" testId="navbar-profile-desktop" style={{cursor: "pointer"}}>
                        My Account
                  </RouterLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <Button onClick={signOut} className="button"><span>Sign out</span></Button>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    
    
  );
};

export default NavBar;