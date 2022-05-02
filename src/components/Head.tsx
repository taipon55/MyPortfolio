import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";

function Head() {
  const [active, setActive] = useState(false);

  const classToggle = () => {
    setActive(!active);
  };

  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
        <div className={active === true ? "navArea" : "open"}>
          <nav>
            <div className="inner">
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
            </div>
          </nav>

          <div id="toggle-btn" onClick={classToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="mask" onClick={classToggle}></div>
        </div>
      </header>
    </div>
  );
}

export default Head;
