import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='warning' className='text-center text-black text-lg-start  pt-4' >


      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Sri Duyong Photo
              </h6>
              <p>
                We are welcome to be part of your best momment of the event. For any inqueries please contact us to ask for more details of our prices or packages.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
              <p>
                <a href='#service' className='text-reset'>
                  Service
                </a>
              </p>
              <p>
                <a href='#about' className='text-reset'>
                  About Us
                </a>
              </p>
              <p>
                <a href='#contact' className='text-reset'>
                  Contact
                </a>
              </p>
              <p>
                <a href='#client' className='text-reset'>
                  Client
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Service</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Convocations
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Studio
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Events
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Ceremony
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Kindergartens
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Photo Album
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Gp2 Food Court pulau duyung, Pulau Duyung Kecil, 20100 Kuala Terengganu, Terengganu
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                sriduyong.ent@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 01 234 567 88
              </p>
              <p>
              <MDBIcon fas icon="business-time" className="me-3"/> Sun - Thu, 9:00 AM - 5:00 PM
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3 border-top border-white border-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.06)' }}>
        © 2022 Copyright :
        <a className='text-reset fw-bold' href=''>
          Sri Duyong Photo
        </a>
        <br></br>
        <a>All Rights Reserved</a>
      </div>
    </MDBFooter>
  );
}