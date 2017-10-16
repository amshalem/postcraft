import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    Image,
    StyleSheet,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Camera from 'react-native-camera';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/auth';
import { Colors, Device, FontSize } from '../lib/device-info';


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

class  TakeCamera extends Component {
    takePicture() {
        const options = {};
        this.camera.capture({metadata: options})
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <View style={styles.container}>
                <Camera
                    ref={
                        (cam) => {
                            this.camera = cam;
                        }
                    }
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text
                        style={styles.capture}
                        onPress={this.takePicture.bind(this)}>
                        [CAPTURE]
                    </Text>
                </Camera>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: Device.width,
        height: Device.height,
        backgroundColor: '#F5FCFF',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: 'white',
        borderRadius: 5,
        color: 'black',
        padding: 10,
        margin: 40,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TakeCamera);
