import styled from "styled-components";
import { device } from "../breakpoints";

export const FeaturesContainer = styled.div`
    height: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media ${device.smallS} and (max-width: 26.5em) {
        height: 68.75rem;
    }

    @media screen and (max-width: 480px) {
        height: 81.25rem;
        
    }
`

export const FeaturesWrapper = styled.div`
    max-width: 62.5rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 1.625rem;
    padding: 0 1.125rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 1.25rem;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr 1fr;
        padding: 0 1.25rem;
    }
`

export const FeaturesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0.625rem;
    max-height: 21.25rem;
    padding: 1.25rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.06);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const FeaturesIcon = styled.img`
    height: 10rem;
    width: 1orem;
    margin-bottom: 0.625rem;
`

export const FeaturesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const FeaturesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 0.625rem;
`

export const FeaturesP = styled.p`
    font-size: 1rem;
    text-align: center;
`
