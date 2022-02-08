import React, {useCallback, useState} from 'react'
import {MainStackParamList} from 'navigation/Routes'
import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {FlatList, Text, View} from 'react-native'

import BackgroundPokeBall from 'components/BackgroundPokeBall'
import SearchBar from 'components/SearchBar'
import {useNavigation} from '@react-navigation/native'
import CardPokemonItem from './components/CardPokemonItem'

import {useGetAllPokemon} from './hooks/useGeAllPokemon'

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'HomeScreen'
>

const HomeScreen = () => {
  const [value, setValue] = useState('')
  const {data} = useGetAllPokemon(value)

  const MemoizedLoadingComponent = useCallback(
    () => <Text style={{color: 'red'}}>Loading</Text>,
    [],
  )

  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <BackgroundPokeBall>
      <View style={{padding: 12, flex: 1}}>
        <SearchBar value={value} onChangeText={setValue} />
        <Text style={{color: 'black', fontSize: 28, fontWeight: '800'}}>
          Pokedex {data?.length}
        </Text>
        <FlatList
          ListEmptyComponent={MemoizedLoadingComponent}
          data={data}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <CardPokemonItem
              key={item.name}
              name={item.name}
              tags={item.abilities.map(({ability}) => ability.name)}
              number={item.id}
              image={item.sprites.other.home.front_default}
              onPressItem={() =>
                navigation.push('DetailsScreen', {id: item.id})
              }
            />
          )}
        />
      </View>
    </BackgroundPokeBall>
  )
}
export default HomeScreen
