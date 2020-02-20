import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';

import {TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import {Actions} from '../../store/login';

import pageMetadata from '../metadata';
import uniqueId from '../../utils/uniqueId';

import {Styleds} from '../SignUp/styled';

const PageSignIn = (props) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    useMemo(()=>{
        props.actions.authorizedItDoesRedirect();
    },[props.actions]);

    const submitHandling = (event)=>{
        event.preventDefault();
        props.actions.signIn({
            email: userEmail,
            password: userPassword,
        });
    };

    return(
        <>
        <Styleds.Main>
            <Styleds.Container>
                <Styleds.Content>

                    <Styleds.ContentHeader>

                        <Styleds.ContentHeaderText>
                            {/* <h3>Challenge Zup</h3> */}
                            <h2>Sign In your account</h2>
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
                            onChange={(event)=>{setUserPassword(event.target.value)}}
                        />

                        <Styleds.Actions>
                            <Styleds.Button disabled={props.collection.loading} color='primary' type="submit">Sign in</Styleds.Button>
                            <Styleds.Button disabled={props.collection.loading} component={Link} to={pageMetadata.signup.path} role="link">Sign up</Styleds.Button>
                            <Styleds.Button disabled>Lost your password?</Styleds.Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PageSignIn);