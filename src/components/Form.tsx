import React, { useState } from "react";
import { init, send } from "@emailjs/browser";

const Form = () => {
  const [username, setUserName] = useState("");
  const [company, setCompany] = useState("");
  const [mail, setMail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = () => {
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);
      const template_param = {
        to_username: username,
        company: company,
        from_email: mail,
        title: title,
        message: message,
      };

      send(serviceID, templateID, template_param).then(() => {
        window.alert("お問い合わせを送信いたしました。");
        setUserName("");
        setCompany("");
        setMail("");
        setMessage("");
        setTitle("");
      });
    }
  };
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    sendMail();
  };

  const handleCanceled = () => {
    setUserName("");
    setCompany("");
    setMail("");
    setMessage("");
    setTitle("");
  };

  const disableSend =
    username === "" || mail === "" || title === "" || message === "";

  return (
    <div className="form-photo">
      <div className="form-main">
        <h2 className="form-title">お問い合わせ</h2>
        <p className="form-text">
          お問い合わせは、下記のフォームからお願いします。
        </p>
        <form className="form-input">
          <div className="form-group">
            <input
              type="text"
              id="nameForm"
              placeholder="name"
              className="formInput"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="companyNameForm"
              placeholder="company"
              className="formInput"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="mailForm"
              placeholder="mail"
              className="formInput"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="mailTitleForm"
              placeholder="title"
              className="formInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              id="mailContentForm"
              placeholder="message"
              className="formInput"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
            />
          </div>
          <div className="btns">
            <div>
              <button onClick={handleClick} disabled={disableSend}>
                <strong>お問い合わせを送信する</strong>
              </button>
            </div>
            <div>
              <button onClick={handleCanceled}>
                <strong>キャンセル</strong>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
