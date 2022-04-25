import React,{useState} from 'react';
import { init, send } from "@emailjs/browser";



  const Form = () => {
  const [username, setUserName] = useState('');
  const [company ,setCompany] = useState('');
  const [mail, setMail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = () => {
      const userID = process.env.REACT_APP_USER_ID;
      const serviceID = process.env.REACT_APP_SERVICE_ID;
      const templateID = process.env.REACT_APP_TEMPLATE_ID;

      if(
        userID !== undefined &&
        serviceID !== undefined &&
        templateID !== undefined
      ){
       init(userID);

       const template_param = {
         to_username: username,
         company: company,
         from_email: mail,
         title: title,
         message: message,
       };

       send(serviceID, templateID,template_param).then(() => {
         window.alert("お問い合わせを送信いたしました。");

         setUserName('');
         setCompany('');
         setMail('');
         setMessage('');
         setTitle('');
       });
      }
    }
      const handleClick = (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
         sendMail();
      };

       const handleCanceled = () => {
         setUserName('');
         setCompany('');
         setMail('');
         setMessage('');
         setTitle('');
       };

       const disableSend = username === '' || mail === '' || title === '' || message === '';

       
  return (
    <div>
      <h2>お問い合わせ</h2>
      <p>お問い合わせは、下記のフォームからお願いします。</p>
      <form>
          <div>
            <label htmlFor="nameForm">ご氏名：</label>
          </div>
          <input type="text" id="nameForm" className="formInput" value={username} onChange={(e) => setUserName(e.target.value)}/>
          <div>
            <label htmlFor="companyNameForm">会社名：</label>
          </div>
          <input type="text" id="companyNameForm" className="formInput" value={company} onChange={(e) => setCompany(e.target.value)}
           required />
          <div>
            <label htmlFor="mailForm">メールアドレス：</label>
          </div>
          <input type="email" id="mailForm" className="formInput" value={mail} onChange={(e) => setMail(e.target.value)} />
          <div>
            <label htmlFor="mailTitleForm">件名：</label>
          </div>
          <input type="text" id="mailTitleForm" className="formInput" value={title} onChange={(e) => setTitle(e.target.value)} />
          <div>
            <label htmlFor="mailContentForm">お問い合わせ内容：</label>
          </div>
          <textarea  id="mailContentForm" className="formInput" value={message} onChange={(e) => setMessage(e.target.value)}
           rows={5} />
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
  )
}

export default Form