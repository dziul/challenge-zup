import {css} from 'styled-components';


export const fontSize = (size, base=16) => {
    const rem = size/base;
    return css`
        font-size: ${size}px;
        font-size: ${rem}rem;
    `;
};