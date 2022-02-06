import {rest} from 'msw'

export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/1/', (req, res, ctx) => {
    return res(
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
      }),
    )
  }),
]
