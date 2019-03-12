import React from "react";
import ProductList from './ProductList';
import Jumbotron from './Jumbotron';
import data from '../mockdata.json';
import styled from 'styled-components';
import About from './About';
import CarouselJumbo from './CarouselJumbo';

const HomeWrapper = styled.section `
  border: 2px solid pink;
  width: 100%:
`;

function Home(props) {
  return(
    <HomeWrapper>
      <Jumbotron />
      <CarouselJumbo />
      <About />
      <ProductList products={ data.products }/>
    </HomeWrapper>
  )
}

export default Home
