/* @flow */

import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

var Slider = require('react-native-slider');

type Props = {
  value: number,
  // decrement: Function,
  // increment: Function,
}

const Slider = (props: Props) => {
  const { value, decrement, increment } = props
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Slider />
    </View>
  )
}

Slider.defaultProps = {
  value: 100,
}

export default Slider
