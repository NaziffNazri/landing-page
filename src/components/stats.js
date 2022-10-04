import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Stats() {
  return (

    <div className='bg-white pb-5 ' id='service'>
        <div className='container pb-5'>
        <div class="text-center pb-5" >
        <h1 class="mt-3 " style={{ fontSize: '35px' }}>Why choosing us</h1>
        </div>

        <MDBRow className='row-cols-1 row-cols-md-3 g-4 pt-4'>

        <MDBCol className='d-flex justify-content-center'>
        <MDBCard className='h-100 w-75 p-3' alignment='center'>
          
        <div className='mt-n5'>
            <MDBBtn color="warning" className=" " >
              <MDBIcon fas icon="camera" size='3x'/>
              </MDBBtn>
              </div>
              
            <MDBCardBody className='container'>
                <MDBCardTitle className='text-warning fs-3'> 200</MDBCardTitle>
                <MDBCardTitle>Projects</MDBCardTitle>
                <MDBCardText>We have attend more than 200 event plus convocations, we grow a much from start until now.</MDBCardText>
                
            </MDBCardBody>  
        </MDBCard>
        </MDBCol>

        <MDBCol className='d-flex justify-content-center'>
        <MDBCard className='h-100 w-75 p-3' alignment='center'>

        <div className='mt-n5'>
            <MDBBtn color="warning" className=" " >
              <MDBIcon fas icon="truck" size='3x'/>
              </MDBBtn>
              </div>

            <MDBCardBody>
            <MDBCardTitle className='text-warning fs-3'>Free Delivery</MDBCardTitle>
                <MDBCardTitle>Delivery</MDBCardTitle>
                <MDBCardText>We sponsored the delivery in most of our pakages with our partnership with top courier in Malaysia. </MDBCardText>
                
            </MDBCardBody>
        </MDBCard>
        </MDBCol>

        <MDBCol className='d-flex justify-content-center'>
        <MDBCard className='h-100 w-75 p-3' alignment='center'>

        <div className='mt-n5'>
            <MDBBtn color="warning" className=" " >
              <MDBIcon fas icon="box" size='3x'/>
              </MDBBtn>
              </div>

            <MDBCardBody>
            <MDBCardTitle className='text-warning fs-3'>100% Secure</MDBCardTitle>
                <MDBCardTitle>Packaging</MDBCardTitle>
                <MDBCardText>We secure our product with a good packaging to make sure does not damage it.</MDBCardText>
                
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
        </MDBRow>
        
        </div>
    </div>

  );
}