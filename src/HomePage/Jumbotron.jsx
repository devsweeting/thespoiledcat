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
  text-align: center;
`;

const BackgroundFade = styled.section `
  height: 100%;
  background-color: #166d3b;
  background-image: linear-gradient(147deg, #166d3b 0%, #000000 74%);
  opacity: .9;
  margin: 0;
`;

const TitleWrapper = styled.section `
  position: relative;
  top: 50%;
`;

const Title = styled.h1 `
  color: white;
  margin: 0;
`;

const SubHeader = styled.p `
  color: white;
`;

function Jumbotron(props) {
  return(
    <JumbotronWrapper>
      <BackgroundFade>
        <TitleWrapper>
          <Title>the Spoiled Cat</Title>
          <SubHeader> Oregon #1 Gourmet Cat Products </SubHeader>
        </TitleWrapper>
      </BackgroundFade>


    </JumbotronWrapper>
  )
}

export default Jumbotron
