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


export default function Ceremony({setOpenCeremony}) {
 const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal staticBackdrop show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size='xl' >
          <MDBModalContent >
            <MDBModalHeader >
              <MDBModalTitle style={{marginLeft: '45%'}} className='text-uppercase fs-2 fw-bold '>Ceremony</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setOpenCeremony(false)}></MDBBtn>
            </MDBModalHeader>

            <MDBContainer style={{ maxWidth: '1000px' }} className='p-4'>
              
            <MDBModalBody className='text-center'>One of our specialist is a event photography, we have attended countless 
            event that orgranized by the corporate company or goverment.</MDBModalBody>

        

            
            </MDBContainer>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}