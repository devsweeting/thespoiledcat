import React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartTable from './CartTable';
import Checkout from './Checkout';


export function Cart(props) {
  return (
    <React.Fragment>
      <Checkout />
      <CartTable />
    </React.Fragment>
  )
}

export default Cart;
