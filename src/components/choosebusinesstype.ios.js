import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
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

var {height, width} = Dimensions.get('window');
const itemsPerRow = 2;

const data = Array(20)
    .fill(null)
    .map((item, index) => index + 1);

const filterData = [
    {name: 'ALL', images: require('../assets/logo-woman.png')},
    {name: 'FOOD INDUSTRY', images: require('../assets/logo-woman.png')},
    {name: 'BEAUTY & CARE', images: require('../assets/logo-woman.png')},
    {name: 'FASHION & STYLE', images: require('../assets/logo-woman.png')},
    {name: 'REAL ESTATE', images: require('../assets/logo-woman.png')},
    {name: 'ELECTRONIC & GADGET', images: require('../assets/logo-woman.png')}];
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

class ChooseBusinessType extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.imgNavLogo}
                        source={require('../assets/PostcraftNavLogo.png')}>
                    </Image>
                </View>
                <Image
                    style={styles.imgTextLogo}
                    source={require('../assets/PostcraftTextLogo1.png')}>
                </Image>                
                <Text style={styles.logoHint}>you can filter your post interests by your profession</Text>
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
                    <LinearGradient
                        start={{x: 0.0, y: 1}}
                        end={{x: 1, y: 1.0}}
                        colors={['#4ffdd6', '#6ac2ff']}
                        style={[styles.buttons, styles.btnDone]}>
                        <Text style={styles.btnDoneText}>DONE</Text>
                    </LinearGradient>
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
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    imgNavLogo: {
        width: 80,
        height: 40,
    },
    imgTextLogo: {
        width: 300,
        height: 94,
    },
    logoHint: {
        marginTop: 10,
        color: '#c6cbdf',
        fontSize: 12,
        fontWeight: '400',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width,
        height: height - 1230,
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
        fontSize: 26,
        fontWeight: '800',
        textAlign: 'center',
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnDone: {
        position: 'absolute',
        bottom: 21,
        right: -70,
        width: 140,
        height: 40,
        borderRadius: 20,
        shadowColor: '#4feeca',
        shadowOffset: {
            width: -3,
            height: 4,
        },
        shadowOpacity: 0.27,
    },
    btnDoneText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 16,
        fontWeight: '800',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseBusinessType);
