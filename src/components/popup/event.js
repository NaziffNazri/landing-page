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


import e1 from "../../assets/event/e1.jpg";
import e2 from "../../assets/event/e2.jpg";
import e3 from "../../assets/event/e3.jpg";
import e4 from "../../assets/event/e4.jpg";
import e5 from "../../assets/event/e5.jpg";
import e6 from "../../assets/event/e6.jpg";
import e7 from "../../assets/event/e7.jpg";
import e8 from "../../assets/event/e8.JPG";
import e9 from "../../assets/event/e9.JPG";
import e10 from "../../assets/event/e10.JPG";
import e11 from "../../assets/event/e11.jpg";
import e12 from "../../assets/event/e12.jpg";
import e13 from "../../assets/event/e13.jpg";

export default function Event({setOpenEvent}) {
 const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal staticBackdrop show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size='xl' >
          <MDBModalContent >
            <MDBModalHeader >
              <MDBModalTitle style={{marginLeft: '45%'}} className='text-uppercase fs-2 fw-bold '>Event</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setOpenEvent(false)}></MDBBtn>
            </MDBModalHeader>

            <MDBContainer style={{ maxWidth: '1000px' }} className='p-4'>
              
            <MDBModalBody className='text-center'>One of our specialist is a event photography, we have attended countless 
            event that orgranized by the corporate company or goverment.</MDBModalBody>

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
                  <img src={e4} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
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
                  <img src={e9} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
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