import {Link} from 'wouter'
import "./index.css"
function Header(){

 return(
  <header className="header">
    <h1 className="header__title"><Link href="/">POKÉAPI</Link></h1>
  </header>
 )
}
export default Header