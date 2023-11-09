import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./Components/Navbar";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
