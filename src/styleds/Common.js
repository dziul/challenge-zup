import styled, {css} from 'styled-components';

import {Button as ButtonBase} from './Button';

import {Container  as ContainerMaterial} from '@material-ui/core';

import {fontSize} from './Mixins';
import {Gradient} from './Colors';

const flexExpanded = css`
    display:flex;
    height: 100%;
    width: 100%;
`;

const flexCenterExpanded = css`
    ${flexExpanded};
    justify-content: center;
    align-items: center;
    min-height: 420px;
`;

export const ContainerMain = styled(ContainerMaterial).attrs(props=>({
    component: 'div',
    maxWidth: 'md',
}))`
    ${flexExpanded};
`;

export const ContainerMainFlexCenter = styled(ContainerMaterial).attrs(props=>({
    component: 'div',
    maxWidth: 'md',
}))`
    ${flexCenterExpanded};
    h1 {
        ${fontSize(52)}
    }
`;

export const BodyWithGradient = styled.div`
    ${Gradient.main};
    ${flexCenterExpanded};
`;

export const Content = styled.div`
    padding: 10px;
`;

export const Actions = styled.div`
    margin-top: 20px;

    ${ButtonBase}:first-child {
        margin-right: 10px;
    }
`;

