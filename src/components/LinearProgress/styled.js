import styled from 'styled-components';

import { LinearProgress as LinearProgressMaterial } from '@material-ui/core';

import {purple} from '../../styleds/Colors';

export const Container = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    z-index:10;
`;

export const LinearProgress = styled(LinearProgressMaterial)`

    background-color: ${purple[100]} !important;

    >.MuiLinearProgress-bar{
        background-color: ${purple[300]};
    }
`;



export const Styleds = {
    Container,
    LinearProgress,
}