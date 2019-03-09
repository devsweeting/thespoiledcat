import React from "react";
import { connect } from 'react-redux';
import styled from 'styled-components';
import CartTable from './CartTable';
import CheckoutForm from './Checkout';


function submitOrder(values, cart) {
  const { email, name } = values.order

  order: {

  }
}

function Cart(props) {
  const { cart } = props
  return (
    <React.Fragment>
      <CheckoutForm onSubmit={(values) => submitOrder(values, cart)}/>
      <CartTable />
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Cart)
