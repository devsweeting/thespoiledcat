import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.section `
  height: 120px; /* 100% Full-height */
  width: 100%; /* 0 width - change this with JavaScript */
  background-color: black;
  position: fixed;
  top: 0;
  color: white;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;

  @media (max-width: 768px) {
     background-color: red;
     height: 20%;
     width: 100%;
   }
`;

const Title = styled.h1 `
 font-size: 50px
`;

const NavLinks = styled.section `
display: flex;
justify-content: space-around;
float: right;
`;

const StyledRoute = styled.section `
  text
`;




class Header extends React.Component {


  render() {

    return(
      <NavWrapper>
        <Title>the Spoiled Cat</Title>
        <NavLinks>
          <StyledRoute><Link to="/cart"> View Cart </Link></StyledRoute>
        </NavLinks>
      </NavWrapper>
    )
  }
}

export default Header;
