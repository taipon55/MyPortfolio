/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export const Profile = () => {
  return (
    <>
      <h2 className="content-title">About me</h2>

      <div className="container">
        <div className="profile">
          <img
            className="profile-photo"
            src={`${process.env.PUBLIC_URL}/photo.png`}
            alt="logo"
          />
        </div>

        <div className="about">
          <p className="about-text">
            初めまして！
            <br />
            フロントエンジニアを目指している白方大成と申します。
            <br />
            現在は主にreact,typescritpを学習しております。
            <br />
            よろしくお願いいたします。
          </p>
          <div className="git-icon">
            <a
              className="a-icon"
              href="https://github.com/taipon55/Myportfolio"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
