import axios from 'axios'

const pokeApiInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})

export default pokeApiInstance
