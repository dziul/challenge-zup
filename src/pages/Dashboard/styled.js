import styled from 'styled-components';

import {Paper} from '@material-ui/core';

import {Button} from '../../styleds/Button';
import { white, blueGrey } from '../../styleds/Colors';
import {ContainerMain} from '../../styleds/Common';

const Main = styled.div``;

const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content: space-between;
    min-height:50px;
    padding: 0 20px;
    background-color: ${white[900]};
    border-bottom: 1px solid ${blueGrey[50]};
    box-shadow: 0 0 4px rgba(0,0,0,.1);
    position: sticky;
    top:0;
    z-index:10;
`;

const HeaderGroupItem = styled.div`
    display:flex;
    align-items:center;

    >h3 {
        font-size:16px;
        margin-left:20px;
    }
`;

const Container = styled(ContainerMain)`
    margin-top:40px;
    margin-bottom:40px;
    justify-content:center;
    /* flex-direction:column; */
`;
const Content = styled.div`
    display:flex;
    flex-direction:column;
`;

const Box = styled(Paper)`
    width:100%;
    margin-top:20px;
`;

export const Styleds = {
    Main,
    Header,
    Container,
    Content,
    Box,
    Button,
    HeaderGroupItem,
}