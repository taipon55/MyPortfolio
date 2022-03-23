import React from "react";
import "./App.css";
import Head from "./components/Head";
import Top from "./components/Top";
import Profile from "./components/Profile";
import Portfolio from "./components/portfolio";
import { Contact } from "./components/Contact";

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
