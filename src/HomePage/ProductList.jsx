import React from "react";
import ProductListItem  from './ProductListItem';
import styled from 'styled-components';

const ProductListings = styled.section `
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  border: 1px auto red;
  border: 2px solid blue;
  z-index: 0;
`;

function ProductList(props) {
  return(
    <ProductListings>
      {props.products.map( product =>
       <ProductListItem
         product={ product }
         key={product.id}
        />
    )}
    </ProductListings>
  )
}

export default ProductList;
