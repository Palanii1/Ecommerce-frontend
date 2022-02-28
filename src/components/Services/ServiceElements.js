import styled from "styled-components";
import { device } from "../breakpoints";

export const ServiceContainer = styled.div`
    background: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1,875rem;
    min-height: 120vh;
`

export const ServiceWrap = styled.div`
    height: 100%;
    max-width: 175rem;
    position: relative;
    padding: 0.187rem 0.437rem;

`

export const ServiceTitle = styled.h1`
    margin-bottom: 1.25rem;
    font-size: 2.5rem;
    line-height: 1;
    text-align: center;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
`

export const ServiceHeading = styled.h2`
    font-size: 1,875rem;
    line-height: 1;
    padding: 0.625rem;
    font-weight: 400;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
`

export const ServiceDescription = styled.p`
    margin-bottom: 1.5rem;
    padding: 0.625rem;
    font-size: 1.06rem;
    line-height: 1;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const ServiceGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.8rem;
 
    @media screen and (max-width: 400px) {
        grid-template-columns: repeat(2, 1fr);
    } 
    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(2, 1fr);
    } 
`

export const ServiceItem = styled.div`
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.5);
    transition: all 300ms ease-in-out;

    &:hover {
        transform: scale(1.04);
        cursor: pointer;
    }
`