import React from 'react';
import Slider from '../About/Slider/Slider'
import { AboutContainer, AboutWrap, AboutInfo, AboutTitle, AboutText } from './AboutElements';

const About = () => {
  return (
    <>
        <AboutContainer>
            <AboutWrap>
                <AboutInfo>
                    <AboutTitle>TESTIMONIALS</AboutTitle>
                    <Slider />
                </AboutInfo>
                <AboutInfo>
                    <AboutTitle>HISTORY</AboutTitle>
                    <AboutText>Feektion , formerly  <a href="https://thoughtsofaphnobody.wordpress.com" target='_blank' rel="noopener noreferrer">thoughtsofaphnobody.wordpress.com</a>   and then thoughtsofaphnobody.com, was founded in 2015. 
                    <br />
                    <p>It started after a college friend shared her relationship situation with me in a bid to resolve the issues she was facing with her partner at that time. </p>
                    <br />
                    <p>Realizing the similarity of her challenge with that of another friend, a guy, had just discussed with me a couple days ago, it was evident that different relationships face similar challenges regardless and as such it was necessary to hear from others who had encountered and solved these challenges prior.</p>
                    <br />
                    <p>TOAPN started out as a blog to provide a creative outlet to internal crisis in order to reach conflict resolution in the most artistic way possible without resorting to negative means. 
                    TOAPN provided a platform to share and discuss issues besetting individuals by listening to advice from people that have faced and overcome present day challenges in the past.</p>
                    <br />
                    <p>As change is constant, Feektion has since grown to accommodate the artistic expressions of various creatives, providing them with a means to earn from their incredible works of art and also interact with their contemporaries around the world.</p>
                    <br />
                    <p>As Art makes the World go round, Feektion provides the wheels for this journey by enabling readers to enter the mind of modern day artists in real time thereby allowing you time travel and live the life of a living artist. </p>
                    <br />
                    <p>Amazing.</p>
                    </AboutText>
                </AboutInfo>
            </AboutWrap>
        </AboutContainer>

    </>
  );
};

export default About;
