import {setupServer} from 'msw/native'
import {handlersList} from './handlers'

export const server = setupServer(...handlersList)
