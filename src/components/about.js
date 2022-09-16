import React, { useState } from 'react';
import about1 from "../assets/a1.JPG";
import about2 from "../assets/a2.jpg";

  export default function About() {
    return (

    <div className='bg-light pb-5'>      
    <div className='d-flex justify-content-center align-items-center h-100 p-5'>
    <div MDBContainer style={{maxWidth: '1000px'}} >
            <div class="text-center " >
                <h1 class="mt-3 " style={{fontSize:'60px'}}>About Us</h1> 
            </div>
            </div>         
    </div>

    <div class="container my-5">
                <div class="row">
                  <div class="col-lg-6">
                    <img src={about1} class="w-100 shadow"   />
                  </div>
                  <div class="col-lg-6">
                    <div class="p-5 mt-0">
                        <h1 class="display-6">Our Story</h1>
                        <p class="lead">Photo Studio is one of Malaysia’s largest and diversified video and photoshoot studio rental holding company in Malaysia.
                            All our studios have been renovated to offer you with the best possible environment for shooting. You will find there Luxury offices and meeting rooms all the way to sound prove infinity wall studios with backdrops.
                            Even though our photoshoot studio business branch in cantonent exchange is new, we have been serving our customers with offices.                                                       
                             </p>                       
                      </div>
                  </div>
              </div>

              <div class="container my-5 pt-3">
                <div class="row">
                  
                  <div class="col-lg-6">
                    <div class="p-5 mt-0">
                        <h1 class="display-6">Our Offer</h1>
                        <p class="lead">No more struggle to find the ideal location to shoot, no more ridiculously high costs to rent equipment, no more squeeze in in small rooms!
                            We help you to achieve a shooting that will be smooth, efficient and even enjoyable with high speed internet and free coffee. We have been there; we have done shooting days that seem never ending and draining.
                             </p>
                        
                      </div>
                  </div>

                  <div class="col-lg-6">
                    <img src={about2} class="w-100 shadow"  />
                  </div>
              </div>
        </div>
    </div>
    </div>
    );
  }