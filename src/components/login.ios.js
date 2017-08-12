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

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
                <Image
                    style={styles.imageLogo}
                    source={require('../assets/songs.png')}
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
                        labelStyle={{ marginLeft: -12, color: '#c6cbdf', fontSize: 24, fontWeight: 'bold' }}
                        inputStyle={{ color: '#c6cbdf' }}
                        secureTextEntry={true}
                        useNativeDrive
                    />
                </View>
                <TouchableOpacity onPress={() => Actions.login()}>
                    <Image
                        style={[styles.buttons, styles.btnLogin]}
                        source={require('../assets/logo-woman.png')}>
                            <Text style={styles.btnText}>LOGIN</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttons, styles.btnSignup]} onPress={() => Actions.main()}>
                    <Text style={styles.btnText}>SIGNUP</Text>
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
    buttons: {
        width: 140,
        height: 40,
        marginBottom: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    btnSignup: {
        backgroundColor: '#c6cbdf'
    },
    btnText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: '600',
    },
    login: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 80,
        backgroundColor: 'green',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
