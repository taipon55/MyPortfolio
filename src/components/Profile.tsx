import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
export const Profile = () => {
  const text = "HTML / CSS / JavaScript";
  const text2 = "React/Next.js/TypeScript";
  return (
    <>
      <section id="concept">...</section>
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
            Webエンジニアを目指して日々学習している白方大成と申します。
            <br />
            現在は主にreact,typescritpを学習しております。
            <br />
            よろしくお願いいたします。
          </p>
          <div className="git-icon">
            <a className="a-icon" href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
