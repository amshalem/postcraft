import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    View,
    Image,
} from 'react-native';
import firebase from 'firebase';
import LinearGradient from 'react-native-linear-gradient';

import { Actions, Scene, Router } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';

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

class Login extends Component {
    state = {
        email: '',
        password: '',
        loading: false,
    };

    constructor(props) {
        super(props);
    }

    onLoginClicked() {
        this.setState({
            error: '',
            loading: true,
        });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    error: '',
                    loading: false,
                })
                Actions.profile();
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        this.setState({
                            error: '',
                            loading: false,
                        })
                    })
                    .catch(() => {
                        this.setState({
                            error: 'Authentication failed',
                            loading: false,
                        })
                    })
            })
    }

    onFBClicked() {
        console.log('Facebook Clicked');
    }

    onGoogleClicked() {
        console.log('Google Clicked');
    }

    renderSpinnerOrButton() {
        if (this.state.loading) {
            return <ActivityIndicator size='small' />;
        }
        return (
            <LinearGradient
                start={{x: 0.0, y: 1}}
                end={{x: 1, y: 1.0}}
                colors={['#4ffdd6', '#6ac2ff']}
                style={[styles.buttons, styles.btnLogin]}>
                <Text style={styles.btnLoginText}>LOGIN</Text>
            </LinearGradient>
            );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.imgNavLogo}
                        source={require('../assets/PostcraftNavLogo.png')}>
                    </Image>                    
                </View>
                <Image
                    style={styles.imgLogo}
                    source={require('../assets/UserLogoContainer.png')}
                />
                <View style={styles.inputField}>
                    <Kohana
                        style={{ backgroundColor: '#ffffff' }}
                        label={'Email'}
                        iconClass={MaterialsIcon}
                        iconName={'mail'}
                        iconColor={'#c6cbdf'}
                        labelStyle={{ marginLeft: -12, color: '#c6cbdf', fontSize: 20, fontWeight: 'bold' }}
                        inputStyle={{ color: '#c6cbdf' }}
                        useNativeDrive
                    />
                </View>
                <View style={styles.inputField}>
                    <Kohana
                        style={{ backgroundColor: '#ffffff' }}
                        label={'Password'}
                        iconClass={MaterialsIcon}
                        iconName={'lock'}
                        iconColor={'#c6cbdf'}
                        labelStyle={{ marginLeft: -12, color: '#c6cbdf', fontSize: 20, fontWeight: 'bold' }}
                        inputStyle={{ color: '#c6cbdf' }}
                        secureTextEntry={true}
                        useNativeDrive
                    />
                </View>
                <TouchableOpacity onPress={() => this.onLoginClicked()}>
                    <Text style={styles.textError}>{this.state.error}</Text>
                    {this.renderSpinnerOrButton()}
                </TouchableOpacity>
                <View style={styles.btnArea}>
                    <TouchableOpacity onPress={() => this.onFBClicked()}>
                        <Image
                            style={styles.socialButtons}
                            source={require('../assets/LoginFacebook.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onGoogleClicked()}>
                        <Image
                            style={styles.socialButtons}
                            source={require('../assets/LoginGmail.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.signupHint}>You don't have an account?</Text>
                <TouchableOpacity style={[styles.buttons, styles.btnSignup]} onPress={() => Actions.signup()}>
                    <Text style={styles.btnSignupText}>SIGNUP</Text>
                </TouchableOpacity>
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
    header: {
        width: width,
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    imgNavLogo: {
        width: 150,
        height: 48,
    },
    imgLogo: {
        width: 100,
        height: 100,
        marginBottom: 42,
        marginTop: 18,
    },
    inputField: {
        width: width - 112,
        height: 41,
        marginLeft: 39,
        marginRight: 69,
        marginBottom: 41,
        borderBottomWidth: 3,
        borderBottomColor: '#c6cbdf',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLogin: {
        width: 140,
        height: 40,
        backgroundColor: '#c6cbdf',
        borderRadius: 20,
        shadowColor: '#4feeca',
        shadowOffset: {
            width: -3,
            height: 4,
        },
        shadowOpacity: 0.3,
    },
    btnLoginText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 16,
        fontWeight: '800',
    },
    btnArea: {
        position: 'absolute',
        bottom: 77,
        flexDirection: 'row',
        width: width,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialButtons: {
        width: 30,
        height: 30,
        marginRight: 9,
        borderRadius: 15,
    },
    signupHint: {
        position: 'absolute',
        bottom: 52,
        color: '#4a90e2',
        fontSize: 11,
        fontWeight: '400',
    },
    btnSignup: {
        position: 'absolute',
        bottom: 0,
        width: 300,
        height: 80,
        marginBottom: -38,
        borderRadius: 40,
        backgroundColor: '#c6cbdf'
    },
    btnSignupText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 44,
        fontWeight: '800',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
