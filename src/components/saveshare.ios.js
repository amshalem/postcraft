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

class SaveShare extends Component {
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
                        <Text style={styles.textHeader}>SAVE & SHARE</Text>
                    </View>
                    <View style={[styles.headerRight, styles.layoutCenter]}>
                        <Image
                            style={styles.imgHeaderButton}
                            source={require('../assets/Share.png')}>
                        </Image>                        
                    </View>
                </View>
                <Image
                    style={[styles.imgBg, styles.layoutCenter]}
                    source={require('../assets/logo-man.png')}>
                        <View style={[styles.layoutCenter, styles.imgArea]}>
                            <Image
                                style={styles.imgLogo}
                                source={require('../assets/UserLogoContainer.png')}>
                            </Image>
                            <Text style={styles.textTop}>SOON</Text>
                            <Text style={styles.textBottom}>OPENING</Text>
                            <Image
                                style={styles.imgTagLogo}
                                source={require('../assets/PostcraftNavLogo.png')}></Image>
                        </View>
                </Image>
                <View style={styles.textBox}>
                    <Text style={styles.textPreview}>Social PR Edit Text, quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit.</Text>
                </View>
                <View style={styles.socialMediaBtnArea}>
                    <Image
                        style={styles.socialMediaBtn}
                        source={require('../assets/logo-man.png')}></Image>
                    <Image
                        style={styles.socialMediaBtn}
                        source={require('../assets/logo-man.png')}></Image>
                    <Image
                        style={styles.socialMediaBtn}
                        source={require('../assets/logo-man.png')}></Image>
                    <Image
                        style={styles.socialMediaBtn}
                        source={require('../assets/logo-man.png')}></Image>
                    <Image
                        style={styles.socialMediaBtn}
                        source={require('../assets/logo-man.png')}></Image>
                </View>
                <TouchableOpacity
                    style={[styles.btnFinishArea, styles.layoutCenter]}
                    onPress={() => Actions.finish()}>
                        <LinearGradient
                            start={{x: 0.0, y: 1}}
                            end={{x: 1, y: 1}}
                            colors={['#4ffdd6', '#6ac2ff']}
                            style={[styles.btnFinish, styles.layoutCenter]}>
                            <Text style={styles.btnText}>FINISH & SAVE</Text>
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
    spaceBetween30: {
        marginLeft: 30,
    },
    toolItemSelected: {
        borderColor: '#4feeca',
        borderWidth: 1,
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
        height: 50,
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
    headerRight: {
        flex: 0.15,
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 12,
        color: '#424c61',
        fontWeight: '900',
    },
    imgBg: {
        width: width,
        height: width,
    },
    imgArea: {
        width: width,
        height: width,
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
    imgTagLogo: {
        position: 'absolute',
        left: -20,
        top: 30,
        width: 60,
        height: 20,
        transform: [{rotate: '-90deg'}],
    },
    textBox: {
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
        shadowColor: '#c6cbdf',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.31,
    },
    textPreview: {
        color: '#c6cbdf',
        fontSize: 11,
    },
    socialMediaBtnArea: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 22,
    },
    socialMediaBtn: {
        width: 30,
        height: 30,
    },
    btnFinishArea: {
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    btnFinish: {
        width: width,
        height: 50,
    },
    btnText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 14,
        fontWeight: '800',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveShare);
