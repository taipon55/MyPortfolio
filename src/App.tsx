import React from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";


function App() {
  return (
    <Router>
       <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
