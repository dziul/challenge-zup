import styled from 'styled-components';

import {IconButton, Paper} from '@material-ui/core';

import {fontSize} from '../../styleds/Mixins';
import {Button} from '../../styleds/Button';
import {ContainerMainFlexCenter,Actions,BodyWithGradient} from '../../styleds/Common';
import {blueGrey} from '../../styleds/Colors';

export const Main = styled(BodyWithGradient)``;

export const Container = styled(ContainerMainFlexCenter)``;

export const Content = styled(Paper).attrs(props=>({
    elevation: 3,
}))`
    padding: 20px;
    width:100%;
    max-width: 420px;
    margin: 20px 0;
`;

export const ContentHeader = styled.div`
    display:flex;
    align-items: flex-start;
`;

export const ContentHeaderText = styled.div`
    flex:1;
    > h3 {
        ${fontSize(14)}
        color: ${blueGrey[700]};
    }
    >h2 {
        ${fontSize(38)};
    }
`;

export const Form  = styled.form`
    display:flex;
    flex-direction:column;
    margin-top: 10px;

    >div {
        margin-top:10px;
    }
`;

export const ButtonClose = styled(IconButton).attrs(props=>({
    size: 'small'
}))``;

export const Styleds = {
    Main,
    Container,
    Actions,
    Content,
    ContentHeader,
    ContentHeaderText,
    Form,
    Button,
    ButtonClose,
}