import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBBtn
} from 'mdb-react-ui-kit';

import bg1 from "../assets/hero/bg1.jpg";
import bg2 from "../assets/hero/bg2.jpg";
import bg3 from "../assets/hero/bg3.jpg";
import bg4 from "../assets/hero/bg4.jpg";
import bg5 from "../assets/hero/bg5.jpg";
import bg6 from "../assets/hero/bg6.jpg";
import nbg1 from "../assets/hero/nbg1.jpg";
import './hero.css'

export default function Hero() {
  return (

    
    // <MDBCarousel fade showIndicators >
    
    //   <MDBCarouselItem
    //     className='w-100 d-block '
    //     itemId={1}
    //     src={nbg1}
    //     alt='...'
    //   >       
    //   </MDBCarouselItem>

    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={2}
    //     src={bg2}
    //     alt='...'
    //   >
    //   </MDBCarouselItem>

    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={3}
    //     src={bg3}
    //     alt='...'
    //   >
    //   </MDBCarouselItem>

    //   <MDBCarouselItem
    //     className='w-100 d-block'
    //     itemId={6}
    //     src={bg6}
    //     alt='...'
    //   >
    //   </MDBCarouselItem>
    // </MDBCarousel>


  <div className='p-5 bg-image' id='hero' style={{ backgroundImage: `url(${nbg1})`, height: '800px' }}>

    <div className=' p-5 mt-5'>
      <div className='hero pt-1'>
      {/* <h1><span>Event</span>.<span>Graduation</span>.<span>Studio</span></h1>  */}
      <h1><span></span><span>Event</span><span></span></h1> 
      <h1><span></span><span>Graduation</span><span></span></h1>
      <h1><span></span><span>Studio</span><span></span></h1>
      </div>

      <div className='heroText pt-3'>      
      <div className='justify-content-center pt-3 pb-4' style={{maxWidth:'780px'}}>
      <h5><span></span><span>We provide the best solutions for photography sessions </span><span> with smoothly and efficiently for an affordable price</span></h5>
      </div>
      </div>
      <div className='pt-3'>
      <MDBBtn rounded size='lg' color='warning' href='#service' className='fs-5'>
        Our Service
      </MDBBtn>
      </div>
      </div>  
    </div>

  );
}