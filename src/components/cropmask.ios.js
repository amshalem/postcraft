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

class CropMask extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>CROP/MASK</Text>
                </View>
                <Image
                    style={[styles.imgBg, styles.layoutCenter]}
                    source={require('../assets/logo-man.png')}>
                        <View style={[styles.cropArea, styles.layoutCenter]}>
                            <Image
                                style={[styles.btnCrop, styles.btnCropTop]}
                                source={require('../assets/CropBtn.png')}>
                            </Image>
                            <Image
                                style={[styles.btnCrop, styles.btnCropBottom]}
                                source={require('../assets/CropBtn.png')}>
                            </Image>
                            <Image
                                style={[styles.btnCrop, styles.btnCropLeft]}
                                source={require('../assets/CropBtn.png')}>
                            </Image>
                            <Image
                                style={[styles.btnCrop, styles.btnCropRight]}
                                source={require('../assets/CropBtn.png')}>
                            </Image>
                            <Image
                                style={styles.imgLogo}
                                source={require('../assets/UserLogoContainer.png')}>
                            </Image>
                            <Text style={styles.textTop}>SOON</Text>
                            <Text style={styles.textBottom}>OPENING</Text>
                        </View>
                </Image>
                <View style={styles.toolTop}>
                    <View style={[styles.toolTopLeft, styles.layoutCenter]}>
                        <Image
                            style={styles.imgToolTop}
                            source={require('../assets/Undo.png')}>
                        </Image>
                    </View>
                    <View style={[styles.toolTopMiddle, styles.layoutCenter]}>
                        <Image
                            style={styles.imgToolTop}
                            source={require('../assets/Copy.png')}>
                        </Image>
                        <Image
                            style={[styles.imgToolTop, styles.spaceBetween30]}
                            source={require('../assets/Flip.png')}>
                        </Image>
                    </View>
                    <View style={[styles.toolTopRight, styles.layoutCenter]}>
                        <Image
                            style={styles.imgToolTop}
                            source={require('../assets/RedoD.png')}>
                        </Image>
                    </View>
                </View>
                <View style={styles.toolBottom}>
                    <View style={styles.toolBottomTop}>
                        <View style={styles.toolBottomTopItem}>
                            <Image
                                style={styles.btnToolBottomTop}
                                source={require('../assets/Close.png')}>
                            </Image>
                            <Text style={styles.textToolBottomTop}>Close</Text>
                        </View>
                        <View
                            style={styles.toolBottomTopItem}>
                            <Image
                                style={styles.btnToolBottomTop}
                                source={require('../assets/CropRectActive.png')}>
                            </Image>
                            <Text style={styles.textToolBottomTop}>Rectangle</Text>
                        </View>
                        <View style={styles.toolBottomTopItem}>
                            <Image
                                style={styles.btnToolBottomTop}
                                source={require('../assets/CropMaskCircle.png')}>
                            </Image>
                            <Text style={styles.textToolBottomTop}>Circle</Text>
                        </View>
                        <View style={styles.toolBottomTopItem}>
                            <Image
                                style={styles.btnToolBottomTop}
                                source={require('../assets/CropMaskTrin.png')}>
                            </Image>
                            <Text style={styles.textToolBottomTop}>Tringale</Text>
                        </View>
                        <View style={styles.toolBottomTopItem}>
                        </View>
                    </View>
                    <View style={styles.toolBottomBottom}>
                        <View style={[styles.toolBottomBottomItem, styles.toolItemSelected]}>
                            <Image
                                style={styles.imgToolBottomBottomItem}
                                source={require('../assets/logo-man.png')}>
                            </Image>
                        </View>
                        <View style={styles.toolBottomBottomItem}>
                        </View>
                        <View style={styles.toolBottomBottomItem}>
                            <Image
                                style={styles.imgToolBottomBottomItem}
                                source={require('../assets/UserLogoContainer.png')}>
                            </Image>
                        </View>
                        <View style={styles.btnPlus}>
                            <Text style={styles.textPlus}>+</Text>
                        </View>
                    </View>
                </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
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
    cropArea: {
        width: width - 10,
        height: width - 10,
        borderRadius: 5,
        borderColor: '#424c61',
        borderWidth: 1,
        borderStyle: 'dotted',
    },
    btnCrop: {
        width: 36,
        height: 8,
    },
    btnCropTop: {
        position: 'absolute',
        top: 10,
        left: width / 2 - 18,
    },
    btnCropBottom: {
        position: 'absolute',
        bottom: 10,
        left: width /2 - 18,
    },
    btnCropLeft: {
        position: 'absolute',
        left: 1,
        top: width / 2 - 18,
        transform: [{rotate: '90deg'}],
    },
    btnCropRight: {
        position: 'absolute',
        right: 1,
        top: width / 2 - 18,
        transform: [{rotate: '90deg'}],
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
    toolTop: {
        flexDirection: 'row',
        width: width,
        height: 57,
        borderBottomWidth: 1,
        borderBottomColor: '#c6cbdf',
    },
    toolTopLeft: {
        flex: 0.15,
    },
    toolTopMiddle: {
        flex: 0.7,
        flexDirection: 'row',
    },
    imgToolTop: {
        width: 15,
        height: 15,
    },
    toolTopRight: {
        flex: 0.15,
    },
    toolBottom: {
    },
    toolBottomTop: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    toolBottomTopItem: {
        alignItems: 'center',
    },
    btnToolBottomTop: {
        width: 50,
        height: 50,
    },
    textToolBottomTop: {
        marginTop: 5,
        color: '#c6cbdf',
        fontSize: 12,
    },
    toolBottomBottom: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    toolBottomBottomItem: {
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        backgroundColor: '#c6cbdf',
        borderRadius: 5,
    },
    imgToolBottomBottomItem: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    btnPlus: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#4feeca',
    },
    textPlus: {
        fontSize: 20,
        color: '#4feeca',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CropMask);
