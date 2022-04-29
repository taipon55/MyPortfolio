import React from "react";
import { Link as Scroll } from "react-scroll";

function Head() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>

        <ul>
          <li>
            <Scroll to="content-title" smooth={true}>
              ABOUT
            </Scroll>
          </li>
          <li>
            <Scroll to="portfolio" smooth={true}>
              PORTFOLIO
            </Scroll>
          </li>
          <li>
            <Scroll to="contact-photo" smooth={true}>
              CONTACT
            </Scroll>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Head;
