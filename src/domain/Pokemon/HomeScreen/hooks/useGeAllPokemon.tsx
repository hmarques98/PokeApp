import {useEffect, useState} from 'react'
import {IPokemon} from 'services/pokeApi/interfaces/Pokemon'
import {
  useLazyGetAllPokemonQuery,
  useLazyGetPokemonByNameQuery,
} from 'services/pokeApi/pokeApi'

export const useGetAllPokemon = () => {
  const [filteredData, setFilteredData] = useState<IPokemon[]>([])

  const [trigger] = useLazyGetAllPokemonQuery()
  const [triggerByName] = useLazyGetPokemonByNameQuery()

  useEffect(() => {
    ;(async () => {
      const {data} = await trigger()
      if (data?.results) {
        const {results} = data
        Promise.all(
          results.map(async ({name}) => {
            const {data} = await triggerByName(name)
            if (data) {
              return data
            }
          }),
        ).then(result => result.length && setFilteredData(result))
      }
    })()
  }, [])

  return {
    data: filteredData,
  }
}
