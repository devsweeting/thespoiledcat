import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './HomePage/Home';
import About from './AboutPage/About';
import styled from 'styled-components';


const HomeContainer = styled.section `
width: 100%;
display: flex;
margin-top: 150px;
justify-content: center;

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
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/about' component={ About } />
        </Switch>
      </HomeContainer>
    </React.Fragment>
  );
}

export default App;
