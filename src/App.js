import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/navbar";
// import Detail from "./includeComponent/detail";
import Home from "./components/home";
// import reactIcon from "./reactIcon.png";
// import seoIcon from "./seoIcon.png";
// import figmaIcon from "./figmaIcon.png";
// import nodeIcon from "./nodeIcon.png";
//import logo from "./logo.svg";
//import "./stylesheet/scssLesson.css";
//import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <NavBar /> */}
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
