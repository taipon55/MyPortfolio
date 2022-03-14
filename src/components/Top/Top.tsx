import React from "react";
import Button from "../Button/Button";

export const Top = () => {
  return (
    <>
      <div className="top-photo">
        <div className="bg_dark"></div>
        <div className="top-container">
          <h1>Welcome to</h1>
          <h1>My Portfolio</h1>
          {/* ボタンを表示 */}
          <Button />
        </div>
      </div>
    </>
  );
};

export default Top;
