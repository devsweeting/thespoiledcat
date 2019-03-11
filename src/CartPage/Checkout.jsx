import React from "react";
import { connect } from 'react-redux'
import constants from './../constants';
const { c } = constants;

function CheckoutForm(props) {
  let _firstName = null;
  let _lastName = null;
  let _address = null;
  let _state = null;
  let _city = null;
  let _email = null;

  function addOrder() {

  }

  function handleNewOrderSubmission(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: "ADD_ORDER",
      firstName: _firstName.value ,
      lastName: _lastName.value,
      address: _address.value,
      city: _city.value,
      state: _state.value,
      email: _email.value,
    };
    dispatch(action);
    dispatch(addOrder(_firstName.value, _lastName.value, _address.value, _city.value, _state.value, _email.value));
    _firstName.value = '';
    _lastName.value = '';
    _address.value = '';
    _city.value = '';
    _state.value = '';
    _email.value = '';
  }

  return(
    <React.Fragment>
      <h2> Checkout </h2>
        <form onSubmit={handleNewOrderSubmission}>
          <input
            type='text'
            id='firstname'
            placeholder='First Name'
            ref={(input) => {_firstName = input;}}/>
          <input
            type='text'
            id='LastName'
            placeholder='LastName'
            ref={(input) => {_lastName = input;}}/>
          <input
            type='text'
            id='address'
            placeholder='address'
            ref={(input) => {_address = input;}}/>
          <input
            type='text'
            id='city'
            placeholder='city'
            ref={(input) => {_city = input;}}/>
          <input
            type='text'
            id='state'
            placeholder='state'
            ref={(input) => {_state = input;}}/>
          <input
            type='email'
            id='email'
            placeholder='email'
            ref={(input) => {_email = input;}}/>
          <button type='submit'>Purchase!</button>
        </form>
    </React.Fragment>
  )
}


export default CheckoutForm
