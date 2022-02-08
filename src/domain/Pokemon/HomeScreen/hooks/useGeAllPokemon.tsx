import {useEffect, useMemo, useState} from 'react'
import {IPokemon} from 'services/pokeApi/interfaces/Pokemon'
import {
  useLazyGetAllPokemonQuery,
  useLazyGetPokemonByNameQuery,
} from 'services/pokeApi/pokeApi'

export const useGetAllPokemon = (text?: string) => {
  const [data, setData] = useState<IPokemon[]>()

  const [trigger] = useLazyGetAllPokemonQuery()
  const [triggerByName] = useLazyGetPokemonByNameQuery()

  useEffect(() => {
    ;(async () => {
      const {data: allPokemon} = await trigger()
      if (allPokemon) {
        Promise.all(
          allPokemon.map(async ({name}) => {
            const {data: pokemonByname} = await triggerByName(name)
            if (pokemonByname) {
              return pokemonByname
            }
          }),
        ).then(result => {
          const nonUndefined = result.filter(
            (value): value is IPokemon => value !== undefined,
          )

          setData(nonUndefined)
        })
      }
    })()
  }, [trigger, triggerByName])

  const filteredData = useMemo(
    () =>
      text?.length
        ? data?.filter(({name}) => name.includes(text.toLowerCase()))
        : data,
    [data, text],
  )

  return {
    data: filteredData,
  }
}
