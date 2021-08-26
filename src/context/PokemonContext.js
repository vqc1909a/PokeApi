import {createContext, useState} from 'react'

const Context = createContext()

export const PokemonContextProvider = ({children}) => {
 const [pokemones, setPokemones] = useState([])
 const [pokemon, setPokemon] = useState({})
 const [limit, ]  = useState(12)
 const [page, setPage] = useState(1)
 const [totalPages, setTotalPages]  = useState(1)

 const changePage = (e) => {
   setPage(Number(e.target.dataset.number))
 }

 return <Context.Provider value={{pokemon, pokemones, limit, page, totalPages, setPokemon, setPokemones, setPage, setTotalPages, changePage}}>
  {children}
 </Context.Provider>
}

export default Context