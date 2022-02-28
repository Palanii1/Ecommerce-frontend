import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ServiceSection from '../components/Services';
import Footer from '../components/Footer';
import { ImgLogo } from '../components/Navbar/data';

const ServicePage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} {...ImgLogo}/>
        <ServiceSection />
        <Footer {...ImgLogo}/>
    </>
    );
};

export default ServicePage;
