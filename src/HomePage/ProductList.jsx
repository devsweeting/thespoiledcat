import React from "react";
import ProductListItem  from './ProductListItem';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { cartItemsWithQuantities } from '../HelperMethods';

const ProductListings = styled.section `
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
`;

function ProductList(props) {
  return(
    <ProductListings>
      {props.products.map( product =>
       <ProductListItem
         product={ product }
         addToCart={props.addToCart}
         cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
         
         key={product.id}
        />
    )}
    </ProductListings>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
