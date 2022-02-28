import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import { ImgLogo } from '../components/Navbar/data';
import { books } from '../components/Products/datass';

const Productpage = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} {...ImgLogo}/>
        <Products {...books} />
        <Footer {...ImgLogo}/>
    </>
    );
};

export default Productpage;
