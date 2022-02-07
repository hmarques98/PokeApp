import React, {useState} from 'react'
import {MainStackParamList} from 'navigation/Routes'
import {useNavigation} from '@react-navigation/native'
import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import BackgroundPokeBall from 'components/BackgroundPokeBall'
import {Text, View} from 'react-native'
import CardPokemonItem from './components/CardPokemonItem'
import SearchBar from 'components/SearchBar'

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'HomeScreen'
>

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const [value, setValue] = useState('')

  return (
    <BackgroundPokeBall>
      <View style={{padding: 12, flex: 1}}>
        <SearchBar value={value} onChangeText={setValue} />
        <Text style={{color: 'black', fontSize: 28, fontWeight: '800'}}>
          Pokedex
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
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
        </View>
      </View>
    </BackgroundPokeBall>
  )
}
export default HomeScreen
