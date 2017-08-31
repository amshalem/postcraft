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

class TextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'TYPE SOMETHING',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>DOUBLE TAP TO TYPE</Text>
                </View>
                <Image
                    style={[styles.imgBg, styles.layoutCenter]}
                    source={require('../assets/logo-man.png')}>
                        <View style={[styles.imgArea, styles.layoutCenter]}>
                            <Image
                                style={styles.imgLogo}
                                source={require('../assets/UserLogoContainer.png')}>
                            </Image>
                            <Text style={styles.textTop}>SOON</Text>
                            <Text style={styles.textBottom}>OPENING</Text>
                            <TextInput
                                style={styles.textType}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text} />
                        </View>
                </Image>
                <View style={styles.toolTop}></View>
                <View style={styles.toolMiddle}>
                    <View style={styles.toolMiddleLeft}>
                        <Image
                            style={styles.imgMiddleLeftItem}
                            source={require('../assets/TextAlign.png')}></Image>
                        <Image
                            style={styles.imgMiddleLeftItem}
                            source={require('../assets/TextBold.png')}></Image>
                        <Image
                            style={styles.imgMiddleLeftItem}
                            source={require('../assets/TextSpace.png')}></Image>
                    </View>
                    <View style={styles.toolMiddleRight}>
                        <View style={[styles.btnMiddleRightItem, styles.layoutCenter]}>
                            <Image
                                style={styles.imgMiddleRightItem}
                                source={require('../assets/TextStyle.png')}></Image>
                            <Text style={styles.textMiddleRightItem}>Style</Text>
                        </View>
                        <View style={[styles.btnMiddleRightItem, styles.layoutCenter]}>
                            <Image
                                style={styles.imgMiddleRightItem}
                                source={require('../assets/FilterSmallIcon.png')}></Image>
                            <Text style={styles.textMiddleRightItem}>Filter</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.toolBottom}></View>
                <TouchableOpacity
                    style={[styles.btnUndoArea, styles.layoutCenter]}
                    onPress={() => Actions.finish()}>
                        <LinearGradient
                            start={{x: 0.0, y: 1}}
                            end={{x: 1, y: 1}}
                            colors={['#4ffdd6', '#6ac2ff']}
                            style={[styles.btnUndo, styles.layoutCenter]}>
                            <Text style={styles.btnText}>UNDO</Text>
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
    textType: {
        position: 'absolute',
        bottom: 20,
        width: width - 45,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontSize: 28,
        fontWeight: '800',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        borderStyle: 'dotted',
    },
    toolTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
    },
    toolMiddle: {
        flexDirection: 'row',
    },
    toolMiddleLeft: {
        width: width * 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    toolMiddleRight: {
        width: width * 0.6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    btnMiddleRightItem: {
        width: width * 0.25,
        height: 30,
        flexDirection: 'row',
        borderColor: '#c6cbdf',
        borderWidth: 1,
        borderRadius: 3,
    },
    textMiddleRightItem: {
        fontSize: 11,
        fontWeight: '900',
        marginLeft: 10,
    },
    toolbottom: {
        backgroundColor: 'green',
    },
    btnUndoArea: {
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    btnUndo: {
        flexDirection: 'row',
        width: width,
        height: 50,
        justifyContent: 'space-between',
    },
    btnText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 14,
        fontWeight: '800',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);
