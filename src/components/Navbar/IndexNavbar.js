import React, { useState, useEffect} from "react";

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
import { loggedIn } from "../../helpers/requestHelper";
import LoginModal from "../Modals/LoginModal";

function IndexNavbar(props) {
  const { navbarDefault, user } = props

  console.log(user)

  const [navbarColor, setNavbarColor] = useState(navbarDefault)
  const [collapseOpen, setCollapseOpen] = useState(false)
  const [loginModalLive, setLoginModalLive] = useState(false)
  const [logoutModalLive, setLogoutModalLive] = useState(false)
  
  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("")
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor(navbarDefault)
      }
    }
    window.addEventListener("scroll", updateNavbarColor)
    
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor)
    }
  })

  const toggleLoginModal = () => {
    setLoginModalLive(!loginModalLive)
  }

  const togglNavOpen = () => {
    document.documentElement.classList.toggle("nav-open")
    setCollapseOpen(!collapseOpen);
  }

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => togglNavOpen()}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="primary">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="/" id="navbar-brand">
              <img 
                alt="..."
                src={require("assets/logo/logo-white.png")} 
                width="60" 
                loading="lazy"
              />

              {!navbarColor
                ? <p>Planks & Cranks</p>
                : null
              }
               
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => togglNavOpen()}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="/shop">
                  <p>Shop</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sell">
                  <p>Sell</p>
                </NavLink>
              </NavItem>
              { user
                  ? (<NavItem >
                      <NavLink href="/profile">
                        <i className="now-ui-icons users_circle-08"></i>
                        <p>{user.username}</p>
                      </NavLink>
                    </NavItem>)
                  : null
              }
             
              <NavItem>
                <NavLink
                  onClick={ (event) => {
                    event.preventDefault();
                    if(user) {
                      setLogoutModalLive(true)
                      togglNavOpen()
                    } else {
                      setLoginModalLive(true)
                      togglNavOpen()
                    }
                  }}
                  id="user-profile-tooltip"
                >
                  {
                    user
                      ? (<div>
                          <i className="now-ui-icons sport_user-run"></i>
                          <p className="d-lg-non d-xl-none">Log Out</p>
                      </div>)
                      : (<div>
                          <i className="now-ui-icons users_circle-08"></i>
                          <p className="d-lg-none d-xl-none">Log In</p>
                      </div>)
                  }
                </NavLink>
                <UncontrolledTooltip target="#user-profile-tooltip">
         
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href=""
                  id="cart-tooltip"
                >
                  <i className="now-ui-icons shopping_cart-simple"></i>
                  <p className="d-lg-none d-xl-none">Cart</p>
                </NavLink>
                <UncontrolledTooltip target="#cart-tooltip">
                  Checkout
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <LoginModal isOpen={loginModalLive} toggleModal={toggleLoginModal}/>
    </>
  );
}

export default IndexNavbar;
