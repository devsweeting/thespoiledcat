import React from 'react';
import styled from 'styled-components';
import constants from './../constants';
const { c } = constants;

const ProductItem = styled.section `
  border: black 1px solid;
  margin: 10px;
  width: 300px;
  padding: 10px 20px;
`;

const Image = styled.img `
  height: 40px;
`;

export default function ProductListItem(props) {

  return(
    <ProductItem>
      <Image src={ `/images/${props.product.image } `} alt={ props.product.image } />
      <h3>{ props.product.name }</h3>
      <p>{ props.product.price }</p>
      <p>{ props.product.description }</p>

      <button onClick={() => props.addToCart(props.product)} > Add to Cart({
          (props.cartItem && props.cartItem.quantity) ||  0
        })
      </button>

      {
        props.cartItem
        ?
        <button onClick={() => props.removeFromCart(props.cartItem)}> Remove </button>
        : null
      }

      // <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      //   <input type="hidden" name="cmd" value="_s-xclick"/>
      //   <input type="hidden" name="hosted_button_id" value={ props.product.paypalId }/>
      //   <table>
      //   <tr><td><input type="hidden" name="on0" value="Style"/>Style</td></tr><tr><td><select name="os0">
      //     <option value="Cheetah">Cheetah </option>
      //     <option value="Tuscan">Tuscan </option>
      //     <option value="Multi-colored">Multi-colored </option>
      //   </select> </td></tr>
      //   </table>
      //   <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
      //   <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
      // </form>
    </ProductItem>
  )
}
