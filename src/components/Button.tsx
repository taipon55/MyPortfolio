/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export const Button = () => {
  return (
    <>
      <div className="btn-position">
        <Link to="/form" className="btn btn-flat">
          <span>CONTACT</span>
        </Link>
      </div>
    </>
  );
};

export default Button;
