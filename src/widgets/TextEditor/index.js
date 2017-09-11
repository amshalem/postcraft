/* @flow */

import React from 'react'
import {
  View,
  Text,} from 'react-native'
import styles from './styles'

type Props = {
  value: number,
}

const TextEditor = (props: Props) => {
  const { value, decrement, increment } = props
  return (
    <View style={styles.container}>
      <View style={styles.border}
        <Text></Text>
      </View>
    </View>
  )
}

TextEditor.defaultProps = {
  value: 100,
}

export default TextEditor
