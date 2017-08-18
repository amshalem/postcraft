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
const itemsPerRow = 2;

const data = Array(20)
    .fill(null)
    .map((item, index) => index + 1);

const filterData = [
    {name: '', images: require('../assets/logo-woman.png')},
    {name: '', images: require('../assets/logo-woman.png')},
    {name: '', images: require('../assets/logo-woman.png')},
    {name: '', images: require('../assets/logo-woman.png')},
    {name: '', images: require('../assets/logo-woman.png')},
    {name: '', images: require('../assets/logo-woman.png')}];
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
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} />
                <Image
                    style={styles.imgLogo}
                    source={require('../assets/logo-woman.png')}>
                </Image>
                <Text style={styles.textLogoTop}>IDAN AM - SHALEM</Text>
                <Text style={styles.textLogoBottom}>BEER - SHEVA, SOUTH, ISRAEL</Text>
                <View style={styles.filterSwitch}>
                    <Image
                        style={styles.filterSelected}
                        source={require('../assets/logo-woman.png')}>
                        <Text style={styles.textFilterSelected}>MY CRAFT</Text>
                    </Image>
                    <Image
                        style={styles.filterNSelected}
                        source={require('../assets/logo-man.png')}>
                        <Text style={styles.textFilterNSelected}>NOT SHARE</Text>
                    </Image>
                </View>
                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={dataSource}
                    renderRow={(data) => {
                        return (
                            <View style={styles.listItem}>
                                <Text style={styles.itemName}>{data.name}</Text>
                            </View>
                        );
                    }}
                />
                <TouchableOpacity onPress={() => Actions.choosebusinesstype()}>
                    <Image
                        style={[styles.buttons, styles.btnPlus]}
                        source={require('../assets/logo-woman.png')}>
                            <Text style={styles.btnPlusText}>+</Text>
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
        height: 64,
        backgroundColor: 'green',
    },
    imgLogo: {
        width: 80,
        height: 80,
        marginTop: 20,
        marginBottom: 28,
    },
    textLogoTop: {
        color: '#424c61',
        fontSize: 16,
        fontWeight: '900',
    },
    textLogoBottom: {
        color: '#424c61',
        fontSize: 16,
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
        fontWeight: '900',
    },
    textFilterNSelected: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#c6cbcb',
        fontWeight: '900',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        height: height,
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
