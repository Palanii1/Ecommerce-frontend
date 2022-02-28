import React, {useState, useRef, useEffect} from 'react';
import '../Slider/Slider.css'
import dataSlider from './DataSlider'
import BtnSlider from './BtnSlider';


export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if(slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const timeoutRef = useRef(null);
    const delay = 4000;

    const resetTimeout = () => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => setSlideIndex((prevIndex) => prevIndex === dataSlider.length - 0 ? 1 : prevIndex + 1), delay);
        return () => {
            resetTimeout();
        }
    })


  return (
    <div className='container-slider'>
        {dataSlider.map(({imgPath}, index) => {
            return (
                <div
                key={index}
                className={slideIndex === index + 1 ? 'slide active-anim': 'slide'}
                >
                    <img 
                        src={imgPath} 
                        alt={'img' + index} 
                    />
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={'next'}/>
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />
        <div className="container-dots">
            {Array.from({length: (dataSlider.length)}).map((item, index) => (
                <div
                onClick={() => moveDot(index + 1)} 
                className={slideIndex === index + 1 ? 'dot active' : 'dot'}>
                </div>
            ))}
        </div>
    </div>
);
}
