import {css} from 'styled-components';

export const purple = {
    100:  "#E1BEE7",
    300: "#BA68C8",
    400: "#AB47BC",
    600 : '#8e24aa',
    700 : '#7b1fa2',
    800 : '#6a1b9a',
    900 : '#4a148c',
};

export const blueGrey = {
    50: '#eceff1',
    200: "#b0bec5",
    700 : '#455a64',
    800 : '#37474f',
    900 : '#263238',
};

export const red = {
    400 : '#ef5350',
    500 : '#f44336',
};

export const white = {
    900: '#ffffff',
}



const gradientMain = css`
    background: ${purple[900]};
    background: radial-gradient(circle, ${purple[700]} 0%, ${purple[900]} 100%);
`;
export const Gradient = {
    main : gradientMain,
};

