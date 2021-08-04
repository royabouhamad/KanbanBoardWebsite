import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Home } from "./pages";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}

function App() {
  return <Router />;
}

export default App;
