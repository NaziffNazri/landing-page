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


import e1 from "../../assets/photoAlbum/g1.jpg";
import e2 from "../../assets/photoAlbum/g2.jpg";
import e3 from "../../assets/photoAlbum/g3.JPG";
import e4 from "../../assets/photoAlbum/g4.jpg";
import e5 from "../../assets/photoAlbum/g5.JPG";
import e6 from "../../assets/photoAlbum/g6.jpg";

export default function Album({setOpenAlbum}) {
 const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal staticBackdrop show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size='xl' >
          <MDBModalContent >
            <MDBModalHeader >
              <MDBModalTitle style={{marginLeft: '45%'}} className='text-uppercase fs-2 fw-bold '>Photo Album</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setOpenAlbum(false)}></MDBBtn>
            </MDBModalHeader>

            <MDBContainer style={{ maxWidth: '1000px' }} className='p-4'>
              
            <MDBModalBody className='text-center'>Group photos is a must when an event been held, We also provide a group photos for VIP, crew and all the poeple who are participant in the event. 
            We also provide a big framed group photos for the organization to hang it in the office. </MDBModalBody>

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

            </div>
            </MDBContainer>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}