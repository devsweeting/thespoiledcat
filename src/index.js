import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import cartReducer from './CartPage/CartReducer';
import persistDataLocally from './middleware/persist-data-locally';

const rootReducer = combineReducers({
  cart: cartReducer,
  initialState: null
});

let retrievedState;
try {
  retrievedState = localStorage.getItem('reduxStore');
  if (retrievedState === null) {
    retrievedState = {};
  }
  retrievedState = JSON.parse(retrievedState);
} catch (err) {
  retrievedState = {};
}
// Paste in createStore to use redux tools
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const AppContainer = styled.section `
  width: 1000px;
  margin: 10px auto;
  background-color: white;
  padding: 10px 20px;
`;

const store = createStore(
  rootReducer,
  retrievedState,
  composeEnhancer(applyMiddleware(persistDataLocally))
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
