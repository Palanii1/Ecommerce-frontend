import styled from "styled-components";
import { device } from "../breakpoints";

export const AboutContainer = styled.div`
    background: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 60px;
    padding: 0 15px;
    margin-bottom: 20px;
    height: 1200px;
    width: auto;
    position: relative;
`

export const AboutWrap = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    width: 100vw;
    height: 900px;
    z-index: 1;
`

export const AboutInfo = styled.div`
    background: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;
    height: 900px;
    width: 100vw;
    position: relative;
    
    
`

export const AboutTitle = styled.h1`
    margin-bottom: 15px;
    padding: 10px;
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: white;
`

export const AboutText = styled.p`
    margin-bottom: 15px;
    font-size: 15px;
    line-height: 1.5;
    font-weight: 400;
    color: lightgoldenrodyellow;
`