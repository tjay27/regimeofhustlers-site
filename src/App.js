import { useState } from 'react';
import './App.css';
import Ham from './Components/Ham';
import mail from './Assets/icons/mail.png';
import Axios from 'axios';

function App() {
  const [open, setOpen] = useState('');
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [showError, setShowError] = useState(false);

  function handleClick() {
    if (open === '' || open === false)
      setOpen(true);
    else
      setOpen(!open);
  }

  function notifyClicked() {
    if (open === '' || open === false)
      setOpen(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let url = process.env.NODE_ENV === 'production' ? 'https://regimeofhustlers-api.onrender.com/' : 'http://localhost:3001/';

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
      }
    }
    
    Axios.post(url, { email: email }, config).then((res) => {
      if (res.status === 200) {
        setEmailSent(true);
        setTimeout(() => { setOpen(false); setEmailSent(false); setEmail(''); }, 1000);
      }
    }).catch((err) => {
      setShowError(true);
      setTimeout(() => { setShowError(false); setOpen(false); }, 1000);
    });
  }

  let notifyOpen = open !== '' && open ? 'notifyOpen' : '';
  let notifyClose = open !== '' && !open ? 'notifyClose' : '';
  let hideNotifyText = open !== '' && open ? 'hide' : '';
  let unhideNotifyText = open !== '' && !open ? 'unhideNotifyText' : '';
  let hide = !open ? 'hide' : '';
  let showform = open ? 'showform' : '';
  let hideStick = open ? 'hideStick' : '';
  let unhideStick = open !== '' && !open ? 'unhideStick' : '';
  let shiftMail = open !== '' && open ? 'shiftMail' : '';
  let shiftMailRev = open !== '' && !open ? 'shiftMailRev' : '';
  let slideDiagonal = open ? 'slideDiagonal' : '';
  let slideDiagonalRev = open !== '' && !open ? 'slideDiagonalRev' : '';
  let slideUp = open !== '' && !open ? 'slideUp' : '';
  let slideDown = open || emailSent ? 'slideDown' : '';
  let slideUpEnter = open ? 'slideUp' : '';
  let slideDownEnter = !open || emailSent || showError ? 'slideDown' : '';
  let line1Out = open !== '' && open ? 'line1Out' : '';
  let line1In = open !== '' && !open ? 'line1In' : '';
  let line2Out = open !== '' && open ? 'line2Out' : '';
  let line2In = open !== '' && !open ? 'line2In' : '';

  return (
    <>
      <div className="App">
        <div className={'rotatedPath1'}>
          <div className={`line1 ${line1Out} ${line1In}`}></div>
        </div>
        <div className='Nbar d-flex align-items-center justify-content-between px-5'>
          <div className="logo">
            RegimeOf<br />Hustlers
          </div>
          <Ham menuClicked={handleClick} isOpen={open} color='#fff' height={25} width={25} strokeWidth={2} />
        </div>
        <div className="rotatedPath2">
          <div className={`line2 ${line2In} ${line2Out}`}></div>
        </div>
        <div className={`title ${slideDiagonal} ${slideDiagonalRev}`}>
          We<br />Hustlers<br />Never<br />Quit
        </div>
        <div className={`notify ${notifyOpen} ${notifyClose}`} onClick={notifyClicked}>
          <form onSubmit={(e) => handleSubmit(e)} className={`w-75 ${hide} ${showform}`}>
            <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </form>
          <span className={`notifyText ${hideNotifyText} ${unhideNotifyText}`}>Notify Me</span>
          <span className={`notifyText ${hideStick} ${unhideStick}`}>|</span>
          <img src={mail} alt="" className={`${shiftMail} ${shiftMailRev}`} />
        </div>
        <div className={`bottomText ${slideUp} ${slideDown}`}>
          Under Construction
        </div>
        <div className={`bottomText ${slideUpEnter} ${slideDownEnter}`}>
          Hit 'Enter' to Submit
          <br />
          We will notify you
        </div>
        <div className={`bottomText ${emailSent ? 'slideUp' : 'slideDown'}`}>
          Mail Submitted
        </div>
        <div className={`bottomText ${showError ? 'slideUp' : 'slideDown'}`}>
          There was some error!
        </div>
      </div>
    </>);
}

export default App;
