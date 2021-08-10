import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { StyleDefaults, StyleWrapper } from "@kanban/ui-library";
import { BoardPage } from "./pages";

function Router() {
  return (
    <StyleWrapper>
      <StyleDefaults />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={BoardPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </StyleWrapper>
  )
}

function App() {
  return <Router />;
}

export default App;
