import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";


function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
      <div className="App">
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
