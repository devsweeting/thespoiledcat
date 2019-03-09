import constants from '../constants';
const { types } = constants;

const ordersReducer = (state=[], action) => {
  switch(action.type) {
    case 'ADD_ORDER':
     // return addToOrderList(state, action.payload)
      const newOrder = Object.assign({}, state, {
        [action.id]: {
          firstName: action.firstName,
          lastName: action.lastName,
          address: action.address,
          city: action.city,
          state: action.state,
          email: action.email,
        }
      })
    default:
      return state;
  }
}

export default ordersReducer;
