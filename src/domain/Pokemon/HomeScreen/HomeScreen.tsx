import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {RectButton} from 'react-native-gesture-handler'
import styles from './styles'
import {MainStackParamList} from 'navigation/Routes'
import {useNavigation} from '@react-navigation/native'
import type {NativeStackNavigationProp} from '@react-navigation/native-stack'

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'HomeScreen'
>

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()

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
