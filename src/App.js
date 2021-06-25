import './App.css';
import Index from "./Pages/index";

import {

  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" > <Index /> </Route>
        <Route path="/projectdetails" > <projectdetails /> </Route>
      </Switch>
    </div>
  );
}

export default App;
