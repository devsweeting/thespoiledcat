import React from "react";
import styled from 'styled-components';
import CarouselJumbo from './CarouselJumbo';
import About from './About';
import data from '../mockdata.json';
import ProductList from './ProductList';
import Reviews from './Reviews';
import Location from './Location';


const HomeWrapper = styled.section `
  // border: 2px solid pink;
  width: 100%:
`;

function Home(props) {
  return(
    <HomeWrapper>
      <CarouselJumbo />
      <About />
      <ProductList products={ data.products }/>
      <Location />
      <Reviews />
    </HomeWrapper>
  )
}

export default Home
