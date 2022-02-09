import {rest} from 'msw'

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/', (req, res, ctx) =>
    res(
      ctx.json([
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
      ]),
    ),
  ),

  rest.get('https://pokeapi.co/api/v2/pokemon/bulbasaur', (req, res, ctx) =>
    res(
      ctx.json({
        abilities: [
          {
            ability: {
              name: 'overgrow',
              url: 'https://pokeapi.co/api/v2/ability/65/',
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: 'chlorophyll',
              url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        id: 1,
        name: 'bulbasaur',
        sprites: {
          other: {
            dream_world: {
              front_default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
            },
          },
        },
      }),
    ),
  ),
]
