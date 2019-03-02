import React from "react";
import ProductItem from './ProductItem';
import * as data from '../mockdata.json';

function ProductList(props) {
  return(
    <div>
      <p>ProductList Working</p>
      props.products.map( product =>
        <ProductItem product = {product} />
      )
    </div>
  )
}

export default ProductList
