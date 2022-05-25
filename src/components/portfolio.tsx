/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const Production = () => {
  return (
    <div className="portfolio">
      <h1 className="content-title">Port Folio</h1>
      <div className="portfolio-container">
        <div className="portfolio-block">
          <a
            className="portfolio-link"
            href="http://myportfolios.s3-website.ap-northeast-3.amazonaws.com/"
          >
            <img
              className="portfolio-photo"
              src={`${process.env.PUBLIC_URL}/MyPortfolio.png`}
            />
            <p>MyPortfolio</p>
          </a>
        </div>
        <div className="portfolio-block">
          <a className="portfolio-link" href="https://whits-house.com/">
            <img
              className="portfolio-photo2"
              src={`${process.env.PUBLIC_URL}/Whits-House.png`}
            />
            <p>Whits-House</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Production;
