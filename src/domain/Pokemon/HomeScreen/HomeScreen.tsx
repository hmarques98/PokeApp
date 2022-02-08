import React, {useCallback, useState} from 'react'
import {FlatList, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import type {NativeStackNavigationProp} from '@react-navigation/native-stack'

import {MainStackParamList} from 'navigation/Routes'
import BackgroundPokeBall from 'components/BackgroundPokeBall'
import SearchBar from 'components/SearchBar'

import CardPokemonItem from './components/CardPokemonItem'
import {useGetAllPokemon} from './hooks/useGeAllPokemon'
import styles from './styles'

type HomeScreenNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'HomeScreen'
>

const HomeScreen = () => {
  const [value, setValue] = useState('')
  const {data} = useGetAllPokemon(value)

  const MemoizedLoadingComponent = useCallback(
    () => <Text style={styles.loadingText}>Loading</Text>,
    [],
  )

  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <BackgroundPokeBall>
      <View style={styles.container}>
        <SearchBar value={value} onChangeText={setValue} />
        <Text style={styles.headerText}>Pokedex {data?.length}</Text>
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
