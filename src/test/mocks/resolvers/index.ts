import {ResponseComposition, RestContext, RestRequest} from 'msw'

import getAllPokemonSuccess from '../responses/getAllPokemonSuccess.json'
import pokemonByName from '../responses/pokemonByName.json'

const mockServiceLatency = 2000

export const internalServerError = (
  req: RestRequest,
  res: ResponseComposition,
  ctx: RestContext,
) => res(ctx.status(500))

const resolvers = {
  allPokemon: {
    success: (req: RestRequest, res: ResponseComposition, ctx: RestContext) =>
      res(
        ctx.status(200),
        ctx.delay(mockServiceLatency),
        ctx.json(getAllPokemonSuccess),
      ),
  },
  pokemonByName: {
    success: (req: RestRequest, res: ResponseComposition, ctx: RestContext) =>
      res(
        ctx.status(200),
        ctx.delay(mockServiceLatency),
        ctx.json(pokemonByName),
      ),
  },
}

export default resolvers
