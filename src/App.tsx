import React from "react";
import "./App.css";
import Head from "./components/Head/Head";
import Top from "./components/Top/Top";
import Profile from "./components/Main/Profile";
import About from "./components/Main/About";
import Skill from "./components/Main/Skill";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Head />
      <Top />
      <Profile />
      <About />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
