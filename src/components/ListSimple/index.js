import React, { memo } from 'react';

import { Styleds } from './styled';

const ListSimple = ({data}) => {

    return(
        <Styleds.List aria-label="mailbox folders">
            {
                data&&data.length ?
                data.map((value,index)=>{
                    return(
                        <Styleds.ListItem key={index}>
                            <Styleds.ListItemLink href={`https://www.google.com/search?q=${encodeURI(value)}&tbm=shop`}  target="_blank" title={value}>
                            {value}
                            </Styleds.ListItemLink>
                        </Styleds.ListItem>                            
                    );
                })
                :
                null
            }
        </Styleds.List>
    )
};

export default memo(ListSimple);