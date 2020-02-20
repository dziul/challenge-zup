import styled, { keyframes } from 'styled-components';

import {IconButton, Paper} from '@material-ui/core';

import {fontSize} from '../../styleds/Mixins';
import {Button} from '../../styleds/Button';
import {ContainerMainFlexCenter,Actions,BodyWithGradient} from '../../styleds/Common';
import {blueGrey} from '../../styleds/Colors';

const animationFadeOutIn = keyframes`
    from {
        opacity: 0;
        transform: scale(1.2);
    }
    to {
        opacity:1;
        transform: scale(1);
    }
`;

export const Main = styled(BodyWithGradient)`
    padding-top:20px;
    padding-bottom:20px;
`;

export const Container = styled(ContainerMainFlexCenter)`
`;

export const Content = styled(Paper).attrs(props=>({
    elevation: 3,
}))`
    animation: ${animationFadeOutIn} .2s linear;
    padding: 20px;
    width:100%;
    max-width: 420px;
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