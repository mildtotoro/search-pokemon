import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { client } from "./api/graphql";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
