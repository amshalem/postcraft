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
import Modal from 'react-native-modal';

import { Actions, Scene, Router } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

import GridView from 'react-native-gridview';

import Draggable from '../widgets/Draggable';
import ValueSlider from '../widgets/ValueSlider';

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
            displayEditorBox: false,
            tabIndex: 0,
            dataSource: ds.cloneWithRows(postData),
            searchText: '',
            isTextArray: [],
            opacityArray: [],
            sizeArray: [],
            spacingArray: [],
            borderArray: [],
            opacityValue: 0.5,
            sizeValue: 10,
            spacingValue: 1,
            borderValue: 1,
            layerCount: 4,
            layerIndex: 0,
            aboveLayerClickable: true,
            underLayerClickable: false,
            textSelected: false,
            charSpacingSelected: false,
            filterProSelected: false,
            cropType: 1,
            blendOptions: 'None',
        };
    }
    componentDidMount() {
        for (var i = 0; i < this.state.layerCount; i++) {
            this.setState({
                opacityArray: [...this.state.opacityArray, 0.9],
                sizeArray: [...this.state.sizeArray, 1],
                spacingArray: [...this.state.spacingArray, 1],
                borderArray: [...this.state.borderArray, 1],
            })
        }
        this.setState({
            isTextArray: [...this.state.isTextArray, false]
        });
        this.setState({
            isTextArray: [...this.state.isTextArray, false]
        });
        this.setState({
            isTextArray: [...this.state.isTextArray, true]
        });
        this.setState({
            isTextArray: [...this.state.isTextArray, true]
        });
        // isTextArray[0] = false;
        // isTextArray[1] = false;
        // isTextArray[2] = true;
        // isTextArray[3] = true;
        const szArray = this.state.sizeArray.slice();
        szArray[2] = 30;
        szArray[3] = 60;
        this.setState({ sizeArray: szArray });
        const spArray = this.state.spacingArray.slice();

        spArray[2] = 1;
        spArray[3] = 1;
        this.setState({ spacingArray: spArray });
    }

    onCloseClicked() {
        Actions.viewpost();
    }

    onShareClicked() {

        Actions.saveshare();
    }

    onMoreClicked() {
        this.setState({
            displayEditorBox: true,
        });
    }

    onUndoClicked() {
        console.log('Undo Clicked');
    }

    onRedoClicked() {
        console.log('Redo Clicked');
    }

    onCopyClicked() {
        console.log('Copy Clicked');
    }

    onExchangeUnderClicked() {
        console.log('Exchange Under Clicked');
        if (this.state.layerIndex > 0) {
            this.setState({
                layerIndex: this.state.layerIndex - 1,
            });
        }
        if (this.state.layerIndex == 1) {
            this.setState({
                underLayerClickable: false
            });
        }
        if (this.state.layerIndex < this.state.layerCount) {
            this.setState({
                aboveLayerClickable: true
            });
        }
        this.setState({
            textSelected: (this.state.layerIndex == 3 || this.state.layerIndex == 4) ? true : false
        });
    }

    onExchangeAboveClicked() {
        console.log('Exchange Above Clicked');
        if (this.state.layerIndex < this.state.layerCount - 1){
            this.setState({
                layerIndex: this.state.layerIndex + 1,
            });
        }
        if (this.state.layerIndex == this.state.layerCount - 2) {
            this.setState({
                aboveLayerClickable: false
            });
        }
        if (this.state.layerIndex > 0) {
            this.setState({
                underLayerClickable: true
            });
        }
        this.setState({
            textSelected: (this.state.layerIndex == 1 || this.state.layerIndex == 2) ? true : false
        });
    }

    onStockClicked() {
        console.log('Stock Clicked');
        this.setState({
            tabIndex: 0,
            displayEditorBox: false,
        });
    }

    onStyleClicked() {
        console.log('Style Clicked');
        this.setState({
            tabIndex: 0,
            displayEditorBox: false,
        });
    }

    onFilterClicked() {
        console.log('Filter Clicked');
        this.setState({
            tabIndex: 1,
            displayEditorBox: false,
        });
    }

    onCropClicked() {
        console.log('Crop Clicked');
        this.setState({
            tabIndex: 2,
            displayEditorBox: false,
        });
    }

    onFlipClicked() {
        console.log('Flip Clicked');
    }

    onFocusClicked() {
        console.log('Focus Clicked');
    }

    onGridStockClicked() {
        console.log('Grid Stock Clicked');
    }

    onPostItemClicked() {
        Actions.viewpost();
    }
    
    onCameraRollClicked() {
        console.log('Camera Roll Clicked');
    }

    filterSearch(searchText) {
        const newData = postData.filter(function(item) {
            const itemData = item.name.toUpperCase()
            const textData = searchText
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            searchText: searchText
        })
    }

    onSummerClicked() {
        console.log('Summer Clicked');
    }

    onSpringClicked() {
        console.log('Spring Clicked');
    }

    onWinterClicked() {
        console.log('Winter Clicked');
    }

    onFallClicked() {
        console.log('Fall Clicked');
    }

    onAgeClicked() {
        console.log('Age Clicked');
    }

    onBtnPlusClicked() {
        console.log('Plus Clicked');
        Actions.uploadlogo();
    }

    onBtnProClicked() {
        console.log('Pro Clicked');
        this.setState({
            filterProSelected: true,
        });
    }

    onOpacityChanged(value) {
        this.setState({ opacityValue: value });
        const array = this.state.opacityArray.slice();
        array[this.state.layerIndex] = value;
        this.setState({ opacityArray: array });
    }

    onBtnBlendClicked() {
        if (this.state.blendOptions == 'None') {
            this.setState({
                blendOptions: 'Normal',        
            });
        } else if (this.state.blendOptions == 'Normal') {
            this.setState({
                blendOptions: 'Multiply',
            });
        } else if (this.state.blendOptions == 'Multiply') {
            this.setState({
                blendOptions: 'None',
            })
        }
    }

    onSizeChanged(value) {
        value = parseInt(value * 80);
        this.setState({ sizeValue: value });
        const array = this.state.sizeArray.slice();
        array[this.state.layerIndex] = value;
        this.setState({ sizeArray: array });
    }

    onAlignTextClicked() {
        console.log('Text Align Clicked');
    }

    onColorPickerClicked() {
        console.log('Color Picker Clicked');
    }

    onSpacingChanged(value) {
        value = parseInt(value * 20);
        this.setState({ spacingValue: value });
        const array = this.state.spacingArray.slice();
        array[this.state.layerIndex] = value;
        this.setState({ spacingArray: array });
    }

    onLineClicked() {
        this.setState({
            charSpacingSelected: false,
        });
    }

    onCharClicked() {
        this.setState({
            charSpacingSelected: true,
        });
    }

    onBorderChanged(value) {
        this.setState({ borderValue: value });
        const array = this.state.borderArray.slice();
        array[this.state.layerIndex] = value;
        this.setState({ borderArray: array });
    }
    
    onBorderColorClicked() {
        console.log('Border Color Picker Clicked');
    }

    onRectangleClicked() {
        this.setState({
            cropType: 1,
        })
    }

    onCircleClicked() {
        this.setState({
            cropType: 2,
        })
    }

    onGridClicked() {
        this.setState({
            cropType: 3,
        })
    }

    onDragReleased() {
        alert('****************');
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
                    style={[styles.imgBg, {opacity: this.state.opacityArray[0]}]}
                    source={require('../assets/logo-man.png')}>
                    {
                        (this.state.tabIndex==2) ?
                            (
                                <View style={[styles.cropArea, styles.layoutCenter]}>
                                    <Draggable
                                        reverse={false}
                                        renderShape='image'
                                        imageSource={require('../assets/CropBtn.png')}
                                        buttonPosition='top'
                                        buttonWidth={48}
                                        buttonHeight={16}
                                        pressDragRelease={() => this.onDragReleased()}>
                                        <Image
                                            style={[styles.btnCrop, styles.btnCropTop]}
                                            source={require('../assets/CropBtn.png')}>
                                        </Image>
                                    </Draggable>
                                    <Draggable
                                        reverse={false}
                                        renderShape='image'
                                        imageSource={require('../assets/CropBtn.png')}
                                        buttonPosition='bottom'
                                        buttonWidth={48}
                                        buttonHeight={16}>
                                        <Image
                                            style={[styles.btnCrop, styles.btnCropBottom]}
                                            source={require('../assets/CropBtn.png')}>
                                        </Image>
                                    </Draggable>
                                    <Draggable
                                        reverse={false}
                                        renderShape='image'
                                        imageSource={require('../assets/CropBtn.png')}
                                        buttonPosition='left'
                                        buttonWidth={48}
                                        buttonHeight={16}>
                                        <Image
                                            style={[styles.btnCrop, styles.btnCropLeft]}
                                            source={require('../assets/CropBtn.png')}>
                                        </Image>
                                    </Draggable>
                                    <Draggable
                                        reverse={false}
                                        renderShape='image'
                                        imageSource={require('../assets/CropBtn.png')}
                                        buttonPosition='right'
                                        buttonWidth={48}
                                        buttonHeight={16}>
                                        <Image
                                            style={[styles.btnCrop, styles.btnCropRight]}
                                            source={require('../assets/CropBtn.png')}>
                                        </Image>
                                    </Draggable>
                                    <View style={[styles.logoArea, (this.state.layerIndex == 1) && styles.layerSelected]}>
                                        <Image
                                            style={styles.imgLogo}
                                            source={require('../assets/UserLogoContainer.png')}>
                                        </Image>
                                    </View>
                                    <View style={(this.state.layerIndex == 2) && styles.layerSelected}>
                                        <Text style={styles.textTop}>SOON</Text>
                                    </View>
                                    <View style={(this.state.layerIndex == 3) && styles.layerSelected}>
                                        <Text style={styles.textBottom}>OPENING</Text>
                                    </View>
                                </View>
                            )
                            :
                            (
                                <View style={[styles.layoutCenter]}>
                                    <View style={[styles.logoArea, (this.state.layerIndex == 1) && styles.layerSelected]}>
                                        <Image
                                            style={[styles.imgLogo, {opacity: this.state.opacityArray[1]}]}
                                            source={require('../assets/UserLogoContainer.png')}>
                                        </Image>
                                    </View>
                                    <View style={(this.state.layerIndex == 2) && styles.layerSelected}>
                                        <Text style={[styles.textTop, {opacity: this.state.opacityArray[2], fontSize: this.state.sizeArray[2], letterSpacing: this.state.spacingArray[2]}]}>SOON</Text>
                                    </View>
                                    <View style={(this.state.layerIndex == 3) && styles.layerSelected}>
                                        <Text style={[styles.textBottom, {opacity: this.state.opacityArray[3], fontSize: this.state.sizeArray[3], letterSpacing: this.state.spacingArray[3]}]}>OPENING</Text>
                                    </View>
                                </View>
                            )
                    }
                    {
                        (!this.state.displayEditorBox ) ?
                            (
                                <View style={[styles.iconMore, (this.state.tabIndex==2)?styles.iconMoreCrop:styles.iconMoreNCrop]}>
                                    <TouchableOpacity onPress={() => this.onMoreClicked()} style={[styles.layoutCenter, {marginLeft:10}]}>
                                        <IonIcon name="ios-more" size={56} style={styles.textIconMore} />
                                    </TouchableOpacity>
                                </View>
                            )
                            : null
                    }
                </ImageBackground>
                {
                    (this.state.displayEditorBox) ?
                        (
                            <View style={styles.editorBox}>
                                <View style={[styles.toolTopLeft, styles.layoutCenter]}>
                                    <TouchableOpacity onPress={() => this.onUndoClicked()}>
                                        <Image
                                            style={styles.imgToolTop}
                                            source={require('../assets/Undo.png')}>
                                        </Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.onRedoClicked}>
                                        <Image
                                            style={[styles.imgToolTop, styles.spaceBetween20]}
                                            source={require('../assets/RedoD.png')}>
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.toolTopMiddle, styles.layoutCenter]}>
                                    <TouchableOpacity onPress={() => this.onCopyClicked}>
                                        <Image
                                            style={styles.imgToolTop}
                                            source={require('../assets/Copy.png')}>
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.toolTopRight, styles.layoutCenter]}>
                                    <TouchableOpacity onPress={() => this.onExchangeUnderClicked()}>
                                        <Image
                                            style={styles.imgToolTop}
                                            source={(this.state.underLayerClickable)?require('../assets/ExchangeUnder.png'):require('../assets/ExchangeUnderD.png')}>
                                        </Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.onExchangeAboveClicked()}>
                                        <Image
                                            style={[styles.imgToolTop, styles.spaceBetween20]}
                                            source={(this.state.aboveLayerClickable)?require('../assets/ExchangeAbove.png'):require('../assets/ExchangeAboveD.png')}>
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                        : null
                }
                {
                    (!this.state.textSelected) ?
                        <View style={styles.toolTop}>
                            <View style={[styles.toolTopLeft, styles.layoutCenter]}>
                                <TouchableOpacity
                                    style={{flexDirection: 'row'}}
                                    onPress={() => this.onStockClicked()}>
                                    <IonIcon name="ios-cloud-outline" size={22} style={(this.state.tabIndex==0)?styles.activeColor:styles.disabledColor} />
                                    <Text style={[styles.textToolTop, (this.state.tabIndex==0)?styles.activeColor:styles.disabledColor]}>STOCK</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.toolTopMiddle, styles.layoutCenter]}>
                                <TouchableOpacity
                                    style={{flexDirection: 'row'}}
                                    onPress={() => this.onFilterClicked()}>
                                    <IonIcon name="ios-color-wand-outline" size={22} style={[styles.rotate90, (this.state.tabIndex==1)?styles.activeColor:styles.disabledColor]} />
                                    <Text style={[styles.textToolTopD, (this.state.tabIndex==1)?styles.activeColor:styles.disabledColor]}>FILTER</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.toolTopRight, styles.layoutCenter]}>
                                <TouchableOpacity
                                    style={{flexDirection: 'row'}}
                                    onPress={() => this.onCropClicked()}>
                                    <IonIcon name="ios-crop-outline" size={22} style={[styles.rotate90, (this.state.tabIndex==2)?styles.activeColor:styles.disabledColor]} />
                                    <Text style={[styles.textToolTopD, (this.state.tabIndex==2)?styles.activeColor:styles.disabledColor]}>CROP</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View style={styles.toolTop}>
                            <View style={[styles.toolTopLeft, styles.layoutCenter]}>
                                <TouchableOpacity
                                    style={[styles.layoutCenter, {flexDirection: 'row'}]}
                                    onPress={() => this.onStyleClicked()}>
                                    <EvilIcon name="pencil" size={22} style={styles.activeColor} />
                                    <Text style={[styles.textToolTop, {marginBottom: 5}]}>STYLE</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.toolTopMiddle, styles.layoutCenter]}>
                                <TouchableOpacity
                                    style={[styles.layoutCenter, {flexDirection: 'row'}]}
                                    onPress={() => this.onFilterClicked()}>
                                    <Icon name="font" size={14} style={[styles.disabledColor]} />
                                    <Text style={[styles.textToolTopD, {marginBottom: 5}]}>FONT</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.toolTopRight, styles.layoutCenter]}>
                                <TouchableOpacity
                                    style={{flexDirection: 'row'}}
                                    onPress={() => this.onFilterClicked()}>
                                    <IonIcon name="ios-color-wand-outline" size={22} style={[styles.rotate90, styles.disabledColor]} />
                                    <Text style={styles.textToolTopD}>FILTER</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
                {
                    (this.state.tabIndex == 0 && !this.state.textSelected) ?
                        <View style={[styles.tabContent]}>
                            <View style={styles.stockTop}>
                                <View style={styles.searchBox}>
                                    <Icon name="search" size={14} color="#000" style={styles.searchIcon} />
                                    <TextInput
                                        placeholder="Search"
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
                        </View>
                        : null
                }
                {
                    (this.state.tabIndex == 0 && this.state.textSelected) ?
                        <View style={[styles.tabContent]}>
                            <View style={styles.sliderBox}>
                                <View style={[styles.sliderArea, styles.layoutCenter]}>
                                    <ValueSlider
                                        trackColor="#c6cbdf"
                                        thumbStyle={styles.grayThumbStyle}
                                        thumbText="Size"
                                        step={0.1}
                                        value={this.state.opacityArray[this.state.layerIndex]}
                                        onValueChange={(value) => this.onSizeChanged(value)} />
                                </View>
                                <TouchableOpacity onPress={() => this.onAlignTextClicked()}>
                                    <View style={[styles.sideBoxGreen, styles.layoutCenter]}>
                                        <MaterialCommunityIcon name="format-align-center" color="#4feeca" size={22} />                                    
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onColorPickerClicked()}>
                                    <View style={[styles.sideBoxGray, {backgroundColor: '#f050ba'}]}>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.sliderBox}>
                                <View style={[styles.sliderArea, styles.layoutCenter]}>
                                    <ValueSlider
                                        trackColor="#c6cbdf"
                                        thumbStyle={styles.grayThumbStyle}
                                        thumbText="Spacing"
                                        value={this.state.opacityArray[this.state.layerIndex]}
                                        onValueChange={(value) => this.onSpacingChanged(value)} />
                                </View>
                                <TouchableOpacity onPress={() => this.onLineClicked()}>
                                    <View style={[(this.state.charSpacingSelected)?styles.sideBoxGray:styles.sideBoxGreen, styles.layoutCenter]}>
                                        <Text style={[styles.textSideBox, {color: (this.state.charSpacingSelected)?'#c6cbdf':'#4feeca'}]}>Line</Text>                                    
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onCharClicked()}>
                                    <View style={[(this.state.charSpacingSelected)?styles.sideBoxGreen:styles.sideBoxGray, styles.layoutCenter]}>
                                        <Text style={[styles.textSideBox, {color: (this.state.charSpacingSelected)?'#4feeca':'#c6cbdf'}]}>Char</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.sliderBox}>
                                <View style={[styles.sliderArea, styles.layoutCenter]}>
                                    <ValueSlider
                                        trackColor="#c6cbdf"
                                        thumbStyle={styles.grayThumbStyle}
                                        thumbText="Border"
                                        value={this.state.opacityArray[this.state.layerIndex]}
                                        onValueChange={(value) => this.onBorderChanged(value)} />
                                </View>
                                <TouchableOpacity onPress={() => this.onBorderColorClicked()}>
                                    <View style={[styles.sideBoxGray, {backgroundColor: '#424c61'}]}>
                                    </View>
                                </TouchableOpacity>
                                <View style={{width: 30, height: 30}}>
                                </View>
                            </View>
                            <Modal
                                visible={true}
                                style={{width: 100,height:100,backgroundColor:'red'}}>
                            </Modal>
                        </View>
                        : null
                }
                {
                    (this.state.tabIndex == 1) ?
                        <View style={[styles.tabContent]}>
                            <View style={[styles.colorDotsArea]}>
                                <TouchableOpacity onPress={() => this.onSummerClicked()}>
                                    <View style={styles.layoutCenter}>
                                        <LinearGradient
                                            start={{x: 0.0, y: 0.5}}
                                            end={{x: 0, y: 1.0}}
                                            colors={['#fad961', '#f76b1c']}
                                            style={[styles.colorDotItem, styles.layoutCenter]}>
                                            <Text style={styles.textColorDot}>Summer</Text>
                                        </LinearGradient>
                                </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onSpringClicked()}>
                                    <View style={styles.layoutCenter}>
                                        <LinearGradient
                                            start={{x: 0.0, y: 0.5}}
                                            end={{x: 0, y: 1.0}}
                                            colors={['#3023ae', '#c86dd7']}
                                            style={[styles.colorDotItem, styles.layoutCenter]}>
                                            <Text style={styles.textColorDot}>Spring</Text>
                                        </LinearGradient>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onWinterClicked()}>
                                    <View style={styles.layoutCenter}>
                                        <LinearGradient
                                            start={{x: 0.0, y: 0.5}}
                                            end={{x: 0, y: 1.0}}
                                            colors={['#557599', '#99b9db']}
                                            style={[styles.colorDotItem, styles.layoutCenter]}>
                                            <Text style={styles.textColorDot}>Winter</Text>
                                        </LinearGradient>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onFallClicked()}>
                                    <View style={styles.layoutCenter}>
                                        <LinearGradient
                                            start={{x: 0.0, y: 0.5}}
                                            end={{x: 0, y: 1.0}}
                                            colors={['#1c242d', '#e20098']}
                                            style={[styles.colorDotItem, styles.layoutCenter]}>
                                            <Text style={styles.textColorDot}>Fall</Text>
                                        </LinearGradient>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onAgeClicked()}>
                                    <View style={styles.layoutCenter}>
                                        <LinearGradient
                                            start={{x: 0.0, y: 0.5}}
                                            end={{x: 0, y: 1.0}}
                                            colors={['#6ac2ff', '#4ffdd6']}
                                            style={[styles.colorDotItem, styles.layoutCenter]}>
                                            <Text style={styles.textColorDot}>Age</Text>
                                        </LinearGradient>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.sliderBox}>
                                <View style={[styles.sliderArea, styles.layoutCenter]}>
                                    <ValueSlider
                                        trackColor="#c6cbdf"
                                        thumbStyle={styles.grayThumbStyle}
                                        thumbText="Opacity"
                                        value={this.state.opacityArray[this.state.layerIndex]}
                                        onValueChange={(value) => this.onOpacityChanged(value)} />
                                </View>
                                <TouchableOpacity onPress={() => this.onBtnBlendClicked()}>
                                    <View style={[styles.operationArea, styles.layoutCenter]}>
                                        <Text style={styles.textOperation}>{this.state.blendOptions}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => this.onBtnProClicked()}>
                                <View style={[styles.layoutCenter, styles.btnPro, (this.state.displayEditorBox?styles.btnProOffsetP:styles.btnProOffsetM)]}>
                                    <Text style={styles.btnProText}>PRO</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        : null
                }
                {
                    (this.state.tabIndex == 2) ?
                        <View style={[styles.tabContent, styles.cropContent]}>
                            <View style={[styles.cropToolItem, styles.layoutCenter]}>
                                <TouchableOpacity
                                    onPress={() => this.onRectangleClicked()}
                                    style={[(this.state.cropType == 1)?styles.btnCropToolSelected:styles.btnCropToolNSelected, styles.btnCropTool, styles.layoutCenter]}>
                                    <Image
                                        style={styles.imgCropTool}
                                        source={require('../assets/RectangleCrop.png')}>
                                    </Image>
                                </TouchableOpacity>
                                <Text style={styles.textCropTool}>Rectangle</Text>
                            </View>
                            <View
                                style={[styles.cropToolItem, styles.layoutCenter]}>
                                <TouchableOpacity
                                    onPress={() => this.onCircleClicked()}
                                    style={[(this.state.cropType == 2)?styles.btnCropToolSelected:styles.btnCropToolNSelected, styles.btnCropTool, styles.layoutCenter]}>
                                    <Image
                                        style={styles.btnToolBottomTop}
                                        source={require('../assets/CircleCrop.png')}>
                                    </Image>
                                </TouchableOpacity>
                                <Text style={styles.textCropTool}>Circle</Text>
                            </View>
                            <View style={[styles.cropToolItem, styles.layoutCenter]}>
                                <TouchableOpacity
                                    onPress={() => this.onGridClicked()}
                                    style={[(this.state.cropType == 3)?styles.btnCropToolSelected:styles.btnCropToolNSelected, styles.btnCropTool, styles.layoutCenter]}>
                                    <Image
                                        style={styles.btnToolBottomTop}
                                        source={require('../assets/GridCrop.png')}>
                                    </Image>
                                </TouchableOpacity>
                                <Text style={styles.textCropTool}>Grid</Text>
                            </View>
                        </View>
                        : null
                }
                <TouchableOpacity onPress={() => this.onBtnPlusClicked()}>
                    <LinearGradient
                        start={{x: 0.0, y: 0.25}}
                        end={{x: 0.5, y: 0.5}}
                        colors={['#4ffdd6', '#6ac2ff']}
                        style={[styles.layoutCenter, styles.btnPlus, (this.state.displayEditorBox?styles.btnPlusOffsetP:styles.btnPlusOffsetM)]}>
                            <Text style={styles.btnPlusText}>+</Text>
                    </LinearGradient>
                </TouchableOpacity>
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
    spaceBetween20: {
        marginLeft: 20,
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
    cropArea: {
        width: width - 10,
        height: width - 10,
        borderRadius: 5,
        borderColor: '#424c61',
        borderWidth: 1,
        borderStyle: 'dotted',
    },
    btnCrop: {
        width: 48,
        height: 16,
    },
    btnCropTop: {
        position: 'absolute',
        top: 0,
        left: width / 2 - 24,
    },
    btnCropBottom: {
        position: 'absolute',
        bottom: 0,
        left: width /2 - 24,
    },
    btnCropLeft: {
        position: 'absolute',
        left: -12,
        top: width / 2 - 24,
        transform: [{rotate: '90deg'}],
    },
    btnCropRight: {
        position: 'absolute',
        right: -12,
        top: width / 2 - 24,
        transform: [{rotate: '90deg'}],
    },
    logoArea: {
        width: 60,
        height: 60,  
    },
    layerSelected: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        borderStyle: 'dotted',
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
    iconMore: {
        position: 'absolute',
        backgroundColor: 'transparent',
    },
    textIconMore: {
        color: '#424c61',
        textShadowOffset: {
            width: 1,
            height: 1
        },
        textShadowColor: 'white',
    },
    iconMoreNCrop: {
        position: 'absolute',
        bottom: 0,
        marginBottom: -20,
    },
    iconMoreCrop: {
        position: 'absolute',
        bottom: 0,
        marginBottom: -10,
    },
    editorBox: {
        flexDirection: 'row',
        width: width,
        height: 42,
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
        right: -width / 2 - 50,
        width: 100,
        height: 100,
        borderRadius: 69,
        zIndex: 1,
    },
    btnPlusOffsetM: {
        top: -500,
    },
    btnPlusOffsetP: {
        top: -542,
    },
    btnPlusText: {
        marginLeft: -40,
        marginTop: -50,
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 28,
        fontWeight: '300',
    },
    cropContent: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 50,
    },
    toolBottom: {
    },
    toolBottomTop: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    colorDotsArea: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 25,
    },
    textColorDot: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 11,
    },
    colorDotItem: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    sliderBox: {
        flexDirection: 'row',
        height: 30,
        width: width,
        marginTop: 30,
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },
    sliderArea: {
        marginBottom: 10,
        width: width - 180,
        height: 30,
    },
    grayThumbStyle: {
        width: 70,
        height: 30,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c6cbdf',
    },
    greenThumbStyle: {
        width: 70,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#50e3c2',
    },
    sideBoxGray: {
        height: 30,
        width: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#c6cbdf'
    },
    sideBoxGreen: {
        height: 30,
        width: 30,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#4feeca'
    },
    textSideBox: {
        fontSize: 10,
        fontWeight: '900',
    },
    operationArea: {
        height: 30,
        width: 80,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#c6cbdf',
    },
    textOperation: {
        color: '#424c61',
        fontSize: 12,
        fontWeight: '900',
    },
    btnPro: {
        position: 'absolute',
        left: -50,
        width: 100,
        height: 100,
        borderRadius: 69,
        zIndex: 2,
        backgroundColor: '#424c61',
    },
    btnProOffsetM: {
        top: 35,
    },
    btnProOffsetP: {
        top: -7,
    },
    btnProText: {
        marginLeft: 40,
        marginTop: -40,
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 12,
        fontWeight: '900',
    },
    cropToolItem: {
        width: 60,
        height: 60,
    },
    btnCropTool: {
        width: 50,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
    },
    btnCropToolSelected: {
        borderColor: '#50e3c2',       
    },
    btnCropToolNSelected: {
        borderColor: '#c6cbdf',
    },
    textCropTool: {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CraftShop);
