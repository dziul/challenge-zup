import styled from 'styled-components';

import {ContainerMainFlexCenter, Content as ContentCommon, Actions as ActionsCommon} from '../../styleds/Common';
import {Button} from '../../styleds/Button';

export const Container = styled(ContainerMainFlexCenter)`

`;
export const Content = styled(ContentCommon)`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Actions = styled(ActionsCommon)`
    margin-top: 40px;
`;

export const Styleds  =  {
    Container,
    Content,
    Actions,
    Button,
};