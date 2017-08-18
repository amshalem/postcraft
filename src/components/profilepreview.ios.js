import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ListView,
    Image,
} from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import GridView from 'react-native-gridview';

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

class ProfilePreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
                <Image
                    style={styles.imgBg}
                    source={require('../assets/logo-man.png')}>
                    <Image
                        style={styles.imgLogo}
                        source={require('../assets/logo-woman.png')}>
                    </Image>
                    <Text style={styles.textTop}>SOON</Text>
                    <Text style={styles.textBottom}>OPENING</Text>
                </Image>
                <View style={styles.space}></View>
                <View style={styles.previewTextBox}>
                    <Text style={styles.textPreview}>Social PR Edit Text, quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit.</Text>
                </View>
                <TouchableOpacity onPress={() => Actions.copynedit()}>
                    <Image
                        style={[styles.buttons, styles.btnCopynedit]}
                        source={require('../assets/logo-woman.png')}>
                            <Text style={styles.btnText}>COPY & EDIT</Text>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.delete()}>
                    <Image
                        style={[styles.buttons, styles.btnDelete]}
                        source={require('../assets/logo-woman.png')}>
                            <Text style={styles.btnText}>DELETE</Text>
                    </Image>
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
        height: 75,
        backgroundColor: 'green',
    },
    imgBg: {
        width: width,
        height: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgLogo: {
        width: 60,
        height: 60,
    },
    textTop: {
        marginTop: 5,
        fontSize: 28,
        color: '#f050ba',
        fontWeight: '900',
        backgroundColor: 'transparent',
    },
    textBottom: {
        marginTop: -10,
        fontSize: 56,
        color: '#f050ba',
        fontWeight: '800',
        backgroundColor: 'transparent',
    },
    space: {
        width: width,
        height: 5,
        backgroundColor: '#c6cbdf',
    },
    previewTextBox: {
        width: 300,
        height: 90,
        marginTop: 25,
        paddingTop: 14,
        paddingLeft: 10,
        paddingRight: 10,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        borderColor: '#c6cbdf',
    },
    textPreview: {
        color: '#c6cbdf',
        fontSize: 11,
    },
    buttons: {
        width: 140,
        height: 40,
        position: 'absolute',
        bottom: -70,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCopynedit: {
        left: - width / 2 + 35,
    },
    btnText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 16,
        fontWeight: '800',
    },
    btnDelete: {
        right: - width / 2 + 35,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePreview);
