import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import LoadingPage from "./componants/loadinfPage/index"
import AuthPage from "./componants/auth/index.js"
import Home from "./componants/home/index"
import HomeAgence from "./componants/homeAgence/index"
import Accueil from "./componants/accueil/index"
import Paiement from "./componants/paiement/index"

const port = "3001"
const path = "https://noubti-app.vercel.app"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoadingPage} />
        <Route exact path="/login" >
          <AuthPage port={port} path={path} isLogin={true}/>
        </Route>
        <Route exact path="/signup" >
          <AuthPage port={port} path={path} isLogin={false}/>
        </Route>
        <Route exact path="/home" >
          <Home port={port} path={path} />
        </Route>
        <Route exact path="/home/:id"  render={props=>(<HomeAgence {...props} />)} />
        <Route exact path="/accueil/:id"  render={props=>(<Accueil {...props} />)} />
        <Route exact path="/paiement/:id"  render={props=>(<Paiement {...props} />)} />
      </Switch>
    </Router>
  );
}

export default App;