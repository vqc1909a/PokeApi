import {useEffect, useContext} from 'react'
import {getOne as getOnePokemon} from 'services/Pokemon'
import PokemonContext from 'context/PokemonContext'
import useSeo from 'hooks/useSeo';
import Details from 'components/Details'

function DetailsPage({params}){
  const {id} = params;
  const {pokemon, setPokemon} = useContext(PokemonContext)

  useSeo({title: `${pokemon.name || 'pokemon'} | PokéApi`, description: "Aplicación realizada utilizando la api de PokéApi"})

  useEffect(() => {
    getOnePokemon({id})
    .then(pokemon => setPokemon({...pokemon}))
  }, [id, setPokemon])

  
 return (
  <section>
    <Details pokemon={pokemon}></Details>
  </section>
 )
}
export default DetailsPage