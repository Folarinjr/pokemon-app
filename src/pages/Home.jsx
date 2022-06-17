import React from 'react'
import PokeMonItem from '../components/pokemon/PokeMonItem'
import SearchPokemon from '../components/pokemon/SearchPokemon'

const Home = () => {
  return (
    <>
      <SearchPokemon/>
      <PokeMonItem/>
    </>
  )
}

export default Home