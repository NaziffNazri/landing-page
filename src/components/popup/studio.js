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


import s1 from "../../assets/studio/s1.jpg";
import s2 from "../../assets/studio/s2.jpg";
import s3 from "../../assets/studio/s3.jpg";
import s4 from "../../assets/studio/s4.jpg";
import s5 from "../../assets/studio/s5.jpg";
import s6 from "../../assets/studio/s6.jpg";
import s7 from "../../assets/studio/s7.jpg";
import s8 from "../../assets/studio/s8.jpg";
import s9 from "../../assets/studio/s9.jpg";
import s10 from "../../assets/studio/s10.jpg";
import s11 from "../../assets/studio/s11.jpg";
import s12 from "../../assets/studio/s12.jpg";

export default function Studio({setOpenStudio}) {
 const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal staticBackdrop show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size='xl' >
          <MDBModalContent >
            <MDBModalHeader >
              <MDBModalTitle style={{marginLeft: '45%'}} className='text-uppercase fs-2 fw-bold '>Studio</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setOpenStudio(false)}></MDBBtn>
            </MDBModalHeader>

            <MDBContainer style={{ maxWidth: '1000px' }} className='p-4'>
              
            <MDBModalBody className='text-center'>Studio portait is one of the our specilities, during or after an event. 
            We provide the best photos with the high quality equipment to make sure the result is awesome. 
            Our studio image come with 12R, 11R, 8R, and 5R with or without frame.</MDBModalBody>

            <div className='row pt-3 pb-5 '>
              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s1} className='w-100 rounded-4 hover-shadow img-thumbnail '/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s2} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>
 
              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s3} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s4} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s5} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s6} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s7} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s8} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s9} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s10} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s11} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={s12} className='w-100 rounded-4 hover-shadow img-thumbnail'/>
              </div>


            </div>
            </MDBContainer>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}