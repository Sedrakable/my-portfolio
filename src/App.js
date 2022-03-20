import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Cards />
    </div>
  );
}

export default App;
