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

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';

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
                <View style={styles.header}>
                    <Image
                        style={styles.imgNavLogo}
                        source={require('../assets/PostcraftNavLogo.png')}>
                    </Image>                    
                </View>
                <Image
                    style={styles.imgTextLogo}
                    source={require('../assets/PostcraftLogo.png')}>
                </Image>
                <Text style={styles.logoHint}>the logo is add automatic to your postcraft</Text>
                <Image
                    style={styles.imageLogo}
                    source={require('../assets/UserLogoContainer.png')}>
                </Image>
                <Text style={styles.continueHint}>When you Ready Champ!</Text>
                <TouchableOpacity onPress={() => Actions.choosebusinesstype()}>
                    <LinearGradient
                        start={{x: 0.0, y: 1}}
                        end={{x: 1, y: 1.0}}
                        colors={['#f050ba', '#88f7f9']}
                        style={[styles.buttons, styles.btnContinue]}>
                        <Text style={styles.btnContinueText}>CONTINUE</Text>
                    </LinearGradient>
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
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    imgNavLogo: {
        width: 150,
        height: 48,
    },
    imgTextLogo: {
        width: 280,
        height: 62,
        marginTop: 60,
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
        marginTop: 11,
        color: '#c6cbdf',
        fontSize: 12,
        fontWeight: '400',
    },
    imageLogo: {
        width: 200,
        height: 200,
        marginTop: 25,
    },
    continueHint: {
        marginTop: 72,
        color: '#4feeca',
        fontSize: 11,
        fontWeight: '400',
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
        shadowColor: '#f050ba',
        shadowOffset: {
            width: -3,
            height: 4,
        },
        shadowOpacity: 0.2,
        },
    btnContinueText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 16,
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
        fontSize: 44,
        fontWeight: '800',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadLogo);
