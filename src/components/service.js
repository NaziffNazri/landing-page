import React, { useState } from 'react';
import service1 from "../assets/s1.jpg";
import service2 from "../assets/s2.jpg";
import service3 from "../assets/s3.jpg";
import service4 from "../assets/s4.jpg";
import service5 from "../assets/s5.jpg";
import service6 from "../assets/s6.jpg";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBContainer 
  } from 'mdb-react-ui-kit';



export default function Service() {
    return (
        <div className='bg-white pb-5 container'>      
            <div className='d-flex justify-content-center align-items-center h-100 p-5'>
            <div MDBContainer style={{maxWidth: '1000px'}} >
            <div class="text-center " >
                <h1 class="mt-3 " style={{fontSize:'60px'}}>Our Services</h1> 
                <h5 class="mb-7 mt-4 display-4" style={{fontSize:'20px'}}>We have been in the creative industry for 8 years now so we know the difficulties you face when you kickstart 
                a big project. We have been there, we know the stress of the situation, the uncertainties related to the environment, the exhaustion caused by the process</h5>
            </div>
            </div>
            </div>
                
            <div class="row">
                
            <div class="col-lg-4 col-sm-6 mb-7">
            <MDBContainer style={{maxWidth: '500px'}} >
            <MDBCard>
                <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' >
                    <MDBCardImage className='w-100' href='#' src={service1} fluid alt='...'/>
                    <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody >
                    <MDBCardTitle class="text-center mb-3 warn" background='warning' style={{fontSize:'28px'}}>Convocations</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard> 
                </MDBContainer>
                </div>

                

            <div class="col-lg-4 col-sm-6 mb-7">
            <MDBContainer style={{maxWidth: '500px'}}>
            <MDBCard>
                <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' >
                    <MDBCardImage className='w-100' src={service2} fluid alt='...' />
                    <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle class="text-center mb-3" style={{fontSize:'28px'}}>Studio</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard> 
                </MDBContainer>
                </div>

            <div class="col-lg-4 col-sm-6 mb-7">
            <MDBContainer style={{maxWidth: '500px'}} >
            <MDBCard>
                <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' >
                    <MDBCardImage className='w-100' href='#' src={service5} fluid alt='...'/>
                    <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle class="text-center mb-3" style={{fontSize:'28px'}}>Event</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard> 
                </MDBContainer>
                </div>

            <div class="col-lg-4 col-sm-6 mb-7">
            <MDBContainer style={{maxWidth: '500px'}}>
            <MDBCard>
                <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' >
                    <MDBCardImage className='w-100' src={service4} fluid alt='...' />
                    <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle class="text-center mb-3" style={{fontSize:'28px'}}>Istiadat</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard> 
                </MDBContainer>
                </div>

                <div class="col-lg-4 col-sm-6 mb-7">
            <MDBContainer style={{maxWidth: '500px'}} >
            <MDBCard>
                <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' >
                    <MDBCardImage  className='w-100' href='#' src={service6} fluid alt='...'/>
                    <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle class="text-center mb-3" style={{fontSize:'28px'}}>Kindergartens</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard> 
                </MDBContainer>
                </div>

            <div class="col-lg-4 col-sm-6 mb-7">
            <MDBContainer style={{maxWidth: '500px'}}>
            <MDBCard>
                <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' >
                    <MDBCardImage className='w-100' src={service3} fluid alt='...' />
                    <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle class="text-center mb-3" style={{fontSize:'28px'}}>Photo Album</MDBCardTitle>
                    <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                </MDBCardBody>
                </MDBCard> 
                </MDBContainer>
                </div>


            </div>   
        </div> 

      
    );
  }