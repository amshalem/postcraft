/* @flow */

import React from 'react'
import {
  View,
  Text,
  Image } from 'react-native'
import styles from './styles'

type Props = {
  value: number,
}

const Logo = (props: Props) => {
  const { value, decrement, increment } = props
  return (
    <View style={styles.container}>
      <View style={styles.border}
        <Image
          style={styles.imgLogo}
          source={require('../assets/logo-man.png')}>
        </Image>
      </View>
    </View>
  )
}

Logo.defaultProps = {
  value: 100,
}

export default Logo
