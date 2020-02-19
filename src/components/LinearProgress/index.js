import React, {memo} from 'react';

import {Styleds} from './styled';

const Progress = () => {
    return (
        <Styleds.Container>
            <Styleds.LinearProgress />
        </Styleds.Container>
    );
};

export default memo(Progress);