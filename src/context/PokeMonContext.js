import { createContext, useState } from "react";

const PokeMonContext = createContext()

export const PokeMonProvider = ({children}) => {
    const [pokemons, setPokemons] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchPokeMon = async (text) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}/`);
        const data = await res.json();

        //console.log(data)

        setPokemons(data)
        setLoading(false);
    }
    
      return <PokeMonContext.Provider value={{
          pokemons,
          fetchPokeMon, 
          loading
        }}>
          {children}
        </PokeMonContext.Provider>
}

export default PokeMonContext