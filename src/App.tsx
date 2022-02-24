import React from "react";
import "./App.css";
import Head from "./components/Head";
import Top from "./components/Top";
import Profile from "./components/Profile";
import About from "./components/About";
import Skill from "./components/Skill";
import { Contact } from "./components/Contact";

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
