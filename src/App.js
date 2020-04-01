import React from "react";

import { withRouter } from 'react-router';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Form from "./Form";

import Details from "./Table";

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" exact component={Form} />
      <Route path="/Details" exact component={Details} />
      </Router>
    </div>
  );
}

export default App;
