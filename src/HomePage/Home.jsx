import React from "react";
import ProductList from './ProductList';
import data from '../mockdata.json';
import constants from './../constants';
const { c } = constants;

function Home(props) {
  return(
    <React.Fragment>
      <p>Home Working</p>
      <ProductList products={ data.products }/>
    </React.Fragment>
  )
}

export default Home
