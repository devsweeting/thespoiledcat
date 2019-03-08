import React from "react";
import { connect } from 'react-redux'


function Checkout(props) {
  return(
    <React.Fragment>
      <h2> Checkout </h2>

      <p> First Name </p>
      <p> Last Name </p>
      <p> Address Form </p>
      <p> City </p>
      <p> State </p>
      <p> ZipCode </p>
      <button> Confirm Purchase </button>

    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(state) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
