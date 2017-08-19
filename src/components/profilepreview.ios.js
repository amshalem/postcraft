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
import LinearGradient from 'react-native-linear-gradient';

import { Actions, Scene, Router } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import GridView from 'react-native-gridview';

import Icon from 'react-native-vector-icons/FontAwesome';

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
                <View style={styles.header}>
                    <View style={[styles.headerLeft, styles.layoutCenter]}>
                        <Image
                            style={styles.imgHeaderButton}
                            source={require('../assets/CloseExit.png')}>
                        </Image>
                    </View>
                    <View style={styles.headerMiddle}>
                        <Text style={styles.textHeader}>VINTAGE ICECREAM</Text>
                    </View>
                    <View style={[styles.headerRight, styles.layoutCenter]}>
                        <Icon name="upload" size={22} color="#000" />
                    </View>
                </View>
                <Image
                    style={styles.imgBg}
                    source={require('../assets/logo-man.png')}>
                    <Image
                        style={styles.imgLogo}
                        source={require('../assets/UserLogoContainer.png')}>
                    </Image>
                    <Text style={styles.textTop}>SOON</Text>
                    <Text style={styles.textBottom}>OPENING</Text>
                </Image>
                <View style={styles.space}></View>
                <View style={styles.previewTextBox}>
                    <Text style={styles.textPreview}>Social PR Edit Text, quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit.</Text>
                </View>
                <TouchableOpacity onPress={() => Actions.copynedit()}>
                    <LinearGradient
                        start={{x: 0.0, y: 1}}
                        end={{x: 1, y: 1.0}}
                        colors={['#4ffdd6', '#6ac2ff']}
                        style={[styles.buttons, styles.btnCopynedit]}>
                        <Text style={styles.btnText}>COPY & EDIT</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Actions.delete()}>
                    <LinearGradient
                        start={{x: 0.0, y: 1}}
                        end={{x: 1, y: 1.0}}
                        colors={['#f85a6e', '#f36e7f']}
                        style={[styles.buttons, styles.btnDelete]}>
                        <Text style={styles.btnText}>DELETE</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layoutCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        width: width,
        height: 64,
    },
    headerLeft: {
        flex: 0.15,
    },
    imgHeaderButton: {
        width: 17,
        height: 17,
    },
    headerMiddle: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        fontSize: 12,
        color: '#424c61',
        fontWeight: '900',
        textAlign: 'center',
    },
    headerRight: {
        flex: 0.15,
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
        shadowColor: '#4feeca',
        shadowOffset: {
            width: -3,
            height: 4,
        },
        shadowOpacity: 0.3,
    },
    btnText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 14,
        fontWeight: '800',
    },
    btnDelete: {
        right: - width / 2 + 35,
        shadowColor: '#c6cbdf',
        shadowOffset: {
            width: -3,
            height: 4,
        },
        shadowOpacity: 0.3,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePreview);
