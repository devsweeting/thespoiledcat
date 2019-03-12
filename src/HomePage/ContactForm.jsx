import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const ContactWrapper = styled.section `
  border: 2px solid green;
  width: 100%;
  margin-top: 30px;
  padding: 30px 30px;
`;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function ContactForm(props) {
  const { classes } = props;

  return(
    <ContactWrapper>
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={7}>
            <Paper className={classes.paper}>We sell at the Portland Saturday Market on Saturday and Sunday</Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
        </Grid>
      </div>

    </ContactWrapper>
  )
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);
