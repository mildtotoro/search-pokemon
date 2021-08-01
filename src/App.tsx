import React from "react";
import { ApolloProvider, useQuery, gql } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { client } from "./api/graphql";
import Search from "./pages/Search";

import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App sm:container mx-auto">
        <Router>
          <Switch>
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
