import React from "react";
import styled from 'styled-components';

const Wrapper = styled.section `
  border: 2px solid yellow;
  min-height: 100px;
  height: 11%;
`;

const Text = styled.p`
  font-size: 14px;
  padding: 10px 20px;
  text-align: center;
`;

const ProductButton = styled.button`
  background-color: tomato;
  padding: 8px;
`;

function About() {
  return(
    <Wrapper>
      <Text>Our company is based on the belief that our customers cats needs are of the utmost importance. Our entire team is committed to meeting those needs. As a result, a high percentage of our business is from repeat customers and referrals. We sell to our customers directly, and also wholesale to fabulous pet stores nation-wide. We work hard to grow the best Catnip we can, and so do our friends, who help us grow. We produce human-grade Organic Catnip, which means that we sift out the poisonous seeds.  We do make refillable cat toys, but the original design is built to smell good to your cats for about a year, making it a great buy! We would welcome the opportunity to earn your trust and deliver you the best service in the industry. We manufacture the best catnip toys on the market.</Text>

      <Text> We sell at the Portland Saturday Market on Saturday and Sunday</Text>

      <ProductButton> See Our Products </ProductButton>

    </Wrapper>
  )
}

export default About
