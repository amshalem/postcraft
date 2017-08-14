import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
} from 'react-native';
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

class Signup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
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
                <View style={styles.inputField}>
                    <Kohana
                        style={{ backgroundColor: '#ffffff' }}
                        label={'Phone Number'}
                        iconClass={MaterialsIcon}
                        iconName={'phone'}
                        iconColor={'#c6cbdf'}
                        labelStyle={{ marginLeft: -12, color: '#c6cbdf', fontSize: 20, fontWeight: 'bold' }}
                        inputStyle={{ color: '#c6cbdf' }}
                        secureTextEntry={true}
                        useNativeDrive
                    />
                </View>
                <Text style={styles.signupHint}>When you Ready Champ!</Text>
                <TouchableOpacity onPress={() => Actions.uploadlogo()}>
                    <Image
                        style={[styles.buttons, styles.btnSignup]}
                        source={require('../assets/logo-woman.png')}>
                            <Text style={styles.btnSignupText}>SIGNUP</Text>
                    </Image>
                </TouchableOpacity>
                <View style={styles.btnArea}>
                    <TouchableOpacity onPress={() => Actions.fbLogin()}>
                        <Image
                            style={styles.socialButtons}
                            source={require('../assets/logo-woman.png')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.googleLogin()}>
                        <Image
                            style={styles.socialButtons}
                            source={require('../assets/logo-man.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={[styles.buttons, styles.btnLogin]} onPress={() => Actions.login()}>
                    <Text style={styles.btnLoginText}>LOGIN</Text>
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
        backgroundColor: 'green',
        marginBottom: 68,
    },
    imageLogo: {
        width: 80,
        height: 80,
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
    signupHint: {
        marginTop: 51,
        color: '#4feeca',
        fontSize: 10,
        fontWeight: '500',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnSignup: {
        width: 140,
        height: 40,
        marginTop: 12,
        borderRadius: 20,
    },
    btnSignupText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
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
    btnLogin: {
        position: 'absolute',
        bottom: 0,
        width: 300,
        height: 80,
        marginBottom: -38,
        borderRadius: 40,
        backgroundColor: '#c6cbdf'
    },
    btnLoginText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 40,
        fontWeight: '800',
    },
    login: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 80,
        backgroundColor: 'green',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
