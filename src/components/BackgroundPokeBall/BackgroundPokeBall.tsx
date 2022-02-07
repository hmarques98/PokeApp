import React, {PropsWithChildren} from 'react'
import {View, Image} from 'react-native'
import styles from './styles'
import {useHeaderHeight} from '@react-navigation/elements'

const BackgroundPokeBall = ({children}: PropsWithChildren<{}>) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/pokeball.png')}
          style={styles.image}
        />
      </View>
      {children}
    </View>
  )
}
export default BackgroundPokeBall
