import React from "react";
import "./styles.css";
import Home from "./components/Home/Home";
import AddColor from "./components/AddColor/AddColor";
import ShowColor from "./components/ShowColor/ShowColor";

import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/colors/new">
        <AddColor />
      </Route>
      <Route path="/display_color/:colorId">
        <ShowColor />
      </Route>
    </Switch>
  );
}
