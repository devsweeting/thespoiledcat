import React from "react";
import styled from 'styled-components';



const LocationWrapper = styled.section `
  border: 2px solid green;
  width: 100%:
`;

function Location(props) {
  return(
    <LocationWrapper>
      <p>Location Working</p>
    </LocationWrapper>
  )
}

export default Location