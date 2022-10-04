import React, { useState } from 'react';
import service1 from "../assets/s1.jpg";
import service2 from "../assets/s2.jpg";
import service3 from "../assets/s3.jpg";
import service4 from "../assets/s4.jpg";
import service5 from "../assets/s5.jpg";
import service6 from "../assets/s6.jpg";

import Convo from './popup/convo';
import Studio from './popup/studio';
import Event from './popup/event';
import Ceremony from './popup/ceremony';
import Kindergarten from './popup/kindergarten';
import Album from './popup/album';

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

    const [openConvo, setOpenConvo] = useState(false);
    const [openStudio, setOpenStudio] = useState(false);
    const [openEvent, setOpenEvent] = useState(false);
    const [openCeremony, setOpenCeremony] = useState(false);
    const [openKindergarten, setOpenKindergarten] = useState(false);
    const [openAlbum, setOpenAlbum] = useState(false);

    return (
        <div className='bg-white' id='service'>
            <div className='container'>
            {/* <Convo displayModal={optXlModal2} /> */}
            
            <div className='d-flex justify-content-center align-items-center h-100 p-5 '>
                <div MDBContainer style={{ maxWidth: '1000px' }} >
                    <div class="text-center " >
                        <h1 class="mt-3 " style={{ fontSize: '60px' }}>Our Services</h1>
                        <h5 class="mb-7 mt-4 display-4" style={{ fontSize: '20px' }}>We have been in the creative industry for 8 years now so we know the difficulties you face when you kickstart
                            a big project. We have been there, we know the stress of the situation, the uncertainties related to the environment, the exhaustion caused by the process</h5>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-4 col-sm-6 mb-7">

                    <MDBCard >
                        <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' onClick={() => {setOpenConvo(true)}} style={{cursor:'pointer'}}>                
                            <MDBCardImage className='w-100' href='#' src={service1} fluid alt='...' />
                            <a><div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div></a>
                        </MDBRipple>
                        <MDBCardBody > 
                        {openConvo && <Convo setOpenConvo = {setOpenConvo} />}                    
                            <MDBCardTitle class="text-center mb-2 warn fs-2" background='warning' >Convocations</MDBCardTitle>
                        </MDBCardBody>
                        
                    </MDBCard>

                    {/* <div rippleColor='dark' rippleTag='div' className='bg-image hover-zoom hover-shadow rounded-6'>
                    <img onClick={() => {setOpenConvo(true)}} src={service1} className='w-100'alt='Alternative text shadow fluid'/>
                    {openConvo && <Convo setOpenConvo = {setOpenConvo} />}
                    <div
                    className='mask'
                    style={{
                    background: 'linear-gradient(to bottom, hsla(0, 0%, 0%, 0) 50%, hsla(0, 0%, 0%, 0.5))',
                    }}>
                    <div className='bottom-0 d-flex align-items-end h-100 text-center justify-content-center'>
                    <div>
                        <h2 className='fw-bold text-white mb-4'>CONVOCATIONS</h2>
                    </div>
                    
                    </div>
                </div>
                    </div>   */}

                </div>



                <div class="col-lg-4 col-sm-6 mb-7">

                    <MDBCard >
                        <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' onClick={() => {setOpenStudio(true)}} style={{cursor:'pointer'}}>
                            <MDBCardImage className='w-100' src={service2} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                        {openStudio && <Studio setOpenStudio = {setOpenStudio} />} 
                            <MDBCardTitle class="text-center mb-2 warn fs-2" >Studio</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                </div>

                <div class="col-lg-4 col-sm-6 mb-7">

                    <MDBCard>
                    <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' onClick={() => {setOpenEvent(true)}} style={{cursor:'pointer'}}>
                            <MDBCardImage className='w-100' href='#' src={service5} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                        {openEvent && <Event setOpenEvent = {setOpenEvent} />} 
                            <MDBCardTitle class="text-center mb-2 warn fs-2" >Event</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                </div>

                <div class="col-lg-4 col-sm-6 mb-7">

                    <MDBCard >
                    <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' onClick={() => {setOpenCeremony(true)}} style={{cursor:'pointer'}}>
                            <MDBCardImage className='w-100' src={service4} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                        {openCeremony && <Ceremony setOpenCeremony = {setOpenCeremony} />} 
                        <MDBCardTitle class="text-center mb-2 warn fs-2" >Ceremony</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                </div>

                <div class="col-lg-4 col-sm-6 mb-7">

                    <MDBCard >
                    <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' onClick={() => {setOpenKindergarten(true)}} style={{cursor:'pointer'}}>
                            <MDBCardImage className='w-100' href='#' src={service6} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                        {openKindergarten && <Kindergarten setOpenKindergarten = {setOpenKindergarten} />} 
                        <MDBCardTitle class="text-center mb-2 warn fs-2" >Kindergartens</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                </div>

                <div class="col-lg-4 col-sm-6 mb-7">

                    <MDBCard>
                    <MDBRipple rippleColor='dark' rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow' onClick={() => {setOpenAlbum(true)}} style={{cursor:'pointer'}}>
                            <MDBCardImage className='w-100' src={service3} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                        {openAlbum && <Album setOpenAlbum = {setOpenAlbum} />} 
                        <MDBCardTitle class="text-center mb-2 warn fs-2" >Photo Album</MDBCardTitle>
                        </MDBCardBody>
                    </MDBCard>

                </div>


            </div>
            </div>
        </div>


    );
}