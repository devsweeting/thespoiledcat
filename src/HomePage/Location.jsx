import React from "react";
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const LocationWrapper = styled.section `
  border: 2px solid green;
  width: 100%;
  height: 400px;
  padding: 30px;
`;

function Location(props) {
  return(
    <LocationWrapper>
      <p>Location Working</p>
      <Grid container spacing={24}>
        <Grid item xs={8}>
          <Paper>
            map goes here
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <p>We sell at the Portland Saturday Market on Saturday and Sunday</p>
          </Paper>
        </Grid>
      </Grid>

    </LocationWrapper>
  )
}

export default Location
