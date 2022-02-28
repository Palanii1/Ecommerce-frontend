import React from 'react';
import { ContactContainer, ContactWrap, ContactTitle, ContactForm, CFormLabel, CFormInput, CFormTextInput, ContactButton } from './ContactElements';

const Contact = () => {
  return (
  <>
    <ContactContainer>
        <ContactWrap>
          <ContactTitle>CONTACT US</ContactTitle>
          <ContactForm action='#'>
            <CFormLabel htmlFor="for">First Name</CFormLabel>
            <CFormInput type="name" placeholder='First Name' required />
            <CFormLabel htmlFor="for">Last Name</CFormLabel>
            <CFormInput type="name" placeholder='Last Name' required />
            <CFormLabel htmlFor="for">Email</CFormLabel>
            <CFormInput type="email" placeholder='email@email.com' required />
            <CFormLabel htmlFor="for">Message</CFormLabel>
            <CFormTextInput type="text" placeholder='how can we be of service to you' rows={30} cols={60} required />
            
            <ContactButton to='#'>
              SUBMIT
            </ContactButton>
          </ContactForm>
          
        </ContactWrap>
    </ContactContainer>
  </>
    );
};

export default Contact;
