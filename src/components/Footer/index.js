import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, ImgL, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialIconLink, SocialIcons, SocialLogo, WebsiteRights } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll/modules';

const Footer = ({pic, alt}) => {

const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
  <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinksItems>
                      <FooterLinkTitle>About Us</FooterLinkTitle>
                          <FooterLink to="/about">History</FooterLink>
                          <FooterLink to="/about">Testimonials</FooterLink>
                          <FooterLink to="/about">Careers</FooterLink>
                          <FooterLink to="/about">Terms of Service</FooterLink>                      
                  </FooterLinksItems>
                  <FooterLinksItems>
                      <FooterLinkTitle>Contact Us</FooterLinkTitle>
                          <FooterLink to="/contact">Contact</FooterLink>
                          <FooterLink to="/contact">Business</FooterLink>
                          <FooterLink to="/contact">Support</FooterLink>
                          <FooterLink to="/contact">Reach Out</FooterLink>
                      
                  </FooterLinksItems>
              </FooterLinksWrapper>
              <FooterLinksWrapper>
                  <FooterLinksItems>
                      <FooterLinkTitle>Services</FooterLinkTitle>
                          <FooterLink to="/services">Copywriting</FooterLink>
                          <FooterLink to="/services">GhostWriting</FooterLink>
                          <FooterLink to="/services">Articles</FooterLink>
                          <FooterLink to="/services">Mentorship</FooterLink>                      
                  </FooterLinksItems>
                  <FooterLinksItems>
                      <FooterLinkTitle>Social Media</FooterLinkTitle>
                          <FooterLink to="/signin">Instagram</FooterLink>
                          <FooterLink to="/signin">Facebook</FooterLink>
                          <FooterLink to="/signin">Twitter</FooterLink>
                          <FooterLink to="/signin">Youtube</FooterLink>                      
                  </FooterLinksItems>
              </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo to='/' onClick={toggleHome}>
                    <ImgL src= {pic} alt={alt} />
                  </SocialLogo>              
              <WebsiteRights>Feektion &copy; {new Date().getFullYear()} All rights reserved. </WebsiteRights>
              <SocialIcons>
                  <SocialIconLink href='/' target='_blank' aria-label="Facebook"><FaFacebook /></SocialIconLink>
                  <SocialIconLink href='/' target='_blank' aria-label="Instagram"><FaInstagram /></SocialIconLink>
                  <SocialIconLink href='/' target='_blank' aria-label="Twitter"><FaTwitter /></SocialIconLink>
                  <SocialIconLink href='/' target='_blank' aria-label="Youtube"><FaYoutube /></SocialIconLink>
              </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
      </FooterWrap>
  </FooterContainer>
  );
};

export default Footer;
