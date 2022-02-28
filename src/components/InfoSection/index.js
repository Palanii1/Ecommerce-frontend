import React from 'react';
import { Button } from '../ButtonElements';
import { ImgWrap, InfoContainer, TextWrapper, Heading, Subtitle, BtnWrap, Img, TopLine } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, darkText, description, buttonLabel, img, alt, headline, primary, dark, dark2}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
              <TextWrapper>            
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                <Button to='/signin'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                  >{buttonLabel}
                </Button>
                </BtnWrap>
              </TextWrapper>                         
      </InfoContainer>
      
    </>
  );
};

export default InfoSection;
