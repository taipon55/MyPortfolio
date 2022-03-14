import React from "react";
import "./App.css";
import Head from "./components/Head/Head";
import Top from "./components/Top/Top";
import Profile from "./components/Main/Profile";
import Portfolio from "./components/Portfolio/portfolio";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Head />
      <Top />
      <Profile />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
