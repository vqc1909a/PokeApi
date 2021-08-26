import {Route, Switch} from 'wouter'
import Home from 'pages/HomePage'
import Details from 'pages/DetailsPage'
import PageNotFound from 'pages/PageNotFound'
import Header from 'components/layouts/Header'
import {PokemonContextProvider} from 'context/PokemonContext'

function App() {
  return (
    <PokemonContextProvider>
      <Header></Header>
      <Switch>  
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/pokemon/:id" component={Details}></Route>
        <Route exact path="/:rest*" component={PageNotFound} />
      </Switch>
    </PokemonContextProvider>
  );
}

export default App;
