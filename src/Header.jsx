import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ cart }) => {
  return(
    <React.Fragment>
      <h1>The Spoiled Cat</h1>
      <Link to="/"> Home </Link> |
      <Link to='/about'> About Us </Link> |
      <Link to="/cart"> Cart  ({cart.reduce((acc, item) => {
          return acc + item.quantity
      }, 0 )})</Link>
    </React.Fragment>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Header);
