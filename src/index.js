import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import cartReducer from './CartPage/CartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  initialState: null
});


const AppContainer = styled.section `
  width: 1000px;
  margin: 10px auto;
  background-color: white;
  padding: 10px 20px;
`;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() =>
  console.log(store.getState())
);


const app = <Provider store={ store }>
  <BrowserRouter>
    <AppContainer>
      <App />
    </AppContainer>
  </BrowserRouter>
</Provider>

ReactDOM.render(app, document.getElementById('root'));
