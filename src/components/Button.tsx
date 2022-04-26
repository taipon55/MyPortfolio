/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";

export const Button = () => {
  let navigate = useNavigate();
  return (
    <>
      <div
        className="btn-position"
        onClick={() => {
          navigate("/form");
        }}
      >
        <a href="" className="btn btn-flat">
          <span>CONTACT</span>
        </a>
      </div>
    </>
  );
};

export default Button;
