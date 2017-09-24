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
import LinearGradient from 'react-native-linear-gradient';

import { Actions, Scene, Router } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import GridView from 'react-native-gridview';

import ValueSlider from '../widgets/ValueSlider';

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
        this.state = {
            opacityValue: 0.2,
            saturationValue: 0.3,
            brightnessValue: 0.5,
            blurBalue: 0.7,
        };
    }

    onUndoClicked() {
        console.log('Undo Clicked');
    }

    onMultiplyClicked() {
        console.log('Multiply Clicked');
    }

    onOverlayClicked() {
        console.log('Overlay Clicked');
    }

    onSoftlightClicked() {
        console.log('Softlight Clicked');
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
                        source={require('../assets/UserLogoContainer.png')}>
                    </Image>
                    <Text style={styles.textTop}>SOON</Text>
                    <Text style={styles.textBottom}>OPENING</Text>
                </Image>
                <ScrollView  style={styles.filterToolArea}>
                    <View style={styles.layoutCenter}>
                        <View style={styles.colorDotsArea}>
                            <View style={styles.colorDotItem}>
                                <Text style={styles.textColorDot}>Summer</Text>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.5}}
                                    end={{x: 0, y: 1.0}}
                                    colors={['#fad961', '#f76b1c']}
                                    style={[styles.imgColorDotItem]}>
                                </LinearGradient>
                            </View>
                            <View style={styles.colorDotItem}>
                                <Text style={styles.textColorDot}>Spring</Text>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.5}}
                                    end={{x: 0, y: 1.0}}
                                    colors={['#3023ae', '#c86dd7']}
                                    style={[styles.imgColorDotItem]}>
                                </LinearGradient>
                            </View>
                            <View style={styles.colorDotItem}>
                                <Text style={styles.textColorDot}>Winter</Text>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.5}}
                                    end={{x: 0, y: 1.0}}
                                    colors={['#557599', '#99b9db']}
                                    style={[styles.imgColorDotItem]}>
                                </LinearGradient>
                            </View>
                            <View style={styles.colorDotItem}>
                                <Text style={styles.textColorDot}>Fall</Text>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.5}}
                                    end={{x: 0, y: 1.0}}
                                    colors={['#1c242d', '#e20098']}
                                    style={[styles.imgColorDotItem]}>
                                </LinearGradient>
                            </View>
                            <View style={styles.colorDotItem}>
                                <Text style={styles.textColorDot}>Age</Text>
                                <LinearGradient
                                    start={{x: 0.0, y: 0.5}}
                                    end={{x: 0, y: 1.0}}
                                    colors={['#6ac2ff', '#4ffdd6']}
                                    style={[styles.imgColorDotItem]}>
                                </LinearGradient>
                            </View>
                        </View>
                        <View style={styles.sliderArea}>
                            <ValueSlider
                                trackColor="#c6cbdf"
                                thumbStyle={styles.grayThumbStyle}
                                thumbText="Opacity"
                                value={this.state.opacityValue}
                                onValueChange={(value) => this.setState({value})} />
                        </View>
                        <View style={styles.optionArea}>
                            <TouchableOpacity onPress={() => this.onMultiplyClicked()}>
                                <View style={styles.optionBox}>
                                    <Text style={styles.btnText}>Multiply</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.onOverlayClicked()}>
                                <View style={styles.optionBox}>
                                    <Text style={styles.btnText}>Overlay</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.onSoftlightClicked()}>
                                <View style={styles.optionBox}>
                                    <Text style={styles.btnText}>Softlight</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.sliderArea}>
                            <ValueSlider
                                trackColor="#50e3c2"
                                thumbStyle={styles.greenThumbStyle}
                                thumbText="Saturation"
                                value={this.state.saturationValue}
                                onValueChange={(value) => this.setState({value})} />
                        </View>
                        <View style={styles.sliderArea}>
                            <ValueSlider
                                trackColor="#50e3c2"
                                thumbStyle={styles.greenThumbStyle}
                                thumbText="Brightness"
                                value={this.state.brightnessValue}
                                onValueChange={(value) => this.setState({value})} />
                        </View>
                        <View style={styles.sliderArea}>
                            <ValueSlider
                                trackColor="#c6cbdf"
                                thumbStyle={styles.grayThumbStyle}
                                thumbText="Blur"
                                value={this.state.BlurValue}
                                onValueChange={(value) => this.setState({value})} />
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => this.onUndoClicked()}>
                    <LinearGradient
                        start={{x: 0.0, y: 1}}
                        end={{x: 1, y: 1.0}}
                        colors={['#4ffdd6', '#6ac2ff']}
                        style={styles.btnUndo}>
                        <Text style={styles.btnUndoText}>UNDO</Text>
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
        marginTop: 10,
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
    optionArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        width: width - 50,
        height: 30,
    },
    optionBox: {
        width: 100,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#c6cbdf',
    },
    btnText: {
        fontSize: 12,
        color: '#424c61',
        fontWeight: '900',
    },
    sliderArea: {
        marginTop: 20,
        marginBottom: 10,
        width: width - 80,
        height: 30,
    },
    grayThumbStyle: {
        width: 100,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#c6cbdf',
    },
    greenThumbStyle: {
        width: 100,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#50e3c2',
    },
    btnUndo: {
        width: width,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnUndoText: {
        backgroundColor: 'transparent',
        fontSize: 14,
        color: 'white',
        fontWeight: '900',
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
