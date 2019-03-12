import React from "react";
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link, animateScroll as scroll } from "react-scroll";

const Wrapper = styled.section `
  // border: 2px solid yellow;
  min-height: 100px;
  height: 11%;
  margin-top: 45px;
`;

const Text = styled.p`
  font-size: 14px;
  padding: 10px 20px;
  text-align: center;
`;

const ProductWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const ProductButton = styled.button`
  background-color: tomato;
  padding: 8px;
`;

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '40px',
    paddingBottom: '40px',
  },
});

function About(props) {
  const { classes } = props;

  return(
    <Wrapper>
      <Paper className={classes.root} elevation={1}>
      <Text>Our company is based on the belief that our customers cats needs are of the utmost importance. Our entire team is committed to meeting those needs. As a result, a high percentage of our business is from repeat customers and referrals. We sell to our customers directly, and also wholesale to fabulous pet stores nation-wide. We work hard to grow the best Catnip we can, and so do our friends, who help us grow. We produce human-grade Organic Catnip, which means that we sift out the poisonous seeds.  We do make refillable cat toys, but the original design is built to smell good to your cats for about a year, making it a great buy! We would welcome the opportunity to earn your trust and deliver you the best service in the industry. We manufacture the best catnip toys on the market.</Text>

      <Text> We sell at the Portland Saturday Market on Saturday and Sunday</Text>

      <ProductWrapper>
        <Link
          activeClass="active"
          to="reviews"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
        >
          <Button variant="outline-info">See Our Products</Button>
        </Link>
      </ProductWrapper>
      </Paper>
    </Wrapper>
  )
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About)
