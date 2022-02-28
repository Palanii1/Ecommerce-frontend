import React from 'react';
import './Slider.css'
import LeftArrow from './icons/iu-2.png'
import RightArrow from './icons/iu.png'

export default function BtnSlider({direction, moveSlide}) {
  return (
    <button
    onClick={moveSlide}
    className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
      <img src={direction === 'next' ? RightArrow : LeftArrow } alt=""/>
    </button>
  );
}
