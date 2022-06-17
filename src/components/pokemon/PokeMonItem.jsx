import React, {useContext} from 'react'
import PokeMonContext from '../../context/PokeMonContext';

const PokeMonItem = () => {

  const {pokemons, loading} = useContext(PokeMonContext);
  const {name, base_experience, height, weight} = pokemons
  return (
    <div className='card shadow-md compact side bg-base-100'>
        <div className="grid grid-cols-1 space-x-4 card-body">
          <h2 className='card-title justify-center'>{name}</h2>
          <span>Experience: {base_experience}</span>
          <span>Height: {height}</span>
          <span>Weight: {weight}</span>
        </div>
    </div>
  )
}

export default PokeMonItem