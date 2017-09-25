import React from 'react';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

import config from '../lib/config';

const {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} = require('../lib/constants').default;

const firebaseApp = firebase.initializeApp(config.firebaseConfig);

export function loginWithMobile(item) {
    return dispatch => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: item },
        })
    }
}
