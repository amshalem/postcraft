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

class UploadLogo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
                <Text style={styles.textLogoTop}>UPLOAD</Text>
                <Text style={styles.textLogoBottom}>YOUR LOGO</Text>
                <Text style={styles.logoHint}>the logo is add automatic to your postcraft</Text>
                <Image
                    style={styles.imageLogo}
                    source={require('../assets/logo-woman.png')}>
                </Image>
                <Text style={styles.continueHint}>When you Ready Champ!</Text>
                <TouchableOpacity onPress={() => Actions.signup()}>
                    <Image
                        style={[styles.buttons, styles.btnContinue]}
                        source={require('../assets/logo-woman.png')}>
                            <Text style={styles.btnContinueText}>CONTINUE</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttons, styles.btnLater]} onPress={() => Actions.login()}>
                    <Text style={styles.btnLaterText}>LATER</Text>
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
    textLogoTop: {
        color: '#4feeca',
        fontSize: 46,
        fontWeight: '900',
    },
    textLogoBottom: {
        marginTop: -10,
        color: '#4feeca',
        fontSize: 32,
        fontWeight: '900',
    },
    logoHint: {
        marginTop: 10,
        color: '#c6cbdf',
        fontSize: 12,
        fontWeight: '600',
    },
    imageLogo: {
        width: 180,
        height: 180,
        marginTop: 39,
    },
    continueHint: {
        marginTop: 72,
        color: '#4feeca',
        fontSize: 10,
        fontWeight: '500',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContinue: {
        width: 140,
        height: 40,
        marginTop: 12,
        borderRadius: 20,
    },
    btnContinueText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
    },
    btnLater: {
        position: 'absolute',
        bottom: 0,
        width: 300,
        height: 80,
        marginBottom: -38,
        borderRadius: 40,
        backgroundColor: '#c6cbdf'
    },
    btnLaterText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 40,
        fontWeight: '800',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadLogo);
