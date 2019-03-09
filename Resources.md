filter()[0] to return only the first item or undefined <-- in productlist

--------------Alternate Checkout with redux form ----------------------
import React from "react";
import { connect } from 'react-redux'
import constants from './../constants';
import { Field, reduxForm } from 'redux-form';
const { c } = constants;

function CheckoutForm(props) {
  const { handleSubmit } = props

  return(
    <React.Fragment>
      <h2> Checkout </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]">Your Name:</label>
          <Field name="order[name]" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="order[email]">Email:</label>
          <Field name="order[email]" component="input" type="email"/>
        </div>
        <div>
          <button type="submit"> Submit Order </button>
        </div>

      </form>
    </React.Fragment>
  )
}

CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm)


export default CheckoutForm
------------------------------------
