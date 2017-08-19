import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Actions, Scene, Router } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

var {height, width} = Dimensions.get('window');

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

class OnBoarding extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imgLogo}
                    source={require('../assets/postcraft-symbol-logo.png')}
                />
                <Image
                    style={styles.btnArea}
                    source={require('../assets/Artboard.png')}>
                        <TouchableOpacity onPress={() => Actions.login()}>
                            <LinearGradient
                                start={{x: 0.0, y: 1}}
                                end={{x: 1, y: 1.0}}
                                colors={['#4ffdd6', '#6ac2ff']}
                                style={[styles.buttons, styles.btnLogin]}>
                                <Text style={styles.btnText}>LOGIN</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.signup()}>
                            <LinearGradient
                                start={{x: 0.0, y: 1}}
                                end={{x: 1, y: 1.0}}
                                colors={['#f050ba', '#88f7f9']}
                                style={[styles.buttons, styles.btnSignup]}>
                                <Text style={styles.btnText}>SIGNUP</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    imgLogo: {
        width: 262,
        height: 219,
        marginTop: 150,
    },
    btnArea: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: width,
        height: 156,
        paddingLeft: 34,
        paddingRight: 34,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    buttons: {
        width: 140,
        height: 40,
        marginBottom: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    btnLogin: {
        shadowColor: '#4feeca',
        shadowOffset: {
            width: -3,
            height: 4,
        },
        shadowOpacity: 0.27,
    },
    btnSignup: {
        shadowColor: '#f050ba',
        shadowOffset: {
            width: -3,
            height: 4,
        },
        shadowOpacity: 0.2,
    },
    btnText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: '600',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(OnBoarding);
