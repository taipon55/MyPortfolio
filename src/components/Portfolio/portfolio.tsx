import React from "react";

export const Production = () => {
  return (
    <div>
      <h1 className="content-title">Port Forio</h1>
      <div className="portfolio-container">
        <div className="portfolio-block">
          <img
            className="portfolio-photo"
            src={`${process.env.PUBLIC_URL}/MyPortfolio.png`}
          />
          <p>aaaaaaaaa</p>
        </div>
        <div className="portfolio-block">
          <img
            className="portfolio-photo2"
            src={`${process.env.PUBLIC_URL}/Whits-House.png`}
          />
          <p>aaaaaaaaa</p>
        </div>
      </div>
    </div>
  );
};

export default Production;
