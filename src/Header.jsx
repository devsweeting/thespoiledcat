import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return(
    <React.Fragment>
      <h1>The Spoiled Cat</h1>
      <Link to="/"> Home </Link> | <Link to='/about'> About Us </Link> | <Link to="/cart"> Cart</Link>
    </React.Fragment>
  )
}

export default Header
