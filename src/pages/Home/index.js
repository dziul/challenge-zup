import React from 'react';
import {Link} from 'react-router-dom';

import pageMetadata from '../metadata';

import {Styleds} from './styled';

const PageHome = () => {
    return (
        <Styleds.Container>
                <Styleds.Content>
                    <h1>Ch@llenge, guy!</h1>
                    <Styleds.Actions>
                        <Styleds.Button
                            size="large"
                            component={Link}
                            to={pageMetadata.signin.path}
                            role="link"
                            variant="outlined"
                        >
                            Sign In
                        </Styleds.Button>
                        <Styleds.Button
                            size="large"
                            color="primary"
                            component={Link}
                            to={pageMetadata.signup.path}
                            role="link"
                        >
                            Sign Up
                        </Styleds.Button>
                    </Styleds.Actions>
                </Styleds.Content>
        </Styleds.Container>
    );
};


export default PageHome;