import React from "react";
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Map from './GoogleMap';

const LocationWrapper = styled.section `
  width: 100%;
  height: auto;
  padding: 30px;
`;

const text = {
    fontSize: '14px',
    padding: '10%',
    fontWeight: 'light',
    textAlign: 'center',
    position: 'relative',
  }


function Location(props) {
  return(
    <LocationWrapper>
      <Paper>
      <Grid container spacing={24}>
        <Grid item xs={7}>
          <div style={text}>
            <p>We sell at the Portland Saturday Market on Saturday and Sunday</p>
            <p>Suspendisse potenti. Maecenas vitae nibh sed dolor aliquet pretium quis eu tortor. Duis urna turpis, ultricies non mi eu, varius sagittis purus. Aenean eu turpis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu mi mattis, auctor neque a, eleifend est. Duis efficitur venenatis diam, ultrices tincidunt magna tincidunt in. Pellentesque gravida molestie aliquet. Phasellus sit amet ex vel purus imperdiet vehicula. Nam convallis sed justo eget viverra. Phasellus sit amet pharetra elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tellus sem, mollis nec lectus non, hendrerit sagittis dui. Integer pharetra molestie augue et condimentum. Aliquam eget libero non elit dapibus mollis in ut dui.</p>
          </div>
        </Grid>
        <Grid item xs={5}>

            <Map />
        </Grid>
      </Grid>
    </Paper>

    </LocationWrapper>
  )
}

export default Location
