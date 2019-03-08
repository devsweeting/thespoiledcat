import React from "react";
import { connect } from 'react-redux'


function Checkout(props) {
  return(
    <React.Fragment>
      <h2> Checkout </h2>
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
