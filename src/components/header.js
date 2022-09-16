import React, { useState } from 'react';
import image from "../assets/logo.png";
import imageBg from "../assets/a3.JPG";

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  function sayHello() {
    alert('Hello!');
    console.log(
      "HEYYY"
    )
  }


  return (
    <header>


      <MDBNavbar expand='lg' light bgColor='white' fixed>
        <MDBContainer>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>

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
              <MDBNavbarLink href='#service'>Service</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#about'>About Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>

        </MDBContainer>
      </MDBNavbar>




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
    </header>
  );
}