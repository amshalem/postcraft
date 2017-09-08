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
    ScrollView,
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

class Filter extends Component {
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
                        source={require('../assets/logo-man.png')}>
                    </Image>
                    <Text style={styles.textTop}>SOON</Text>
                    <Text style={styles.textBottom}>OPENING</Text>
                </Image>
                <ScrollView  style={styles.filterToolArea}>
                    <View style={styles.layoutCenter}>
                        <View style={styles.colorDotsArea}>
                            <View style={styles.colorDotItem}>
                                <Text style={styles.textColorDot}>Summer</Text>
                                <Image
                                    style={styles.imgColorDotItem}
                                    source={require('../assets/logo-man.png')}>
                                </Image>
                            </View>
                            <View style={styles.colorDotItem}>
                                <Text style={styles.textColorDot}>Spring</Text>
                                <Image
                                    style={styles.imgColorDotItem}
                                    source={require('../assets/logo-man.png')}>
                                </Image>
                            </View>
                            <View style={styles.colorDotItem}>
                                <Text style={styles.textColorDot}>Winter</Text>
                                <Image
                                    style={styles.imgColorDotItem}
                                    source={require('../assets/logo-man.png')}>
                                </Image>
                            </View>
                            <View style={styles.colorDotItem}>
                                <Text style={styles.textColorDot}>Fall</Text>
                                <Image
                                    style={styles.imgColorDotItem}
                                    source={require('../assets/logo-man.png')}>
                                </Image>
                            </View>
                            <View style={styles.colorDotItem}>
                                <Text style={styles.textColorDot}>Age</Text>
                                <Image
                                    style={styles.imgColorDotItem}
                                    source={require('../assets/logo-man.png')}>
                                </Image>
                            </View>
                        </View>
                        <View style={styles.opacityArea}>
                            
                        </View>
                    </View>
                </ScrollView>
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
        width: width,
        height: 50,
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
    filterToolArea: {
        width: width,
        height: height,
        marginTop: -60,
        backgroundColor: 'white',
    },
    colorDotsArea: {
        width: width - 136,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    colorDotItem: {
        alignItems: 'center',
    },
    textColorDot: {
        color: '#c6cbdf',
        fontSize: 11,
    },
    imgColorDotItem: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
