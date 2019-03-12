import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import checkout from './HomePage/images/checkoutcart.svg'

const NavWrapper = styled.section `
  height: 90px;
  width: 100%;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);

  opacity: .9;
  position: fixed;
  top: 0;
  color: white;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;

  @media (max-width: 768px) {
     background-color: red;
     height: 80px;
     width: 100%;
   }
`;


const Title = styled.h1 `
 font-size: 50px;
 padding-top: 20px;
 @import url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');
 font-family: 'Gloria Hallelujah', cursive;

 @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const NavLinks = styled.section `
display: flex;
justify-content: space-around;
float: right;
`;

const StyledRoute = styled.section `
  text
`;




class Header extends React.Component {
  state = {
    auth: false,
    slide: 0,  // How much should the Navbar slide up or down
    lastScrollY: 0,  // Keep track of current position in state
  };

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
   const { lastScrollY } = this.state;
   const currentScrollY = window.scrollY;


   if (currentScrollY > lastScrollY) {
     this.setState({ slide: '-120px' });
   } else {
     this.setState({ slide: '0px' });
   }
   this.setState({ lastScrollY: currentScrollY });
 };


  render() {

    return(
      <NavWrapper style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: 'transform 90ms linear',
        }}
      >
        <Title>the Spoiled Cat</Title>
        <NavLinks>
          <StyledRoute>
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIG1QYJKoZIhvcNAQcEoIIGxjCCBsICAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYANLpUFt86QT+eQYDFmCRsKnR3hkaESPqd/FT07aiiJDzPe/b8ndQl3wzjeyP9DEIZYIB02JUKterckgrZhDBEUKa+ls7dmumJmOp/zNexvPejSbmWtZ47VIG31tlYtM+v9dvCPMR0GG3VaJdrQljqE7I4HBbSP8AoOWeZkc/B5mDELMAkGBSsOAwIaBQAwUwYJKoZIhvcNAQcBMBQGCCqGSIb3DQMHBAhWrMdPCsn4joAwXjJr0RjXcZWxwm1DG5p1wEJCZUOajVd5bX1XyM9YiBylSLxNkas0BbWDDTME3wIUoIIDhzCCA4MwggLsoAMCAQICAQAwDQYJKoZIhvcNAQEFBQAwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMB4XDTA0MDIxMzEwMTMxNVoXDTM1MDIxMzEwMTMxNVowgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBR07d/ETMS1ycjtkpkvjXZe9k+6CieLuLsPumsJ7QC1odNz3sJiCbs2wC0nLE0uLGaEtXynIgRqIddYCHx88pb5HTXv4SZeuv0Rqq4+axW9PLAAATU8w04qqjaSXgbGLP3NmohqM6bV9kZZwZLR/klDaQGo1u9uDb9lr4Yn+rBQIDAQABo4HuMIHrMB0GA1UdDgQWBBSWn3y7xm8XvVk/UtcKG+wQ1mSUazCBuwYDVR0jBIGzMIGwgBSWn3y7xm8XvVk/UtcKG+wQ1mSUa6GBlKSBkTCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb22CAQAwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOBgQCBXzpWmoBa5e9fo6ujionW1hUhPkOBakTr3YCDjbYfvJEiv/2P+IobhOGJr85+XHhN0v4gUkEDI8r2/rNk1m0GA8HKddvTjyGw/XqXa+LSTlDYkqI8OwR8GEYj4efEtcRpRYBxV8KxAW93YDWzFGvruKnnLbDAF6VR5w/cCMn5hzGCAZowggGWAgEBMIGUMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTkwMzEyMjEyMTA5WjAjBgkqhkiG9w0BCQQxFgQUz1i06GHMk0liyX4ZXnJkMDAikWcwDQYJKoZIhvcNAQEBBQAEgYA0U9QPKB3xwcjs6WHjWLfdYI+TQZTnxKvaJm506XD75dtrqcxIIB4t7YBOLwlSqnFO/saFzssbgpx3BttcCaLS21GNQTLCo89/2TnNIcd5T8nXprUugEeaEW7QdBeSREeeas4X3RvWrve3JyqHyvOxkP6wvJ45tLZr2KWbuqwY0w==-----END PKCS7-----"/>
              <input type="image" src={ checkout } height="50px" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
            </form>

          </StyledRoute>
        </NavLinks>
      </NavWrapper>
    )
  }
}

export default Header;
