import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/login" />} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
