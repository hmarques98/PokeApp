import {useEffect, useMemo, useState} from 'react'
import {IPokemon} from 'services/pokeApi/interfaces/Pokemon'
import {
  useLazyGetAllPokemonQuery,
  useLazyGetPokemonByNameQuery,
} from 'services/pokeApi/hooks'
import {useAppDispatch} from 'services/store/hooks'
import {addAllPokemon} from 'services/store/slices/pokemon/slices'

const useGetAllPokemon = (text?: string) => {
  const [data, setData] = useState<IPokemon[]>()

  const [trigger] = useLazyGetAllPokemonQuery()
  const [triggerByName] = useLazyGetPokemonByNameQuery()
  const dispatch = useAppDispatch()

  useEffect(() => {
    ;(async () => {
      const {data: allPokemon} = await trigger()

      if (allPokemon) {
        Promise.all(
          allPokemon.map(async ({name}) => {
            const {data: pokemonByName} = await triggerByName(name)

            if (pokemonByName) {
              return pokemonByName
            }
          }),
        ).then(result => {
          const nonUndefinedResult = result.filter(
            (value): value is IPokemon => value !== undefined,
          )

          setData(nonUndefinedResult)
          dispatch(addAllPokemon(nonUndefinedResult))
        })
      }
    })()
  }, [dispatch, trigger, triggerByName])

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

export default useGetAllPokemon
