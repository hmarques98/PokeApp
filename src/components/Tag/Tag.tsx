import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

type TagProps = {
  label: string
}

const Tag = ({label}: TagProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={1}>
        {label}
      </Text>
    </View>
  )
}
export default Tag
