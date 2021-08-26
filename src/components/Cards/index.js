import {Link} from 'wouter'
import "./index.css"

function Cards({items}){
 return (
  <div className="card container">
    <div className="card__grid">
      {items.map(({id, name, photo}) => 
      (<Link key={name} href={`/pokemon/${id}`} className="card__item">
        <div className="card__image">
          <img src={photo} loading="lazy" alt={name} />
        </div>
        <div className="card__text">
          <h3>{name}</h3>
        </div>
      </Link>)
      )}
    </div>
  </div> 
 )
}
export default Cards