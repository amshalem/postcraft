/* @flow */

import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Text from '../Text'
import styles from './styles'

type Props = {
  children: string,
  onPress: Function,
  fullWidth: Boolean,
  round: Boolean,
  disabled: Boolean,
  style: any,
}

const Button = (props: Props) => {
  const { children, onPress, fullWidth, round, style, disabled } = props
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          fullWidth && styles.fullWidth,
          disabled && styles.disabledButton, round && styles.roundButton,
        ]}
      >
        <Text
          style={[
            styles.text,
            disabled && styles.disabledText,
            round && styles.roundButtonText,
          ]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

Button.defaultProps = {
  onPress: () => true,
}

export default Button
