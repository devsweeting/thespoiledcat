import React from "react";
import styled from 'styled-components';

const PaypalWrapper = styled.section `
  border: 2px solid green;
`;

function PaypalButton(props) {

  let selectedStyle = null
  if (props.multipleStyles = true) {
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
    <PaypalWrapper>
      <p>Paypal here</p>

      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value={ this.props.paypalId }/>
        {selectedStyle}
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
      </form>

    </PaypalWrapper>
  )
}

export default PaypalButton
