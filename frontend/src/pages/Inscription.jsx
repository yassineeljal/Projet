import React from 'react';
import "./Inscription.css"
import Image from "../assets/inscription.jpg"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
 
function Inscription() {
  return (
    <div className='inscriptionContainer'>
<MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
 
      <MDBRow>
 
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
 
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(0, 0.00%, 0.00%)', textAlign:"center"}}>
            Poxios. <br />
</h1>
 
          <img src={Image}  className='camera'/>
 
        </MDBCol>
 
        <MDBCol md='6' className='position-relative'>
 
 
          <MDBCard className='my-5 bg-glass'>
            <h2>Inscription</h2>
<MDBCardBody className='p-5'>
 
              <MDBRow>
<MDBCol col='6'>
<MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
</MDBCol>
 
                <MDBCol col='6'>
<MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
</MDBCol>
</MDBRow>
 
              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
<MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>
 
              <div className='d-flex justify-content-center mb-4'>
<MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
</div>
 
              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
 
 
                <a>or sign in</a>



 
 
            </MDBCardBody>
</MDBCard>
 
        </MDBCol>
 
      </MDBRow>
 
    </MDBContainer></div>
  );
}
 
export default Inscription;