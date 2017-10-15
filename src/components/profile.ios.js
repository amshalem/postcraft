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
const itemsPerRow = 2;

const data = Array(20)
    .fill(null)
    .map((item, index) => index + 1);

const filterData = [
    {name: '', image: null},
    {name: '', image: null},
    {name: '', image: null},
    {name: '', image: null},
    {name: '', image: null},
    {name: '', image: null}];

const dataSource = new GridView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
}).cloneWithRows(filterData);

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

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMyCraft: true,
        }
    }

    onCloseClicked() {
        Actions.postfeed();
    }

    onSettingClicked() {
        console.log('Settings Clicked');
    }

    onCraftSelected() {
        this.setState({
            selectedMyCraft: true,
        })
    }

    onNShareSelected() {
        this.setState({
            selectedMyCraft: false,
        });
    }

    onProfileItemClicked() {
        Actions.profilepreview();
    }

    addProfile() {
        console.log('add profile feature coming soon');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={[styles.headerLeft, styles.layoutCenter]}>
                        <TouchableOpacity onPress={() => this.onCloseClicked()}>
                            <Image
                                style={styles.imgHeaderButton}
                                source={require('../assets/CloseExit.png')}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerMiddle}>
                        <Text style={styles.textHeader}>PROFILE</Text>
                    </View>
                    <View style={[styles.headerRight, styles.layoutCenter]}>
                        <TouchableOpacity onPress={() => this.onSettingClicked()}>
                            <Icon name="gear" size={22} color="#000" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Image
                    style={styles.imgLogo}
                    source={require('../assets/UserLogoContainer.png')}>
                </Image>
                <Text style={styles.textLogoTop}>IDAN AM - SHALEM</Text>
                <Text style={styles.textLogoBottom}>BEER - SHEVA, SOUTH, ISRAEL</Text>
                {
                    this.state.selectedMyCraft ?
                    <View style={styles.filterSwitch}>
                        <TouchableOpacity onPress={() => this.onCraftSelected()}>
                            <LinearGradient
                                start={{x: 0.0, y: 1}}
                                end={{x: 1, y: 1.0}}
                                colors={['#4ffdd6', '#6ac2ff']}
                                style={[styles.buttons, styles.filterSelected]}>
                                <Text style={styles.textFilterSelected}>MY CRAFT</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onNShareSelected()}>
                            <LinearGradient
                                start={{x: 0.0, y: 1}}
                                end={{x: 1, y: 1.0}}
                                colors={['transparent', 'transparent']}
                                style={[styles.buttons, styles.filterNSelected]}>
                                <Text style={styles.textFilterNSelected}>NOT SHARE</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    :
                    <View style={styles.filterSwitch}>
                        <TouchableOpacity onPress={() => this.onCraftSelected()}>
                            <LinearGradient
                                start={{x: 0.0, y: 1}}
                                end={{x: 1, y: 1.0}}
                                colors={['transparent', 'transparent']}
                                style={[styles.buttons, styles.filterNSelected]}>
                                <Text style={styles.textFilterNSelectedLeft}>MY CRAFT</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.onNShareSelected()}>
                            <LinearGradient
                                start={{x: 0.0, y: 1}}
                                end={{x: 1, y: 1.0}}
                                colors={['#4ffdd6', '#6ac2ff']}
                                style={[styles.buttons, styles.filterSelected]}>
                                <Text style={styles.textFilterSelected}>NOT SHARE</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                }
                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={dataSource}
                    renderRow={(data) => {
                        return (
                            <TouchableOpacity onPress={() => this.onProfileItemClicked()}>
                                <View style={styles.listItem}>
                                    <Text style={styles.itemName}>{data.name}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
                <TouchableOpacity onPress={() => this.addProfile()}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.25}}
                        end={{x: 0.5, y: 0.5}}
                        colors={['#4ffdd6', '#6ac2ff']}
                        style={[styles.buttons, styles.btnPlus]}>
                            <Text style={styles.btnPlusText}>+</Text>
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
    imgLogo: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginBottom: 28,
    },
    textLogoTop: {
        color: '#424c61',
        fontSize: 14,
        fontWeight: '900',
    },
    textLogoBottom: {
        color: '#424c61',
        fontSize: 12,
        fontWeight: '300',
    },
    filterSwitch: {
        flexDirection: 'row',
        width: 230,
        height: 40,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#c6cbcb',
    },
    filterSelected: {
        width: 125,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    filterNSelected: {
        width: 125,
        height: 40,
        marginLeft: -20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    textFilterSelected: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontWeight: '900',
    },
    textFilterNSelected: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#c6cbcb',
        fontSize: 14,
        fontWeight: '900',
    },
    textFilterNSelectedLeft: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginLeft: 40,
        color: '#c6cbcb',
        fontSize: 14,
        fontWeight: '900',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        height: height - 110,
    },
    listItem: {
        height: (width - 40) / 2,
        width: (width - 40) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#c6cbdf',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.31,
    },
    itemName: {
        color: '#c6cbdf',
        fontSize: 28,
        fontWeight: '800',
        textAlign: 'center',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnPlus: {
        position: 'absolute',
        bottom: -69,
        left: width / 2 - 69,
        width: 138,
        height: 138,
        borderRadius: 69,
    },
    btnPlusText: {
        marginLeft: -55,
        marginTop: -55,
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
