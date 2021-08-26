import Spinner from 'components/Spinner'
import ProgressBar from 'components/ProgressBar'
import {useLocation} from 'wouter'
import "./index.css"

function Detail({pokemon}){

 const [, pushLocation] = useLocation()
 const returnHomePage = () => {
    pushLocation("/")
  }
 return (
  <div className="details container">
   {!Object.keys(pokemon).length
      ?
        <Spinner></Spinner>
      :
      <div>
        <div className="details__intro">
          <h2 style={{color: pokemon.types[0].color}}>{pokemon.name}</h2>
          <div className="details__icon" onClick={returnHomePage}>
            <img src="/icons/iconReturn.svg" alt="return-icon" />
          </div>
        </div>
        <div className="details__grid">
          <div className="details__info">
            <h3 style={{color: pokemon.types[0].color}}>Profile</h3>
            <ul>
              <li><strong>ID</strong> <span>#{pokemon.id}</span></li>
              <li><strong>Height</strong> <span>{pokemon.height}m</span></li>
              <li><strong>Weight</strong> <span>{pokemon.weight}kg</span></li>
              <li><strong>Abilities</strong> <span>{pokemon.abilities.map(ability => <span className="details__data" key={ability}>{ability}</span>)}</span></li>
              <li><strong>Type</strong> <span>{pokemon.types.map(({color, name}) => <span className="details__data details__data--special" key={name} style={{backgroundColor: color}}>{name}</span>)}</span></li>
              <li><strong>Forms</strong> <span>{pokemon.form.map(form => <span className="details__data" key={form}>{form}</span>)}</span></li>
            </ul>
          </div>
          <div className="details__image">
            <img src={pokemon.photo || pokemon.photo_respaldo} alt={pokemon.name} />
          </div>
          <div className="details__info">
            <h3 style={{color: pokemon.types[0].color}}>Stats</h3>
            <ul>
              {pokemon.stats.map(({name, base_stat}) => <li key={name}><strong>{name}</strong> <span className="details__data">
              <ProgressBar bg={pokemon.types[0].color} width={base_stat}></ProgressBar>
              </span></li>)}
            </ul>
          </div>
        </div>
      </div>
    }
   </div>
 )
}
export default Detail