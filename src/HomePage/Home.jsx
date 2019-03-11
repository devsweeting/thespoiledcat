import React from "react";
import ProductList from './ProductList';
import Jumbotron from './Jumbotron';
import data from '../mockdata.json';
import styled from 'styled-components';

const HomeWrapper = styled.section `
  margin: 0 auto
  border: 2px solid red;
  width: 100%:
`;

function Home(props) {
  return(
    <HomeWrapper>
      <Jumbotron />
      <p>Home Working</p>
      <ProductList products={ data.products }/>
    </HomeWrapper>
  )
}

export default Home
