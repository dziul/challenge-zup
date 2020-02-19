import styled from 'styled-components';

import { blueGrey } from '../../styleds/Colors';

const List = styled.ul`
    
`;

const ListItem = styled.li`
    border-bottom: 1px solid ${blueGrey[50]};
    &:last-child{
        border:0;
    }
    &:hover{
        background-color: ${blueGrey[50]};
    }
`;

const ListItemLink = styled.a`
    padding:15px;
    display: block;
    text-decoration:none;
    color:inherit;
`;

export const Styleds = {
    List, 
    ListItem,
    ListItemLink,
};