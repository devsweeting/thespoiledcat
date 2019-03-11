import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.section `
  height: 150px; /* 100% Full-height */
  width: 100%; /* 0 width - change this with JavaScript */
  background-color: black;
  position: fixed;
  top: 0;
  color: white;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
     background-color: black;
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
`;

const StyledRoute = styled.section `
`;

function Header() {
  return(
    <NavWrapper>
      <Title>the Spoiled Cat</Title>
      <NavLinks>
        <StyledRoute><Link to="/"> Home </Link></StyledRoute>
        <StyledRoute><Link to='/about'> About Us </Link></StyledRoute>
        <StyledRoute><Link to="/cart"> View Cart </Link></StyledRoute>
      </NavLinks>
    </NavWrapper>
  )
}

export default Header;
