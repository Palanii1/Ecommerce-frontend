import styled from "styled-components";
import {Link} from 'react-router-dom';
import { device } from "../breakpoints";

export const FooterContainer = styled.footer`
    background-color: #101522;
`

export const FooterWrap = styled.div`
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 68.75rem;
    margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding-top: 2rem;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    text-align: left;
    width: 10rem;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 0.625rem;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 0.875rem;
    margin-bottom: 1rem;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-in-out;
    }
`

export const SocialMedia = styled.div`
    max-width: 62.5rem;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 68.75rem;
    margin: 2.5rem auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
    z-index: 50;
`
export const ImgL = styled.img`
    height: 2.5rem;
    width: 6rem;
    z-index: 56;
`

export const WebsiteRights = styled.div`
    color: #fff;
    margin-bottom: 1rem;
    margin-top: 0.625rem;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 15rem;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
    margin: 0 0.25rem;

    &:hover {
        color: green;
    }
`

