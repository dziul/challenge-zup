import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

import {TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import {Actions} from '../../store/login';

import pageMetadata from '../metadata';
import uniqueId from '../../utils/uniqueId';

import {Styleds} from './styled';

const PageSignUp = (props) => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userName, setUserName] = useState('');


    const submitHandling = (event)=>{
        event.preventDefault();
        props.actions.signUp({
            email: userEmail,
            password: userPassword,
            name: userName
        });
    };

    return(
        <>
        <Styleds.Main>
            <Styleds.Container>
                <Styleds.Content>

                    <Styleds.ContentHeader>

                        <Styleds.ContentHeaderText>
                            <h3>Join in Ch@llenge.</h3>
                            <h2>Create your account</h2>
                        </Styleds.ContentHeaderText>

                        <Styleds.ButtonClose
                            component={Link}
                            to={pageMetadata.home.path}>
                            <ClearIcon  aria-label="close"/>
                        </Styleds.ButtonClose>

                    </Styleds.ContentHeader>

                    <Styleds.Form onSubmit={submitHandling}>
                        <TextField
                            id={uniqueId(4)}
                            label="Full name"
                            variant="outlined"
                            onChange={(event)=>{setUserName(event.target.value)}}
                        />
                        <TextField
                            id={uniqueId(4)}
                            label="E-mail"
                            variant="outlined"
                            type="mail"
                            onChange={(event)=>{setUserEmail(event.target.value)}}
                        />
                        <TextField
                            id={uniqueId(4)}
                            label="Passaword"
                            variant="outlined"
                            type="password"
                            helperText="Make sure it's at least 6 characters"
                            onChange={(event)=>{setUserPassword(event.target.value)}}
                        />

                        <Styleds.Actions>
                            <Styleds.Button color='primary' type="submit">
                                Sign up
                            </Styleds.Button>
                            <Styleds.Button
                                component={Link}
                                to={pageMetadata.signin.path}
                                role="link"
                            >
                                Sign in
                            </Styleds.Button>
                        </Styleds.Actions>

                    </Styleds.Form>

                </Styleds.Content>

            </Styleds.Container>
        </Styleds.Main>
        </>
    );
};

const mapStateToProps = (state) => ({collection: state.loginReducer});
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(PageSignUp);