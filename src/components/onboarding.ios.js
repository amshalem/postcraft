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
                    source={require('../assets/woman.png')}
                />
                <Image
                    style={styles.txtLogo}
                    source={require('../assets/logo-couple.png')}
                />
                <Image
                    style={styles.btnArea}
                    source={require('../assets/record.png')}>
                        <TouchableOpacity onPress={() => Actions.login()}>
                            <Image
                                style={[styles.buttons, styles.btnLogin]}
                                source={require('../assets/logo-woman.png')}>
                                    <Text style={styles.btnText}>LOGIN</Text>
                            </Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.main()}>
                            <Image
                                style={[styles.buttons, styles.btnSignup]}
                                source={require('../assets/logo-man.png')}>
                                    <Text style={styles.btnText}>SIGNUP</Text>
                            </Image>
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
        width: 170,
        height: 134,
        marginTop: 150,
    },
    txtLogo: {
        width: 260,
        height: 72,
        marginTop: 14,
    },
    btnArea: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: width,
        height: 152,
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

export default connect(mapStateToProps, mapDispatchToProps)(OnBoarding);
