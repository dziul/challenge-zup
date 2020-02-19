import styled, {css} from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

import {purple, white} from './Colors';

export const Button = styled(MaterialButton)`

    ${(props)=>props.color&&props.color==='primary'&&css`
        background-color: ${purple[800]} !important;
        border-color: ${purple[800]} !important;
        color: ${white[900]} !important;
    `};

    padding-left:15px !important;
    padding-right:15px !important;
    
`;