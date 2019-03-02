import React from "react";
import ProductListItem  from './ProductListItem';

function ProductList(props) {
  return(
    <div>
      {props.products.map( product =>
       <ProductListItem product={ product } />
       )}
    </div>
  )
}

export default ProductList
