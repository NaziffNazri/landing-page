// import {
//     MDBBtn,
//     MDBModal,
//     MDBModalDialog,
//     MDBModalContent,
//     MDBModalHeader,
//     MDBModalTitle,
//     MDBModalBody
//   } from 'mdb-react-ui-kit';

//   import React, { useEffect, useState } from 'react';
  

//   export default function Convo(props) {
  
//     const [optXlModal, setOptXlModal] = useState(false);
    
//     console.log(optXlModal)
//     useEffect(() => {
//       setOptXlModal(props.displayModal)
//     })
  
  
//     const toggleShow = () => setOptXlModal(!optXlModal);
  
//     return (
//       <>
//         <MDBModal show={optXlModal} tabIndex='-1' setShow={setOptXlModal}>
//           <MDBModalDialog size='xl'>
//             <MDBModalContent>
//               <MDBModalHeader>
//                 <MDBModalTitle>Small modal</MDBModalTitle>
//                 <MDBBtn class='btn-close' color='none' onClick={toggleShow}></MDBBtn>
//               </MDBModalHeader>
//               <MDBModalBody>...</MDBModalBody>
//             </MDBModalContent>
//           </MDBModalDialog>
//         </MDBModal>
//       </>
//     );
//   }

  // import React, { useEffect, useState } from 'react';
  // import Modal from 'react-modal';
  // import {
  //       MDBBtn,
  //       MDBModal,
  //       MDBModalDialog,
  //       MDBModalContent,
  //       MDBModalHeader,
  //       MDBModalTitle,
  //       MDBModalBody
  //     } from 'mdb-react-ui-kit';
  
  // export default function Convo(props){
  
  //     return(
        
  //         // 
  //         //     <Modal
  //         //         isOpen={ props.isOpen }
  //         //         contentLabel="Example Modal" >
  //         //         <h1>Modal Screen</h1>
  //         //         <button onClick={props.toggle}>close</button>
  //         //     </Modal>  
  //         // </div>     

  //       <>
  //         <Modal isOpen={ props.isOpen } tabIndex='-1'>
  //           <MDBModalDialog size='xl'>
  //             <MDBModalContent>
  //               <MDBModalHeader>
  //                 <MDBModalTitle>Small modal</MDBModalTitle>
  //                 <MDBBtn class='btn-close' color='none' onClick={props.toggle}></MDBBtn>
  //               </MDBModalHeader>
  //               <MDBModalBody>...</MDBModalBody>
  //             </MDBModalContent>
  //           </MDBModalDialog>
  //         </Modal>
  //       </>
        

  //     )
  // }


// import React, { useState } from 'react';
// import {
//   MDBBtn,
//   MDBModal,
//   MDBModalDialog,
//   MDBModalContent,
//   MDBModalHeader,
//   MDBModalTitle,
//   MDBModalBody,
//   MDBModalFooter,
// } from 'mdb-react-ui-kit';

// export default function Convo() {
//   const [basicModal, setBasicModal] = useState(true);

//   const toggleShow = () => setBasicModal(!basicModal);

//   return (
//     <>
//       <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
//       <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
//         <MDBModalDialog>
//           <MDBModalContent>
//             <MDBModalHeader>
//               <MDBModalTitle>Modal title</MDBModalTitle>
//               <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
//             </MDBModalHeader>
//             <MDBModalBody>Modal body text goes here.</MDBModalBody>

//             <MDBModalFooter>
//               <MDBBtn color='secondary' onClick={toggleShow}>
//                 Close
//               </MDBBtn>
//               <MDBBtn>Save changes</MDBBtn>
//             </MDBModalFooter>
//           </MDBModalContent>
//         </MDBModalDialog>
//       </MDBModal>
//     </>
//   );
// }

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


import c1 from "../../assets/convo/c1.jpg";
import c2 from "../../assets/convo/c2.jpg";
import c3 from "../../assets/convo/c3.jpg";
import c5 from "../../assets/convo/c5.JPG";
import c6 from "../../assets/convo/c6.JPG";
import c7 from "../../assets/convo/c7.JPG";
import c8 from "../../assets/convo/c8.JPG";
import c9 from "../../assets/convo/c9.jpg";
import c10 from "../../assets/convo/c10.JPG";
import c11 from "../../assets/convo/c11.jpg";
import c12 from "../../assets/convo/c12.jpg";

export default function Convo({setOpenConvo}) {
 const [basicModal, setBasicModal] = useState(true);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBModal  staticBackdrop show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog size='xl'>
          <MDBModalContent  className='bg-dark text-warning'>
            <MDBModalHeader >
              <MDBModalTitle style={{marginLeft: '27rem'}} className='text-uppercase fs-2 fw-bold '>Convocations</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setOpenConvo(false)}></MDBBtn>
            </MDBModalHeader>

            <MDBContainer style={{ maxWidth: '1000px' }} className='p-4'>
              
            <MDBModalBody className='text-center'>Convocations in our main service provider, we serve almost all the University and College in Terengganu. 
            We provided the best service from the event with the great photography on the stage, event and also studio phot for 
            the family to take pictures togethers as a memories during a big moment in your life. Our staff 
            have been trained and used to work in the high level events.</MDBModalBody>

            <div className='row pt-3 pb-5 '>
              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c1} className='w-100 rounded-3 hover-shadow border border-warning border-2'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c2} className='w-100 rounded-4 hover-shadow border border-warning border-2'/>
              </div>
 
              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c3} className='w-100 rounded-4 hover-shadow border border-warning border-2'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c5} className='w-100 rounded-4 hover-shadow border border-warning border-2'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c6} className='w-100 rounded-4 hover-shadow border border-warning border-2'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c7} className='w-100 rounded-4 hover-shadow border border-warning border-2'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c8} className='w-100 rounded-4 hover-shadow border border-warning border-2'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c9} className='w-100 rounded-4 hover-shadow border border-warning border-2'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c10} className='w-100 rounded-4 hover-shadow border border-warning border-2'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c11} className='w-100 rounded-4 hover-shadow border border-warning border-2'/>
              </div>

              <div className='col-lg-3 col-md-4 col-6 mt-4'>
                  <img src={c12} className='w-100 rounded-4 hover-shadow border border-warning border-2'/>
              </div>


            </div>
            </MDBContainer>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}