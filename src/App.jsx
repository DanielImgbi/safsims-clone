import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "./components/MyNav/Nav";
import './App.css'
import Landing from "./components/Landing/Landing";


function App() {

  return (
    <div className="App ">
      <Nav /> 
      <Landing/>
    </div>
  )
}

export default App
