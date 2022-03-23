import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Banner />
        <div className="projects">
          <h2>Projects</h2>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default App;
