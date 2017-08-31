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

function handleYup(card) {
    console.log('Yup');
}

function handleNope(card) {
    console.log('Nope');
}

class CraftStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: Cards,
        }
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
                        <Text style={styles.textHeader}>CRAFT STOCK</Text>
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
                <View style={styles.toolTopArea}>
                    <View style={[styles.toolTopItem, styles.layoutCenter]}>
                        <Text style={styles.textToolTopItem}>Search</Text>
                    </View>
                    <View style={[styles.toolTopItem, styles.layoutCenter]}>
                        <Text style={styles.textToolTopItem}>Used</Text>
                    </View>
                    <View style={[styles.toolTopItem, styles.layoutCenter]}>
                        <Text style={styles.textToolTopItem}>Filter</Text>
                    </View>
                </View>
                <View style={styles.itemArea}>
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
                </View>
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
    textHeader: {
        textAlign: 'center',
        fontSize: 12,
        color: '#424c61',
        fontWeight: '900',
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
    toolTopArea: {
        width: width,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -100,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderTopWidth: 3,
        borderTopColor: '#c6cbdf',
        borderBottomWidth: 1,
        borderBottomColor: '#c6cbdf',
    },
    toolTopItem: {
        width: width / 4,
        height: 30,
        borderColor: '#c6cbdf',
        borderWidth: 1,
        borderRadius: 15,
    },
    textToolTopItem: {
        color: '#424c61',
        fontSize: 11,
        fontWeight: '300',
    },
    itemArea: {
        backgroundColor: 'white',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        height: height - 1230,
        backgroundColor: 'white',
    },
    listItem: {
        height: (width - 60) / 3,
        width: (width - 60) / 3,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#e5e6e9',
        shadowColor: '#c6cbdf',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.31,
    },
    itemName: {
        color: '#c6cbdf',
        fontSize: 26,
        fontWeight: '800',
        textAlign: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(CraftStock);
