import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, HeroP, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }



  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Time Travel Made Easy</HeroH1>
            <HeroP>Sign Up to have access to amazing writings that will have you lost in time.                
            </HeroP>
            <HeroBtnWrapper>
                <Button to='/signin' onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>

    </HeroContainer>
  );
};

export default HeroSection;
