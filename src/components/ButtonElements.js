import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'


export const Button = styled(LinkR)`
    border-radius: 1.875rem;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '0.875rem 4rem' : '0.75rem 1.875rem')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '1.25rem' : '1rem')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
    }
`;