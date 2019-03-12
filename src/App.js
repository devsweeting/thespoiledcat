import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './HomePage/Home';
import styled from 'styled-components';

const HomeContainer = styled.section `
width: 100%;
display: flex;
margin-top: 90px;
justify-content: center;
// border: 2px solid red;
max-width: 1191px;

@media (max-width: 768px) {
   width: 100%
   margin-left: 0;
 }
`;


function App(){
  return (
    <React.Fragment>
      <Header />
      <HomeContainer>
        <Home />
      </HomeContainer>
    </React.Fragment>
  );
}

export default App;
