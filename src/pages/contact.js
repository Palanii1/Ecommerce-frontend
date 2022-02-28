import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { ImgLogo } from '../components/Navbar/data';

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} {...ImgLogo}/>
        <Contact />
        <Footer {...ImgLogo}/>
    </>
    );
};

export default ContactPage;
