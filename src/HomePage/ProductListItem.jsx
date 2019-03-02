import React from 'react';

export default function ProductListItem(props) {
  return(
    <div>
      <h3>{ props.product.name }</h3>
      <p>{ props.product.price }</p>
      <p>{ props.product.description }</p>
    </div>
  )
}
