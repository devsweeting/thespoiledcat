import React from 'react';
import styled from 'styled-components';
import {Card, CardTitle} from 'react-materialize';
import addToCart from './images/AddToCart.svg';

const ProductItem = styled.section `
  width: 300px;
  margin: 30px;
  z-index: 0;
`;

const imgStyle = {
  border: '1px solid pink',
  backgroundColor: '#b3cdd1',
  backgroundImage: 'linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)'
};

const CartImg = styled.section `
  float: right;
`;

const CartText = styled.p `
  text-align: justify;
  font-weight: bold;
`;

const ProductText = styled.p `
  font-weight: bold;
  font-size: 20px;
`;



export default function ProductListItem(props) {
let selectedStyle = null
if (props.product.multipleStyles = true) {
  selectedStyle =
  <table>
  <tr><td><input type="hidden" name="on0" value="Styles"/>Styles</td></tr><tr><td><select name="os0">
    <option value="Cheetah">Cheetah </option>
    <option value="Tuscan">Tuscan </option>
    <option value="Multi-colored">Multi-colored </option>
  </select> </td></tr>
  </table>
}
  return(

    <ProductItem>
      <Card style={imgStyle} header={<CardTitle reveal image={ `/images/${props.product.image } `} waves='light'/>}
          title={ props.product.name }
          reveal={ props.product.description }>
          <ProductText>${ props.product.price }</ProductText>
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick"/>
            <input type="hidden" name="hosted_button_id" value={ props.product.paypalId }/>
            <table>
              <tr><td><input type="hidden" name="on0" value="Styles"/>Styles</td></tr><tr><td><select name="os0">
                <option value="Cheetah">Cheetah </option>
                <option value="Tuscan">Tuscan </option>
                <option value="Multi-colored">Multi-colored </option>
              </select> </td></tr>
            </table>
            <CartImg>
              <input type="image" src={ addToCart } height="40px" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
              <CartText>Add to Cart</CartText>
            </CartImg>
          </form>
      </Card>
    </ProductItem>
  )
}
