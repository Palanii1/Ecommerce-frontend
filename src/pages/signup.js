import React, { useState } from 'react';
import SignUp from '../components/Signup';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ImgLogo } from '../components/Navbar/data';

const SignupPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
    setIsOpen(!isOpen)
  };
  return (
  <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} {...ImgLogo}/>
    <SignUp/>
    <Footer {...ImgLogo}/>
  </>
    );
};

export default SignupPage;
