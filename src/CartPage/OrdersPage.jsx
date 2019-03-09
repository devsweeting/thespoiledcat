import React from 'react'
import Order from './Order';

export default function OrdersPage(props) {
  return
  <div>
    <h2>My Order</h2>
    <Order id={props.match.params.id}/>
  </div>
}
