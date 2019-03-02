import React from "react";

function ProductItem() {
  return(
    <div>
      <h3>{ props.name }</h3>
      <h5>{ props.price }</h5>
      <p>{ props.image }</p>
      <p>{ props.description }</p>
    </div>
  )
}

export default ProductItem
