import React from "react";
import styled from 'styled-components';

const JumbotronWrapper = styled.section `
  height: 600px;
  background-image: url('https://images.unsplash.com/photo-1475518112798-86ae358241eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80');
  border: 2px solid green;
  background-color: black;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
`;

function Jumbotron(props) {
  return(
    <JumbotronWrapper>
      <p>Jumbotron here</p>


    </JumbotronWrapper>
  )
}

export default Jumbotron
