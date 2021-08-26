import {useEffect, useContext} from 'react'
import {getAll as getAllPokemones} from "services/Pokemon"
import Buttons from 'components/Buttons'
import Cards from 'components/Cards'
import PokemonContext from 'context/PokemonContext'
import useSeo from 'hooks/useSeo';

function Home(){
  const {pokemones, limit, page, setPokemones, setTotalPages, setPokemon} = useContext(PokemonContext)

  useSeo({title: "PokéApi", description: "Aplicación realizada utilizando la api de PokéApi"})
  
  useEffect(() => {
    setPokemon({})
    getAllPokemones({ page, limit })
    .then(({items: pokemones, total_items}) => {
      setPokemones(pokemones)
      setTotalPages(Math.ceil(total_items / limit))
    })
  }, [limit, page, setPokemones, setTotalPages, setPokemon])

  return (
  <section>
    <Cards items={pokemones}></Cards>
    <Buttons></Buttons>
  </section>
  )
}
export default Home