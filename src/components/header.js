import React, { useState } from 'react';
import image from "../assets/logo.png";
import imageBg from "../assets/a3.JPG";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBContainer,
  MDBBtn,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);


  function sayHello() {
    alert('Hello!');
    console.log(
      "HEYYY"
    )
  }


  return (
    <header>
      <MDBNavbar expand='lg' light bgColor='white' sticky>
        <MDBContainer >

          <MDBNavbarBrand href='#home' active>
            <img
              src={image}
              height='40'
              alt='sdphoto'
              loading='lazy'
            />
          </MDBNavbarBrand>

          <MDBNavbarNav className="justify-content-end">

            <MDBNavbarItem>
              
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/about'>About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>

        </MDBContainer>
      </MDBNavbar>




      {/* Carousel Background */}

      <div
        className='p-5 text-center bg-image mx-auto d-block"'
        style={{ backgroundImage: `url(${imageBg})`, height: '720px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>

          <div className='d-flex justify-content-center align-items-center h-100 '>
            <div MDBContainer breakpoint="sm" style={{ maxWidth: '780px' }}>
              <div className='text-white'>
                <h1 className='mb-3'>Event . Graduation . Studio</h1>
                <h5 className='mb-3 p-2'>We provide the best solutions for photography sessions with smoothly and efficiently for an affordable price.</h5>
                <MDBBtn className='light' color='warning' size='lg' onClick={sayHello}>
                  Our Services
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <MDBCarousel showControls fade>
        
        <MDBCarouselItem 
          className='d-block mx-auto text-center bg-image w-100'
          itemId={1}
          src={imageBg}
          style={{ height: '720px' }}
        />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='https://mdbootstrap.com/img/new/slides/042.jpg'
          alt='...'
        />
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='https://mdbootstrap.com/img/new/slides/043.jpg'
          alt='...'
        />

        
      </MDBCarousel> */}
      
    </header>
  );
}