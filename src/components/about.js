import React, { useState } from 'react';
import about1 from "../assets/a1.JPG";
import about2 from "../assets/a2.jpg";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

  export default function About() {
    return (

    <div className='bg-white pb-5 ' id='about' >      
    <div className='d-flex justify-content-center align-items-center h-100 p-5'>
    <div MDBContainer style={{maxWidth: '1000px'}} >
            <div class="text-center " >
                <h1 class="mt-3" style={{fontSize:'60px'}} >About Us</h1> 
                <h5 class=" mt-4 display-4" style={{ fontSize: '20px' }}>This is our story how we start</h5>
            </div>
            </div>         
    </div>

    <div class="container pt-4 pb-5 ">
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-6 me-n5 ms-5">
                    <img src={about1} class="w-100 shadow-4-strong rounded-6 "   />
                  </div>
                  <div class="col-lg-6">
                    <div class="p-5 mt-0">
                    <MDBCard className='ms-n5 p-4'background='transparent' >
                      <MDBCardBody >
                        <MDBCardTitle class="display-6 ms-4">Our Story</MDBCardTitle>
                        <MDBCardText className='mb-0 lead ms-4'>
                        Photo Studio is one of Malaysia’s largest and diversified video and photoshoot studio rental holding company in Malaysia.
                            All our studios have been renovated to offer you with the best possible environment for shooting. You will find there Luxury offices and meeting rooms all the way to sound prove infinity wall studios with backdrops.
                            Even though our photoshoot studio business branch in cantonent exchange is new, we have been serving our customers with offices.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                        {/* <h1 class="display-6">Our Story</h1>
                        
                        <p class="lead">Photo Studio is one of Malaysia’s largest and diversified video and photoshoot studio rental holding company in Malaysia.
                            All our studios have been renovated to offer you with the best possible environment for shooting. You will find there Luxury offices and meeting rooms all the way to sound prove infinity wall studios with backdrops.
                            Even though our photoshoot studio business branch in cantonent exchange is new, we have been serving our customers with offices.                                                       
                             </p>                        */}
                      </div>
                  </div>
              </div>

              <div class="container">
                <div class=" row d-flex justify-content-center">
                  
                  <div class="col-lg-6 ">
                    <div class=" ">
                    <MDBCard className='p-4 me-n5 'background='transparent' >
                      <MDBCardBody >
                        <MDBCardTitle class="display-6 ms-1">Our Story</MDBCardTitle>
                        <MDBCardText className='mb-0 lead ms-1'>
                        No more struggle to find the ideal location to shoot, no more ridiculously high costs to rent equipment, no more squeeze in in small rooms!
                            We help you to achieve a shooting that will be smooth, efficient and even enjoyable with high speed internet and free coffee. We have been there; we have done shooting days that seem never ending and draining.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                        
                      </div>
                  </div>

                  <div class="col-lg-6 ms-n2  pt-5">
                    <img src={about2} class="w-100 shadow-4-strong  rounded-6"  />
                  </div>
              </div>
        </div>
    </div>
    </div>
    );
  }