import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Table from "./Table";
import Form from "./Form";



function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" exact component={Form} />
      <Route path="/Table" exact component={Table} />
     
     
      </Router>
    </div>
  );
}

export default App;
