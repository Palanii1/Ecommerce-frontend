import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { device } from "../breakpoints";

export const Nav = styled.nav`
    background: #000;
    height: 5rem;
    margin-top: -5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease-in-out;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    z-index: 1;
    width: 100%;
    padding: 0 1.5rem;
    max-width: 68.75rem;
`;

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
    z-index: 50;
`;

export const ImgL = styled.img`
    height: 2.5rem;
    width: 6rem;
    z-index: 56;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right:0;
        margin: 1.5rem;
        transform: translate(-100, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -1.25rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 5rem;
`;

export const NavLinks = styled(LinkR)`
    color: yellow;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        border-bottom: 3px solid #01bf71;
    }

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
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
    



