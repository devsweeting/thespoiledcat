import React from "react";
import { connect } from 'react-redux';
import constants from './../constants';
const { c } = constants;

function sort(items) {
  return items.sort(function(a, b) {return a.id - b.id})
}

function CartTable(props) {
  return <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th> Id </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          sort(props.cart).map(item => <tr>
            <td>{ item.name }</td>
            <td>{ item.quantity }</td>
            <td>{ item.id }</td>
            <td><button onClick={() => props.addToCart(item)}> + </button></td>
            <td><button onClick={() => props.removeFromCart(item)}> - </button></td>
            <td><button onClick={() => props.eraseCart(item)}>Remove All</button></td>
          </tr>)
        }
      </tbody>
    </table>
}

function mapStateToProps(state) {
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
      dispatch({ type: 'REMOVE', payload: item})
    },
    eraseCart: (item) => {
      dispatch({ type: 'ERASE', payload: item})
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
