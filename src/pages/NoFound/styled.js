import styled from 'styled-components';

import { ContainerMainFlexCenter } from '../../styleds/Common';
import {Button} from '../../styleds/Button';

import { blueGrey } from '../../styleds/Colors';

const Container = styled(ContainerMainFlexCenter)``;

const Content = styled.div`
  padding:15px;
  color: ${blueGrey[200]};
  display:flex;
  flex-direction:column;
  align-items:center;

  >span {
    font-size: 52px;
  }
  >h6{
    font-size: 22px;
    font-weight: 900;
    color: ${blueGrey[900]};
    margin: 10px 0 40px;
  }
`;

export const Styleds = {
  Container,
  Content,
  Button,
}