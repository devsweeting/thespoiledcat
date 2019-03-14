import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactWrapper = styled.section `
  width: 100%;
  margin-top: 30px;
  padding: 30px 30px;
  display: flex;
  align-items: center;
`;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
    color: 'black',
    fontSize: '16px',
    width: '700px'
  },
});

function ContactForm(props) {
  const { classes } = props;

  return(
    <ContactWrapper>
            <Paper className={classes.paper}>

              <h2> Contact Us: </h2>
              <Form action="https://formspree.io/devinsweeting@gmail.com" method="POST">
                <Row>
                  <Col>
                    <Form.Control name="First name" placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Control name="Last name" placeholder="Last name" />
                  </Col>
                </Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control name="_replyto" type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll reach out to you as quickly as possible
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Write us a love note below:</Form.Label>
                 <Form.Control name="message" as="textarea" rows="6" />
               </Form.Group>
                <Button variant="outline-info" type="submit" value="Send">
                  Submit
                </Button>
              </Form>

            </Paper>

    </ContactWrapper>
  )
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);
