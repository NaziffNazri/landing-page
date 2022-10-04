// import React, { useState, useEffect } from "react";
// import {
//     MDBBtn,
//     MDBModal,
//     MDBModalDialog,
//     MDBModalContent,
//     MDBModalHeader,
//     MDBModalTitle,
//     MDBModalBody
//   } from 'mdb-react-ui-kit';

// import Convo from "./popup/convo";

// const HomePage = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   return (
//     <>
//       <MDBBtn onClick={() => setShowLogin(true)}>Open Modal</MDBBtn>
//       <Convo show={showLogin} close={() => setShowLogin(false)} />
//     </>
//   );
// };

// export default HomePage;



// import React, { Component } from 'react';
// import Modal from './popup/convo';

// export default class Main extends Component {
//     state = {
//         showModal: false,
//     }

//     toggleModal = () => {
//         this.setState({ showModal: !this.state.showModal });
//     } 

//     render(){

//         return (
//             <div>
//                 <button 
//                     onClick={ this.toggleModal } >
//                     Opem Modal
//                 </button>
//                 <Modal 
//                     isOpen={this.state.showModal} 
//                     toggle={this.toggleModal} 
//                 />
//             </div>
//         );
//     }
// }

import { useState } from 'react';
import Convo from './popup/convo';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from 'mdb-react-ui-kit';

  
export default function HomePage(){

  const [openConvo, setOpenConvo] = useState(false);
  
  return(
    <div>
      <MDBBtn onClick={() => {setOpenConvo(true)}}> Click</MDBBtn>
      {openConvo && <Convo setOpenConvo = {setOpenConvo} />}
    </div>


    

  )
}