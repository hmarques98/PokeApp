export interface IAllPokemon {
  name: string
  url: string
}

export interface IAbilities {
  ability: {
    name: string
  }
}
export interface IPokemon {
  id: number
  name: string
  abilities: IAbilities[]
  sprites: any
}
