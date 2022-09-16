import React, { useState } from 'react';
import { MDBRow, 
	MDBCol,
	MDBCard, 
	MDBCardBody, 
	MDBIcon, 
	MDBBtn, 
	MDBInput } from "mdb-react-ui-kit";

export default function Contact() {
    return (

    <div className='bg-white pb-5'>      

    <div className='d-flex justify-content-center align-items-center h-100 p-5'>
    <div MDBContainer style={{maxWidth: '1000px'}} >
            <div class="text-center " >
                <h1 class="mt-3 " style={{fontSize:'60px'}}>Contact Us</h1> 
            </div>
                    
    
	</div>
	</div>
	<br></br>

  <div MDBContainer className='d-flex justify-content-center ' >
	<MDBRow >
        <MDBCol className='justify-content-center '>
          <MDBCard className=' pb-5'> 
            <MDBCardBody>
                <h3 className="text-warning" >
                  <MDBIcon icon="envelope" color='warning'/> Write to us:
                </h3>

              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form pb-3">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
                
              </div>
              <div className="md-form pb-3">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form pb-3">
                <MDBInput
                  icon="tag"
                  label="Phone number"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form pb-3">
                <MDBInput
                  icon="pencil-alt"
                  wrapperClass='mb-4'
                  label="Message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                  rows={4}
                />
              </div>
              <div className="text-center">
                <MDBBtn className='mb-3' block color='warning'>Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
		
        <MDBCol lg="8">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            /> */}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65085903.851098955!2d31.410205699999985!3d5.335997799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31b7bd189ecc5405%3A0xbb76ffa61b8f468b!2sSD%20Photo!5e0!3m2!1sen!2smy!4v1663251166413!5m2!1sen!2smy"
 width="600" height="450" style={{ border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4" >
              <MDBBtn tag="a" floating size='lg' color="warning" className="accent-1">
              <MDBIcon fas icon="map-marker-alt" />
              </MDBBtn>
              <p className="pt-3">Gp2 Food Court pulau duyung, Pulau Duyung Kecil, 20100 Kuala Terengganu, Terengganu</p>
              
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating size='lg' color="warning" className="accent-1">
              <MDBIcon fas icon="phone-alt" />
              </MDBBtn>
              <p className="pt-3">+ 01 234 567 89</p>
              <p className="mb-md-0">Sun - Thu, 9:00 AM - 5:00 PM</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating size='lg' color="warning" className="accent-1">
              <MDBIcon fas  icon="envelope" />
              </MDBBtn>
              <p className="pt-3">sriduyong.ent@gmail.com</p>
              <p className="mb-md-0">sdphoto@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>

	  
	</div>
  </div>

    );
}