const cartReducer = (state=[], action) => {
  let firstMatchIndex;
  switch(action.type) {
    case 'ADD':
     return [...state, action.payload]

    case 'REMOVE':
     firstMatchIndex = state.indexO(action.payload)
     return state.filter((item, index) => index !== firstMatchIndex)

    default:
      return state;
  }
}

export default cartReducer;
