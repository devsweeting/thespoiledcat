import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.section `
  height: 90px;
  width: 100%;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);

  opacity: .9;
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
     height: 80px;
     width: 100%;
   }
`;


const Title = styled.h1 `
 font-size: 50px;
 padding-top: 20px;
 @import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');
 font-family: 'Gloria Hallelujah', cursive;
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
  state = {
    auth: false,
    slide: 0,  // How much should the Navbar slide up or down
    lastScrollY: 0,  // Keep track of current position in state
  };

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
   const { lastScrollY } = this.state;
   const currentScrollY = window.scrollY;


   if (currentScrollY > lastScrollY) {
     this.setState({ slide: '-120px' });
   } else {
     this.setState({ slide: '0px' });
   }
   this.setState({ lastScrollY: currentScrollY });
 };


  render() {

    return(
      <NavWrapper style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: 'transform 90ms linear',
        }}
      >
        <Title>the Spoiled Cat</Title>
        <NavLinks>
          <StyledRoute><Link to="/cart"> View Cart </Link></StyledRoute>
        </NavLinks>
      </NavWrapper>
    )
  }
}

export default Header;
