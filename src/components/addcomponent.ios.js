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

import LinearGradient from 'react-native-linear-gradient';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import GridView from 'react-native-gridview';

import Icon from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');

let Card = React.createClass({
    render() {
        return (
            <View style={[styles.card]}>
            </View>
        );
    }
})

const Cards = [{imgUrl: require('../assets/CloseExit.png')}];

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

function handleYup(card) {
    console.log('Yup');
}

function handleNope(card) {
    console.log('Nope');
}

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Cards,
        }
    }

    onUndoClicked() {
        console.log('Undo Clicked');
    }

    onCopyClicked() {
        console.log('Copy Clicked');
    }

    onFlipClicked() {
        console.log('Flip Clicked');
    }

    onRedoClicked() {
        console.log('Redo Clicked');
    }

    onAddTextClicked() {
        console.log('Add Text Clicked');
    }

    onAddPhotoClicked() {
        console.log('Add Photo Clicked');
    }

    onCraftStockClicked() {
        console.log(' Craft Stock Clicked');
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
                        <Image
                            style={styles.imgNavLogo}
                            source={require('../assets/PostcraftNavLogo.png')}>
                        </Image>
                    </View>
                    <View style={[styles.headerRight, styles.layoutCenter]}>
                        <Image
                            style={styles.imgHeaderButton}
                            source={require('../assets/Share.png')}>
                        </Image>                        
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
                <View style={styles.toolTop}>
                    <View style={[styles.toolTopLeft, styles.layoutCenter]}>
                        <TouchableOpacity onPress={() => this.onUndoClicked()}>
                            <Image
                                style={styles.imgToolTop}
                                source={require('../assets/UndoD.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.toolTopMiddle, styles.layoutCenter]}>
                        <TouchableOpacity onPress={() => this.onCopyClicked()}>
                            <Image
                                style={styles.imgToolTop}
                                source={require('../assets/CopyD.png')}>
                            </Image>
                        </TouchableOpacity>    
                        <TouchableOpacity onPress={() => this.onFlipClicked()}>
                            <Image
                                style={[styles.imgToolTop, styles.spaceBetween30]}
                                source={require('../assets/Flip.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.toolTopRight, styles.layoutCenter]}>
                        <TouchableOpacity onPress={() => this.onRedoClicked()}>
                            <Image
                                style={styles.imgToolTop}
                                source={require('../assets/RedoD.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.toolBottom}>
                    <View style={styles.toolBottomTop}>
                        <TouchableOpacity onPress={() => this.onAddTextClicked()}>
                            <View style={styles.toolBottomTopItem}>
                                <Image
                                    resizeMode="stretch"
                                    style={styles.btnToolBottomTop}
                                    source={require('../assets/AddText.png')}>
                                </Image>
                                <Text style={styles.textToolBottomTop}>Add Text</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onAddPhotoClicked()}>
                            <View
                                style={styles.toolBottomTopItem}>
                                <Image
                                    resizeMode="stretch"
                                    style={styles.btnToolBottomTop}
                                    source={require('../assets/AddPhoto.png')}>
                                </Image>
                                <Text style={styles.textToolBottomTop}>Add Photo</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onCraftStockClicked()}>
                            <View style={styles.toolBottomTopItem}>
                                <Image
                                resizeMode="stretch"
                                    style={styles.btnToolBottomTop}
                                    source={require('../assets/AddFromStock.png')}>
                                </Image>
                                <Text style={styles.textToolBottomTop}>CraftStock</Text>
                            </View>
                        </TouchableOpacity>
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
                        <TouchableOpacity onPress={() => Actions.cross()}>
                            <LinearGradient
                                start={{x: 0.5, y: 1}}
                                end={{x: 0, y: 0}}
                                colors={['#4ffdd6', '#6ac2ff']}
                                style={[styles.btnCross]}>
                                    <Text style={styles.btnCrossText}>x</Text>
                            </LinearGradient>
                        </TouchableOpacity>
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
    imgNavLogo: {
        width: 100,
        height: 40,
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
    toolTop: {
        flexDirection: 'row',
        width: width,
        height: 57,
        borderBottomWidth: 1,
        borderBottomColor: '#50e3c2',
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
        paddingTop: 25,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 25,
        borderBottomColor: '#50e3c2',
        borderBottomWidth: 1,
    },
    toolBottomTopItem: {
        alignItems: 'center',
    },
    btnToolBottomTop: {
        width: 20,
        height: 20,
        // marginTop: 18,
        borderColor: '#c6cbdf',
    },
    textToolBottomTop: {
        marginTop: 5,
        color: '#424c61',
        fontSize: 12,
    },
    toolBottomBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
    },
    toolBottomBottomItem: {
        width: 52,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        backgroundColor: '#c6cbdf',
        borderRadius: 5,
        opacity: 0.1,
    },
    imgToolBottomBottomItem: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    btnCross: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 15,
        borderRadius: 15,
        borderColor: '#4feeca',
    },
    btnCrossText: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '300',
    },
    card: {
        width: 50,
        height: 50,
    },
    textPlus: {
        fontSize: 20,
        color: '#4feeca',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);
