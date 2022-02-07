import React, {useEffect, useState} from 'react'
import {MainStackParamList} from 'navigation/Routes'
import {useNavigation} from '@react-navigation/native'
import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import BackgroundPokeBall from 'components/BackgroundPokeBall'
import {FlatList, Text, View} from 'react-native'
import CardPokemonItem from './components/CardPokemonItem'
import SearchBar from 'components/SearchBar'
import {
  useGetAllPokemonQuery,
  useGetPokemonByNameQuery,
  useGetPokemonByNumberQuery,
  useLazyGetPokemonByNameQuery,
} from 'services/pokeApi/pokeApi'

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'HomeScreen'
>

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const [value, setValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const {allPokemon, isSuccess} = useGetAllPokemonQuery(undefined, {
    selectFromResult: ({data, ...rest}) => ({
      allPokemon: value
        ? data?.results.filter(({name}) => name.includes(value))
        : data?.results,
      ...rest,
    }),
  })
  const [trigger] = useLazyGetPokemonByNameQuery()

  useEffect(() => {
    isSuccess &&
      !filteredData.length &&
      Promise.all(
        allPokemon.map(async ({name}) => {
          const {data} = await trigger(name)
          return data
        }),
      ).then(items => {
        setFilteredData(items)
      })
  }, [])

  return (
    <BackgroundPokeBall>
      <View style={{padding: 12, flex: 1}}>
        <SearchBar value={value} onChangeText={setValue} />
        <Text style={{color: 'black', fontSize: 28, fontWeight: '800'}}>
          Pokedex {filteredData.length}
        </Text>
        <FlatList
          ListEmptyComponent={() => <Text style={{color: 'red'}}>Loading</Text>}
          data={filteredData}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <CardPokemonItem
                key={item.id}
                name={item.name}
                tags={item.abilities.map(({ability}) => ability.name)}
                number={item.id}
                image={item.sprites.other.home.front_default}
              />
            )
          }}
        />
      </View>
    </BackgroundPokeBall>
  )
}
export default HomeScreen
