import React from 'react'
import {View, Text} from 'react-native'
import styles from './styles'

interface DetailsScreenProps {}

const DetailsScreen = ({}: DetailsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DetailsScreen</Text>
    </View>
  )
}
export default DetailsScreen
