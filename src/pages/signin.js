import React, { useState } from 'react';
import SignIn from '../components/Signin';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImgLogo } from '../components/Navbar/data';



const SigninPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  };
  return (
  <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} {...ImgLogo}/> 
      <SignIn/>
      <Footer {...ImgLogo}/>
      
  </>
  );
};

export default SigninPage;
