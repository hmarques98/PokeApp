import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles'
import {MainStackParamList} from 'navigation/Routes'

type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'HomeScreen'>

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.replace('DetailsScreen')}>
        <Text style={styles.text}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  )
}
export default HomeScreen
