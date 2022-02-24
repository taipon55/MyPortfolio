import React from "react";

export const Profile = () => {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/photo.png`} alt="logo" />;
      <h2>Taisei Shirakata</h2>
      <p>Front Engineerになりたい</p>
      <div></div>
      <div></div>
    </>
  );
};

export default Profile;
