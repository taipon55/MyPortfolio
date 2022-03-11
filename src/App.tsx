import React from "react";
import "./App.css";
import Head from "./components/Head/Head";
import Top from "./components/Top/Top";
import Profile from "./components/Main/Profile";

import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Head />
      <Top />
      <Profile />
      <Contact />
    </div>
  );
}

export default App;
