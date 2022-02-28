import styled from "styled-components";
import { device } from "../breakpoints";

export const ContactContainer = styled.div`
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background: grey;
`

export const ContactWrap = styled.div`
    margin-top: 5.625rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ContactTitle = styled.h2`
    font-size: 1.875rem;
    color: white;
    margin-bottom: 0.75rem;
    font-weight: bold;
    text-align: center;
`

export const ContactForm = styled.div`
    background: #010101;
    max-width: 43.75rem;
    height: 37.5rem;
    width: 100vw;
    z-index: 1;
    display: grid;
    align-self: center;
    margin: 0px 0px 30px 0px;
    padding: 1.562rem 0.75rem;
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`

export const CFormLabel = styled.label`
    margin-bottom: 0.5rem;
    font-size: 1.375rem;
    color: #fff;
`

export const CFormInput = styled.input`
    padding: 1rem 1rem;
    margin-bottom: 1.562rem;
    border: none;
    border-radius: 0.25rem;
`

export const ContactButton = styled.button`
    background: #01bf71;
    padding: 0.75rem 0;
    border: none;
    margin-top: 1.25rem;
    justify-self: center;
    width: 18.75rem;
    border-radius: 3.125rem;
    color: #fff;
    font-size: 1.25rem;
    cursor: pointer;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    }
`

export const CFormTextInput = styled.textarea`
    background: white;
    columns: 100;
    font-size: 1.125rem;    
`