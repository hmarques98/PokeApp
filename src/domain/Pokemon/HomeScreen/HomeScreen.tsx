import React from 'react'
import {MainStackParamList} from 'navigation/Routes'
import {useNavigation} from '@react-navigation/native'
import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import BackgroundPokeBall from 'components/BackgroundPokeBall'
import {ScrollView} from 'react-native'
import CardPokemonItem from './components/CardPokemonItem'

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'HomeScreen'
>

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <BackgroundPokeBall>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <CardPokemonItem
          name="bulbassour"
          number={13}
          tags={['jsja']}
          onPressItem={() => {}}
        />
        <CardPokemonItem
          name="bulbassour"
          number={13}
          tags={['jsja']}
          onPressItem={() => {}}
        />
        <CardPokemonItem
          name="bulbassour"
          number={13}
          tags={['jsja']}
          onPressItem={() => {}}
        />
        <CardPokemonItem
          name="bulbassour"
          number={13}
          tags={['jsja']}
          onPressItem={() => {}}
        />
      </ScrollView>
    </BackgroundPokeBall>
  )
}
export default HomeScreen
