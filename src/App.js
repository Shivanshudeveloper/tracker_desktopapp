import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Activities from "./components/Activities/Activities";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/login" />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/activities" component={Activities} />
      </Switch>
    </div>
  );
}

export default App;
