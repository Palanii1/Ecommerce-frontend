import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import { ImgLogo } from '../components/Navbar/data';


const AboutPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} {...ImgLogo}/>
        <About />
        <Footer {...ImgLogo}/>
    </>
    );
};

export default AboutPage;
