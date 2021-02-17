import React, {Component} from 'react'
import {
  MDBNavbar, MDBContainer, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
, MDBBtn  } from "mdbreact";
import { Link } from 'react-router-dom';

class NavBar extends Component{

  state = {
    collapseID: ''
  };

  
  toggleCollapse = collapseID => () => {
    console.log("here")
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  
  render(){
    return(
      
      <MDBNavbar className="top_bar_color pt-2 pb-2" dark expand="md">
        <MDBContainer>
        <MDBNavbarBrand  className="mian_logo">
         <Link to="/home"><img src="/athstat-final-logo.png" alt="" /></Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse3')} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav right className="baarss">
            <MDBNavItem>
              <MDBNavLink to="/home">HOME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about-us">ABOUT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="faqs">WHY ATHSTAT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Features">FEATURES</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">CONTACT US</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="top_login">
              <MDBBtn className="login-btn">LOGIN</MDBBtn>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
   

    )
  }
    
}
export default NavBar;