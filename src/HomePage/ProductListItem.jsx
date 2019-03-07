import React from 'react';
import styled from 'styled-components';

const ProductItem = styled.section `
  border: black 1px solid;
  margin: 10px;
  width: 300px;
  padding: 10px 20px;
`;

const Image = styled.img `
  height: 30px;
`;

export default function ProductListItem(props) {

  const thisItemInCart = props.cart.filter(item => item.id === props.product.id)[0]

  return(
    <ProductItem>
      <Image src={ `/images/${props.product.image } `} alt={ props.product.image } />
      <h3>{ props.product.name }</h3>
      <p>{ props.product.price }</p>
      <p>{ props.product.description }</p>

      <button onClick={() => props.addToCart(props.product)} > Add to Cart({
          (thisItemInCart && thisItemInCart.quantity) ||  0
        })
      </button>
    </ProductItem>
  )
}
