import React from "react";
import Head from "./Head";
import Top from "./Top";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import { Contact } from "./Contact";

function Home() {
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

export default Home;
