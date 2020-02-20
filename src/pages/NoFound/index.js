import React from 'react';
import { Link } from 'react-router-dom';

import pageMetadata from '../metadata';

import { Styleds } from './styled';

const PageNoFound = () => {
  return (
    <Styleds.Container>
        <Styleds.Content>
          <span>&#175;\_(ツ)_/&#175;</span>
          <h6>Not Found</h6>
          <Styleds.Button
              component={Link}
              variant="outlined"
              to={pageMetadata.home.path}
              role="link"
          >
              Home
          </Styleds.Button>
        </Styleds.Content>
    </Styleds.Container>
  );
};

export default PageNoFound;