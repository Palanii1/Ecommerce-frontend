import React from 'react';
import Icon1 from '../../images/icons8-guarantee-100.png'
import Icon2 from '../../images/icons8-money-with-wings-100.png'
import Icon3 from '../../images/icons8-scream-100.png'
import Icon4 from '../../images/pexels-worldspectrum-843700.jpg'
import { FeaturesContainer, FeaturesH1, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesH2, FeaturesP } from './FeaturesElements';

const Features = () => {
  return (
    <FeaturesContainer>
        <FeaturesH1>Our Benefits</FeaturesH1> 
        <FeaturesWrapper>
            <FeaturesCard>
                <FeaturesIcon src={Icon1}/>
                <FeaturesH2>Originality</FeaturesH2>
                <FeaturesP>Get access to original stories for your entertainment at a good price</FeaturesP>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesIcon src={Icon2}/>
                <FeaturesH2>Affordable Pricing</FeaturesH2>
                <FeaturesP>Get your money's worth on each read. Discount exist for multiple purchases.</FeaturesP>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesIcon src={Icon4}/>
                <FeaturesH2>Pay with Crypto</FeaturesH2>
                <FeaturesP>Avoid hassle by purchasing products with your favorite cryptocurrency.</FeaturesP>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesIcon src={Icon3}/>
                <FeaturesH2>Thrillers</FeaturesH2>
                <FeaturesP>Enjoy thrilling stories that take you on a rollercoaster you never saw coming.</FeaturesP>
            </FeaturesCard>
        </FeaturesWrapper>   
    </FeaturesContainer>
  );
};

export default Features;
