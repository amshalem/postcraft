/* @flow */

import { StyleSheet } from 'react-native'
import { DEFAULT_BACKGROUND_COLOR } from '@theme/colors'
import { DARK_TEXT_COLOR } from '@theme/colors'

const styles = StyleSheet.create({
  input: {
    height: 60,
    fontSize: 17,
    backgroundColor: '#fff',
    padding: 10,
    // color: DEFAULT_BACKGROUND_COLOR,
    color: DARK_TEXT_COLOR,
    textAlign: 'center',
  },
})

export default styles
