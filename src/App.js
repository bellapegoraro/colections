import "./App.css";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import RickAndMorty from "./pages/RickAndMorty/index";
import Pokemon from "./pages/Pokemon";
import Header from "./components/header/index";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/" ? <Header /> : null}
      <Switch>
        <Route exact path="/list/:item">
          <RickAndMorty />
        </Route>
        <Route exact path="/list/:item">
          <Pokemon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
