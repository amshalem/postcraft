/* @flow */

import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

type Props = {
  children: string
}

const Input = (props: Props) => {
  const { children } = props
  return (
    <TextInput
      {...props}
      style={styles.input}
    />
  )
}

export default Input
