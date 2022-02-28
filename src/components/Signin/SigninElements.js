import styled from "styled-components";
import { Link } from 'react-router-dom';
import { device } from "../breakpoints";

export const Container = styled.div`
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

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const Icon = styled(Link)`
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

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    margin: 6.25rem;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 0.625rem;
    }
`

export const Form = styled.form`
    background: #010101;
    max-width: 25rem;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 5rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 2rem 2rem;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 2.5rem;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 1rem 1rem;
    margin-bottom: 2rem;
    border: none;
    border-radius: 0.25rem;
`

export const FormButton = styled.button`
    background: #01bf71;
    padding: 1rem 0;
    border: none;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1.25rem;
    cursor: pointer;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 1.5rem;
    color: #fff;
    font-size: 0.875rem;
`

export const SigninBtn = styled.nav`
    display: flex;
    margin-top: 1.875rem;
    justify-self: center;

    @media screen and (max-width: 768px) {
        display: block;
    }
    
`;

export const SigninLink = styled(Link)`
    border-radius: 3.125rem;
    background: green;
    white-space: nowrap;
    padding: 0.625rem 1.375rem;
    color: #010606;
    font-size: 1.25rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    }
`;
    

