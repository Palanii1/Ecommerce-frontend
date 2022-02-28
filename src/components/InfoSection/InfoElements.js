import styled from "styled-components";
import { device } from "../breakpoints";

export const InfoContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.875rem;
    height: 50rem;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const TextWrapper = styled.div`
    z-index: 3;
    max-width: 75rem;
    position: absolute;
    padding: 0.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    mix-blend-mode: normal;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 1rem;
    line-height: 1;
    font-weight: 700;
    letter-spacing: 0.088rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
`

export const Heading = styled.h1`
    margin-bottom: 1.5rem;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media ${device.mobileS} and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const Subtitle = styled.p`
    max-width: 27.5rem;
    margin-bottom: 2.187rem;
    font-size: 1.125rem;
    line-height: 1.5rem;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

