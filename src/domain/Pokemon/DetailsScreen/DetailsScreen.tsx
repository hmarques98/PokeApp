import {RouteProp, useRoute} from '@react-navigation/native'
import {MainStackParamList} from 'navigation/Routes'
import React from 'react'
import {Text, Image} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useAppSelector} from 'services/store/hooks'
import styles from './styles'

const DetailsScreen = () => {
  const {
    params: {id: pokeId},
  } = useRoute<RouteProp<MainStackParamList, 'DetailsScreen'>>()
  const poke = useAppSelector(state =>
    state.pokemon.allPokemon.find(({id}) => id === pokeId),
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        {pokeId} {poke?.name}
      </Text>
      <Image
        source={{
          uri: poke?.sprites.other.home.front_default,
          width: 350,
          height: 350,
        }}
      />
    </SafeAreaView>
  )
}
export default DetailsScreen
