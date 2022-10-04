import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBContainer,
} from 'mdb-react-ui-kit';


import e1 from "../../assets/kindergartens/k1.JPG";
import e2 from "../../assets/kindergartens/k2.JPG";
import e3 from "../../assets/kindergartens/k3.JPG";
import e4 from "../../assets/kindergartens/k4.JPG";
import e5 from "../../assets/kindergartens/k5.JPG";
import e6 from "../../assets/kindergartens/k6.JPG";
import e7 from "../../assets/kindergartens/k7.JPG";
import e8 from "../../assets/kindergartens/k8.JPG";
import e9 from "../../assets/kindergartens/k9.JPG";
import e10 from "../../assets/kindergartens/k10.JPG";
import e11 from "../../assets/kindergartens/k11.JPG";
import e12 from "../../assets/kindergartens/k12.JPG";
import e13 from "../../assets/kindergartens/k13.JPG";

export default function Kindergarten({setOpenKindergarten}) {
 const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal staticBackdrop show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size='xl' >
          <MDBModalContent >
            <MDBModalHeader >
              <MDBModalTitle style={{marginLeft: '45%'}} className='text-uppercase fs-2 fw-bold '>Event</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setOpenKindergarten(false)}></MDBBtn>
            </MDBModalHeader>

            <MDBContainer style={{ maxWidth: '1000px' }} className='p-4'>
              
            <MDBModalBody className='text-center'>We offen attends Kindergartens event either to cover the event photoshoot or studio photoshoot.
            This is one of the most challenging event to work with kids but our crew is very professional 
             in term to deals with kids. </MDBModalBody>

            <div className='row pt-3 pb-5 '>
              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e1} className='w-100 rounded-4 hover-shadow img-thumbnail '/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e2} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>
 
              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e3} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e9} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e5} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e6} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e7} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e8} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e4} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e10} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e11} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e12} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={e13} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>


            </div>
            </MDBContainer>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}