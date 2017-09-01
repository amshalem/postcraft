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

var filterDS = new GridView.DataSource({
    rowHasChanged: (r1, r2) => r1 != r2,
});

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
        this.state = {
            filterData : [
                {name: 'ALL', images: null, selected: false},
                {name: 'FOOD INDUSTRY', images: require('../assets/FoodIconD.png'), selected: false},
                {name: 'BEAUTY & CARE', images: require('../assets/BeautyIconD.png'), selected: false},
                {name: 'FASHION & STYLE', images: require('../assets/FashionIconD.png'), selected: false},
                {name: 'REAL ESTATE', images: require('../assets/ConstructionIconD.png'), selected: false},
                {name: 'ELECTRONIC & GADGET', images: require('../assets/ElectronicIconD.png'), selected: false}]
            };

        this.state = {
            dataSource : filterDS.cloneWithRows(this.state.filterData)
        };
    }

    componentDidMount() {
        this.state.filterData = [
                {name: 'ALL', images: null, selected: false},
                {name: 'FOOD INDUSTRY', images: require('../assets/FoodIconD.png'), selected: false},
                {name: 'BEAUTY & CARE', images: require('../assets/BeautyIconD.png'), selected: false},
                {name: 'FASHION & STYLE', images: require('../assets/FashionIconD.png'), selected: false},
                {name: 'REAL ESTATE', images: require('../assets/ConstructionIconD.png'), selected: false},
                {name: 'ELECTRONIC & GADGET', images: require('../assets/ElectronicIconD.png'), selected: false}];
    }

    updateSelectItem = (rowID, selectedState) => {
        var newArray = this.state.filterData.slice();
        newArray[rowID] = {
            name: newArray[rowID].name,
            images: newArray[rowID].images,
            selected: !newArray[rowID].selected
        };
        this.setState({
            dataSource: filterDS.cloneWithRows(newArray),
            filterData: newArray
        });
        console.log('****************', newArray[rowID]);
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
                    dataSource={this.state.dataSource}
                    renderRow={(rowData: string, sectionID: number, rowID: number) => {
                        return (
                            <TouchableOpacity onPress={() => this.updateSelectItem(rowID, rowData.selected)}>
                                {
                                    rowData.selected ?
                                    <View style={[styles.listItem, styles.itemSelected]}>
                                        <Image
                                            style={styles.itemImg}
                                            source={rowData.images}></Image>
                                        <Text style={styles.itemName}>{rowData.name}</Text>
                                    </View>
                                    :
                                    <View style={[styles.listItem, styles.itemUnselected]}>
                                        <Image
                                            style={styles.itemImg}
                                            source={rowData.images}></Image>
                                        <Text style={styles.itemName}>{rowData.name}</Text>
                                    </View>
                                }
                            </TouchableOpacity>
                        );
                    }}
                />
                <TouchableOpacity onPress={() => Actions.profile()}>
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
        borderWidth: 2,
        shadowColor: '#c6cbdf',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.31,
    },
    itemSelected: {
        borderColor: '#4feeca',
    },
    itemUnselected: {
        borderColor: 'white',
    },
    itemImg: {
        marginBottom: 10,
    },
    itemName: {
        color: '#c6cbdf',
        fontSize: 24,
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
        shadowOpacity: 0.3,
    },
    btnDoneText: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 16,
        fontWeight: '800',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseBusinessType);
