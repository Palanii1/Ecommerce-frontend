import styled from "styled-components";
import { Link } from 'react-router-dom';
import { device } from "../breakpoints";

export const SignupContainer = styled.div`
    min-height: 43.25rem;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(108deg, rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%);
`;

export const SignupFormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const SignupIcon = styled(Link)`
    margin-left: 2rem;
    margin-top: 2rem;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 2rem;

    @media screen and (max-width: 480px) {
        margin-left: 1rem;
        margin-top: 0.5rem;
    }
`

export const SignupFormContent = styled.div`
    height: 100%;
    margin: 6.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 0.625rem;
    }
`

export const SignupForm = styled.form`
    background: #010101;
    max-width: 25rem;
    height: 80vh;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 1.875rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 2rem 2rem;
    }
`

export const SignupFormH1 = styled.h1`
    margin-bottom: 1.25rem;
    color: yellow;
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;
`

export const SignupFormLabel = styled.label`
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #fff;
`

export const SignupFormInput = styled.input`
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 0.25rem;
`

export const SignupFormButton = styled.button`
    background: #01bf71;
    padding: 0.813rem 0;
    border: none;
    margin: 0.625rem;
    border-radius: 4px;
    color: #fff;
    font-size: 1.25rem;
    cursor: pointer;
    
    &:hover{
        background: white;
        color: green;
    }
    

`

