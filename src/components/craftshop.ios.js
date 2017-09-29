import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    ListView,
    Image,
    ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Actions, Scene, Router } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import GridView from 'react-native-gridview';

var {height, width} = Dimensions.get('window');

const postData = [
    {name: '', image: require('../assets/logo-man.png'), logoImage: require('../assets/UserLogoContainer.png'), titleTop: 'SOON', titleBottom: 'OPENING'},
    {name: '', image: null, logoImage: null, titleTop: '', titleBottom: ''},
    {name: '', image: null, logoImage: null, titleTop: '', titleBottom: ''},
    {name: '', image: null, logoImage: null, titleTop: '', titleBottom: ''},
    {name: '', image: null, logoImage: null, titleTop: '', titleBottom: ''},
    {name: '', image: null, logoImage: null, titleTop: '', titleBottom: ''}];

// const dataSource = new GridView.DataSource({
//     rowHasChanged: (r1, r2) => r1 !== r2,
// }).cloneWithRows(postData);

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

class CraftShop extends Component {
    constructor(props) {
        super(props);
        const ds = new GridView.DataSource({
            rowHasChanged: (r1, r2) => rq != r2
        });
        this.state = {
            tabIndex: 0,
            dataSource: ds.cloneWithRows(postData),
            text: '',
        };
    }

    onCloseClicked() {
        console.log('Close Clicked');
        Actions.viewpost();
    }

    onShareClicked() {
        console.log('Share Clicked');
    }

    onStockClicked() {
        console.log('Stock Clicked');
        this.setState({
            tabIndex: 0,
        })
    }

    onFilterClicked() {
        console.log('Filter Clicked');
        this.setState({
            tabIndex: 1,
        })
    }

    onCropClicked() {
        console.log('Crop Clicked');
        this.setState({
            tabIndex: 2,
        });
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

    onFocusClicked() {
        console.log('Focus Clicked');
    }

    onColorPickerClicked() {
        console.log('Color Picker Clicked');
    }

    onGridStockClicked() {
        console.log('Grid Stock Clicked');
    }

    onPostItemClicked() {
        Actions.viewpost();
    }
    
    onPlusClicked() {
        console.log('Plus Clicked');
    }
    
    onCameraRollClicked() {
        console.log('Camera Roll Clicked');
    }

    filterSearch(text) {
        const newData = postData.filter(function(item) {
            const itemData = item.name.toUpperCase()
            const textData = text
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }

    onBtnPlusClicked() {
        console.log('Plus Clicked');
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.header}>
                    <View style={[styles.headerLeft, styles.layoutCenter]}>
                        <TouchableOpacity onPress={() => this.onCloseClicked()}>
                            <IonIcon name="ios-close" size={32} style={styles.iconHeader} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerMiddle}>
                        <Image
                            style={styles.imgNavLogo}
                            source={require('../assets/PostcraftNavLogo.png')}>
                        </Image>
                    </View>
                    <View style={[styles.headerRight, styles.layoutCenter]}>
                        <TouchableOpacity onPress={() => this.onShareClicked()}>
                            <Image
                                style={styles.imgHeaderButton}
                                source={require('../assets/Share.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <ImageBackground
                    style={styles.imgBg}
                    source={require('../assets/logo-man.png')}>
                    <Image
                        style={styles.imgLogo}
                        source={require('../assets/UserLogoContainer.png')}>
                    </Image>
                    <Text style={styles.textTop}>SOON</Text>
                    <Text style={styles.textBottom}>OPENING</Text>
                </ImageBackground>
                <View style={styles.toolTop}>
                    <View style={[styles.toolTopLeft, styles.layoutCenter]}>
                        <TouchableOpacity
                            style={{flexDirection: 'row'}}
                            onPress={() => this.onStockClicked()}>
                            <IonIcon name="ios-cloud-outline" size={22} style={styles.activeColor} />
                            <Text style={styles.textToolTop}>STOCK</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.toolTopMiddle, styles.layoutCenter]}>
                        <TouchableOpacity
                            style={{flexDirection: 'row'}}
                            onPress={() => this.onFilterClicked()}>
                            <IonIcon name="ios-color-wand-outline" size={22} style={[styles.rotate90, styles.disabledColor]} />
                            <Text style={styles.textToolTopD}>FILTER</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.toolTopRight, styles.layoutCenter]}>
                        <TouchableOpacity
                            style={{flexDirection: 'row'}}
                            onPress={() => this.onCropClicked()}>
                            <IonIcon name="ios-crop-outline" size={22} style={[styles.rotate90, styles.disabledColor]} />
                            <Text style={styles.textToolTopD}>CROP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    (this.state.tabIndex == 0) ?
                        (
                            <View style={[styles.tabContent, styles.stockContent]}>
                                <View style={styles.stockTop}>
                                    <View style={styles.searchBox}>
                                        <Icon name="search" size={14} color="#000" style={styles.searchIcon} />
                                        <TextInput
                                            style={styles.searchInput}
                                            onChangeText={(text) => this.filterSearch(text)}
                                            value={this.state.text}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.onCameraRollClicked()}>
                                        <View style={[styles.cameraRollBox, styles.layoutCenter]}>
                                            <Text style={[styles.textCameraRoll, styles.disabledColor]}>Camera Roll</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <ListView
                                    enableEmptySections={true}
                                    contentContainerStyle={styles.list}
                                    dataSource={this.state.dataSource}
                                    renderRow={(data) => {
                                        return (
                                            <TouchableOpacity onPress={() => this.onPostItemClicked()}>
                                                <ImageBackground
                                                    style={styles.listItem}
                                                    source={data.image}>
                                                        <Image
                                                            style={styles.imgListItem}
                                                            source={data.logoImage}>
                                                        </Image>
                                                        <Text style={styles.textListItemTop}>{data.titleTop}</Text>
                                                        <Text style={styles.textListItemBottom}>{data.titleBottom}</Text>
                                                </ImageBackground>
                                            </TouchableOpacity>
                                        );
                                    }}
                                />
                                <TouchableOpacity onPress={() => this.onBtnPlusClicked()}>
                                    <LinearGradient
                                        start={{x: 0.0, y: 0.25}}
                                        end={{x: 0.5, y: 0.5}}
                                        colors={['#4ffdd6', '#6ac2ff']}
                                        style={[styles.layoutCenter, styles.btnPlus]}>
                                            <Text style={styles.btnPlusText}>+</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        )
                        : null
                }
                {
                    (this.state.tabIndex == 1) ?
                        <View style={[styles.tabContent, styles.filterContent]}></View>
                        : null
                }
                {
                    (this.state.tabIndex == 2) ?
                        <View style={[styles.tabContent, styles.cropContent]}></View>
                        : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rotate90: {
        transform: [{
            rotate: '90deg'
        }],
    },
    activeColor: {
        color: '#424c61',
    },
    disabledColor: {
        color: '#c6cbdf',
    },
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
    },
    header: {
        flexDirection: 'row',
        width: width,
        height: 50,
    },
    headerLeft: {
        flex: 0.15,
    },
    iconHeader: {
        color: '#424c61',
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
        height: 29,
        borderTopWidth: 1,
        borderTopColor: '#424c61',
        borderBottomWidth: 1,
        borderBottomColor: '#424c61',
    },
    toolTopLeft: {
        flex: 1,
        flexDirection: 'row',
    },
    toolTopMiddle: {
        flex: 1,
        flexDirection: 'row',
    },
    toolTopRight: {
        flex: 1,
        flexDirection: 'row',
    },
    imgToolTopW: {
        width: 16,
        height: 15,
    },
    imgToolTopR: {
        width: 15,
        height: 15,
    },
    textToolTop: {
        marginLeft: 5,
        marginTop: 4,
        color: '#424c61',
        fontSize: 12,
        fontWeight: '600',
    },
    textToolTopD: {
        marginLeft: 5,
        marginTop: 4,
        color: '#c6cbdf',
        fontSize: 12,
        fontWeight: '600',
    },
    tabContent: {
        width: width,
        height: height,
    },
    stockContent: {
        backgroundColor: 'white',
    },
    stockTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    searchBox: {
        width: width / 2,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#cecece',
    },
    searchIcon: {
        height: 28,
        padding: 5,
    },
    cameraRollBox: {
        width: width / 3,
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c6cbdf'
    },
    textCameraRoll: {
        fontSize: 12,
        fontWeight: '600',
    },
    searchInput: {
        height: 30,
        width: width / 2 - 50,
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        height: height - width - 800,
        justifyContent: 'center',
        marginTop: 5,
    },
    listItem: {
        height: (width - 60) / 3,
        width: (width - 60) / 3,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#e5e6e9',
        borderRadius: 5,
        shadowColor: '#c6cbdf',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.31,
    },
    imgListItem: {
        width: 30,
        height: 30,
    },
    textListItemTop: {
        marginTop: 5,
        fontSize: 12,
        color: '#f050ba',
        fontWeight: '900',
        backgroundColor: 'transparent',
    },
    textListItemBottom: {
        marginTop: -5,
        fontSize: 20,
        color: '#f050ba',
        fontWeight: '800',
        backgroundColor: 'transparent',
    },
    itemName: {
        color: '#c6cbdf',
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',
    },
    btnPlus: {
        position: 'absolute',
        bottom: 405,
        right: -50,
        width: 100,
        height: 100,
        borderRadius: 69,
    },
    btnPlusText: {
        marginLeft: -40,
        marginTop: -40,
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 32,
        fontWeight: '300',
    },
    filterContent: {
        backgroundColor: 'red',
    },
    cropContent: {
        backgroundColor: 'yellow',
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
        // marginTop: 18,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c6cbdf',
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
    // btnPlus: {
    //     width: 30,
    //     height: 30,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginLeft: 15,
    //     borderRadius: 15,
    //     borderWidth: 1,
    //     borderColor: '#4feeca',
    // },
    // textPlus: {
    //     fontSize: 20,
    //     color: '#4feeca',
    // },
});

export default connect(mapStateToProps, mapDispatchToProps)(CraftShop);
