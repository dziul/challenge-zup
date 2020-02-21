import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { Search as IconSearch, Home as IconHome } from '@material-ui/icons';

import ListSimple from '../../components/ListSimple';

import {Actions as ActionsLogin} from '../../store/login';

import pageMetadata from '../../pages/metadata';
import searchFilter from '../../utils/searchFilter';

import {Styleds} from './styled';

import listFood from './listFood.json'; // dado local. Iria usar o do db, mas o tempo não permitiu

const PageDashboard = (props) => {
    const [dataRaw] = useState(listFood);
    const [data, setData] = useState(listFood);

    const onSignOut = () => {
        props.actions.signOut();
    };

    const onChangeFilter = (event)=>{
        const dataNew = searchFilter(event.target.value, dataRaw);
        setData(dataNew);
    };

    return(
        <Styleds.Main>

            <Styleds.Header>

                <Styleds.HeaderGroupItem>
                    <IconButton
                        component={Link}
                        to={pageMetadata.home.path}
                        size="small"
                        aria-label="home"
                        role="link"
                        title="home"
                        >
                        <IconHome/>
                    </IconButton>
                    <h3>{props.collection.user?.name}</h3>
                </Styleds.HeaderGroupItem>
                <Styleds.Button
                    onClick={onSignOut}
                    size="small">
                    Sign Out
                </Styleds.Button>

            </Styleds.Header>

            <Styleds.Container>
                <Styleds.Content>

                    <Styleds.Box className="display-flex">
                        <Styleds.InputControl>
                            <Styleds.Label htmlFor="z-up">
                                <IconSearch/>
                            </Styleds.Label>
                            <Styleds.Input
                                id="z-up"
                                onChange={onChangeFilter}
                                placeholder= "Search filter"
                                inputProps={{ 'aria-label': 'filter list' }}
                            />
                        </Styleds.InputControl>
                    </Styleds.Box>

                    {
                        data&&
                        <Styleds.Box>
                            <ListSimple data={data}/>
                        </Styleds.Box>
                    }

                </Styleds.Content>
            </Styleds.Container>

        </Styleds.Main>
    );
};


const mapStateToProps = (state) => ({collection: state.loginReducer});
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators({...ActionsLogin}, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(PageDashboard);