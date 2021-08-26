const baseUrlSpecies= "https://pokeapi.co/api/v2"
const baseUrlPhoto = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world"
const baseUrlPokemon = "https://pokeapi.co/api/v2/pokemon"

const colorTypesPokemon = {
  'normal': '#929BA3',
  'fighting': '#2F2F2F',
  'flying': '#7AE7C7',
  'poison': '#795663',
  'ground': '#D2B074',
  'rock': '#999799',
  'bug': '#A2FAA3',
  'ghost': '#561D25',
  'steel': '#1D8A99',
  'fire': '#FF675C',
  'water': '#0596C7',
  'grass': '#4A9681',
  'electric': '#FFEA70',
  'psychic': '#FFC6D9',
  'ice': '#AFEAFD',
  'dragon': '#DA627D',
  'dark': '#090C13',
  'fairy': '#FB8AEC',
  'unknown': '#556572',
  'shadow': '#512A9D'
}

export const getAll = async ({page = 1, limit = 12} = {}) => {
 const offset = (page - 1) * limit

 return fetch(`${baseUrlSpecies}/pokemon-species?offset=${offset}&limit=${limit}`)
 .then(res => res.json())
 .then(res => {
  const items = res.results.map((pokemon, i) => ({ 
   id: pokemon.url.slice(pokemon.url.indexOf("species") + 8, -1),
   name: pokemon.name, 
   photo: `${baseUrlPhoto}/${((i+1) + offset)}.svg`,
 }))
  const total_items = res.count; 
  return {
   items,
   total_items
  }
 })
}

export const getOne = async ({id} = {}) => {
  return fetch(`${baseUrlPokemon}/${id}`)
  .then((res) => res.json())
  .then(res => {
    const newPokemon = {
      id: res.id,
      name: res.name,
      photo: res.sprites.other.dream_world.front_default,
      photo_respaldo: res.sprites.other['official-artwork'].front_default,
      height: res.height,
      weight: res.weight,
      abilities: res.abilities.map(({ability}) => ability.name),
      types: res.types.map(({type}) => ({name: type.name, color: colorTypesPokemon[type.name]})),
      form: res.forms.map(({name}) => name),
      stats: res.stats.map(({base_stat, stat}) => ({name: stat.name, base_stat}))
    }
    return newPokemon
  })
}
