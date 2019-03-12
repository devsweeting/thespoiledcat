import React from "react";
import styled from 'styled-components';
import nakedCat from './images/naked-cat.jpeg';
import kittyRoar from './images/KittyRoar2.jpeg';
import wienerDog from './images/wiener-dog.jpeg';
import sleepyCat from './images/sleepy-cat.jpeg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";


const Wrapper = styled.section `
  // border: 2px solid grey;
`;


class CarouselJumbo extends React.Component {
  render() {
  return(
    <Wrapper>
      <MDBContainer>
         <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
           <MDBCarouselInner>
             <MDBCarouselItem itemId="1">
               <MDBView>
                 <img className="d-block w-100" src={ nakedCat } alt="First slide" />
                 <MDBMask overlay="black-light" />
               </MDBView>
               <MDBCarouselCaption>
                 <h1 className="h1-responsive">the Spoiled Cat</h1>
                 <p>First text</p>
               </MDBCarouselCaption>
             </MDBCarouselItem>
             <MDBCarouselItem itemId="2">
               <MDBView>
                 <img className="d-block w-100" src={ kittyRoar } alt="Second slide" />
                 <MDBMask overlay="black-strong" />
               </MDBView>
               <MDBCarouselCaption>
                 <h1 className="h1-responsive">the Spoiled Cat</h1>
                 <p>Second text</p>
               </MDBCarouselCaption>
             </MDBCarouselItem>
             <MDBCarouselItem itemId="3">
               <MDBView>
                 <img className="d-block w-100" src={ wienerDog } alt="Third slide" />
                 <MDBMask overlay="black-slight" />
               </MDBView>
               <MDBCarouselCaption>
                 <h1 className="h1-responsive">the Spoiled Cat</h1>
                 <p>Third text</p>
               </MDBCarouselCaption>
             </MDBCarouselItem>
             <MDBCarouselItem itemId="4">
               <MDBView>
                 <img className="d-block w-100" src={ sleepyCat } alt="Mattonit's item" />
                 <MDBMask overlay="black-light" />
               </MDBView>
               <MDBCarouselCaption>
                 <h1 className="h1-responsive">the Spoiled Cat</h1>
                 <p>Taken june 21th by @mattonit</p>
               </MDBCarouselCaption>
             </MDBCarouselItem>
           </MDBCarouselInner>
         </MDBCarousel>
       </MDBContainer>



    </Wrapper>
  )
}
}

export default CarouselJumbo;
