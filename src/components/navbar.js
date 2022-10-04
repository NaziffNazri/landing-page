import React, { useState } from 'react';
import image from "../assets/logo.png";
import logo from "../assets/logoNew.png";


import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,

} from 'mdb-react-ui-kit';

export default function Navbar() {

  //chnage nav color
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 450) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <header >
      <MDBNavbar bgColor={color ? 'light' : 'transparent'} expand='xl' fixed='top' dark={!color} light={color} >

        <MDBContainer>
          <MDBNavbarBrand href='#' active>
            <img
              src={logo}
              height='40'
              alt='sdphoto'
              loading='lazy'
            />
          </MDBNavbarBrand>


          <MDBNavbarNav className="justify-content-end p-1 fs-5 "  >

            <MDBNavbarItem className='pe-4' >
              <MDBNavbarLink href='#'>Home</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='pe-4'>
              <MDBNavbarLink href='#service'>Service</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='pe-4'>
              <MDBNavbarLink href='#about'>About</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className=''>
              <MDBNavbarLink href='#contact'>Contact</MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>

        </MDBContainer>
      </MDBNavbar>

    </header >
  );
}