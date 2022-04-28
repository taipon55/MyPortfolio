import React, { FormEvent, useState } from "react";
import { init, send } from "@emailjs/browser";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    if (userID && serviceID && templateID) {
      init(userID);
      const params = {
        from_name: name,
        email: email,
        content: content,
      };

      try {
        await send(serviceID, templateID, params);
        alert("送信成功");
      } catch (error) {
        alert(error);
      }
    }
  };

  const disableSend = name === "" || email === "" || content === "";
  return (
    <div className="form-photo">
      <div className="form-main">
        <h2 className="form-title">お問い合わせ</h2>
        <p className="form-text">
          お問い合わせは、下記のフォームからお願いします。
        </p>
        <form className="form-input" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              id="name"
              type="text"
              placeholder="name"
              className="formInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              id="email"
              type="text"
              placeholder="mail"
              className="formInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <textarea
              id="content"
              placeholder="message"
              className="formInput"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="btns">
            <div>
              <input type="submit" disabled={disableSend} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
