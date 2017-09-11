/* @flow */

import { StyleSheet, Dimensions } from 'react-native'
import { DEFAULT_CONTAINER_PADDING } from '@theme/sizes'
import { PRIMARY_COLOR, PRIMARY_BUTTON_COLOR } from '@theme/colors'
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidth: {
    width: width - DEFAULT_CONTAINER_PADDING * 2,
  },
  button: {
    backgroundColor: PRIMARY_BUTTON_COLOR,
    height: 60,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    flex: 1,
  },
  disabledButton: {
    backgroundColor: PRIMARY_BUTTON_COLOR,
  },
  roundButton: {
    borderRadius: 15,
    height: 30,
    width: 30,
    backgroundColor: PRIMARY_BUTTON_COLOR,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  disabledText: {
    color: 'white',
  },
  roundButtonText: {
    lineHeight: 30,
    fontSize: 20,
    width: 30,
    color: 'white',
    fontWeight: 'bold',
  },
})

export default styles
