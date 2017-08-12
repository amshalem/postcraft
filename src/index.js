import React, { Component } from 'react';
import { Router, Reducer, Scene } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthAction from './actions/auth';

import OnBoarding from './components/onboarding';
import Login from './components/login';
import Main from './components/main';
import Sub from './components/sub';
import Sub1 from './components/sub1';
import Sub2 from './components/sub2';
import Sub3 from './components/sub3';

// map redux store to props
function mapStateToProps(state) {
    return {
        auth: state.auth,
    }
}

// map actions to props
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            Auth: bindActionCreators(AuthAction, dispatch),
        }
    }
}

const reducerCreate = params => {
    const defaultReducer = Reducer(params);

    return (state, action) => {
        console.log("ROUTER ACTION: ", action);
        return defaultReducer(state, action);
    }
}


export default class postcraft extends Component {
    render() {
        return(
            <Router createReducer={reducerCreate}>
                <Scene key="root">
                <Scene key="onboarding" hideNavBar={true} component={OnBoarding} title="OnBoarding" initial />
                <Scene key="login" component={Login} title="Login" />
                <Scene key="main" component={Main} title="Main" />
                <Scene key="sub" component={Sub} title="Annalisa Giangregorio" />
                <Scene key="sub1" component={Sub1} title="Annalisa Giangregorio" />
                <Scene key="sub2" component={Sub2} title="Telekinesis" />
                <Scene key="sub3" component={Sub3} title="Fly Moon Royalty" />
                </Scene>
            </Router>
        );
    }
}