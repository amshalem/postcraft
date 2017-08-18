import React, { Component } from 'react';
import { Router, Reducer, Scene } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AuthAction from './actions/auth';

import OnBoarding from './components/onboarding';
import Login from './components/login';
import Signup from './components/signup';
import UploadLogo from './components/uploadlogo';
import ChooseBusinessType from './components/choosebusinesstype';
import Profile from './components/profile';
import ProfilePreview from './components/profilepreview';
import PostFeed from './components/postfeed';
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
                <Scene key="onboarding" hideNavBar={true} component={OnBoarding} title="OnBoarding" />
                <Scene key="login" hideNavBar={true} component={Login} title="Login" />
                <Scene key="signup" hideNavBar={true} component={Signup} title="Signup" />
                <Scene key="uploadlogo" hideNavBar={true} component={UploadLogo} title="UploadLogo" />
                <Scene key="choosebusinesstype" hideNavBar={true} component={ChooseBusinessType} title="ChooseBusinessType" />
                <Scene key="profile" hideNavBar={true} component={Profile} title="Profile" />
                <Scene key="profilepreview" hideNavBar={true} component={ProfilePreview} title="ProfilePreview" />
                <Scene key="postfeed" hideNavBar={true} component={PostFeed} title="PostFeed" initial />
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
