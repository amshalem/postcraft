/* @flow */

import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

type Props = {
  children: string,
  style: any,
}

const TextComponent = (props: Props) => {
  const { children, style } = props
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

export default TextComponent
