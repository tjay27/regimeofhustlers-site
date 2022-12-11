import { useState } from 'react';
import './Home.css'
import Navbar from './../Components/Navbar';
import Textdiv from './../Components/Textdiv';
import Questions from './../Components/Questions';
import Path from './../Components/Path';
import lock from './../Assets/icons/lock.svg';


function Home() {
  const [open, setOpen] = useState('');
  const [answers, setAnswers] = useState([]);

  let line1Out = open !== '' && open ? 'line1Out' : '';
  let line1In = open !== '' && !open ? 'line1In' : '';
  let line2Out = open !== '' && open ? 'line2Out' : '';
  let line2In = open !== '' && !open ? 'line2In' : '';
  let slideDiagonal = open !== '' && open ? 'slideDiagonal' : '';
  let slideDiagonalRev = open !== '' && !open ? 'slideDiagonalRev' : '';
  let joinUsOpen = open !== '' && open ? 'joinUsOpen' : '';
  let joinUsClose = open !== '' && !open ? 'joinUsClose' : '';
  let correctAnswer = [0,1,0] === answers ? '':'hide';
  let wrongAnswer = [0,1,0] !== answers ? 'hide':'';

  return (
    <div className="Home">
      <div className={'rotatedPath1'}>
        <div className={`line1 ${line1Out} ${line1In}`}></div>
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <div className="rotatedPath2">
        <div className={`line2 ${line2In} ${line2Out}`}></div>
      </div>
      <div style={{ height: '70%', width: '100%' }}>
        <div className={`title ${slideDiagonal} ${slideDiagonalRev}`}>
          We<br />Hustlers<br />Never<br />Quit
        </div>
        <div className={`joinUs ${joinUsOpen} ${joinUsClose}`}>
          <span className={`joinUsText`}>Join Us</span>
          <span className={`joinUsText`}>|</span>
          <img src={lock} alt="" />
        </div>
      </div>
      <Textdiv text={'Welcome to'} size={15} color={'white'}/>
      <Textdiv text={'RegimeOfHustlers'} size={15} color={'#D7263D'}/>
      <Textdiv text={'But'} size={30} color={'white'}/>
      <Textdiv text={'Are you worthy?'} size={15} color={'white'}/>
      <Textdiv text={'To become one of us.'} size={15} color={'white'}/>
      <Textdiv text={"Let's test that shall we?"} size={15} color={'white'}/>
      <Textdiv text={'Answer these questions.'} size={15} color={'white'}/>
      <Questions answers={answers} setAnswers={setAnswers}/>
      <Path path='correct' className={`${correctAnswer}`}/>
      {/* <Path path='wrong' className={`${wrongAnswer}`}/> */}
    </div>
  );
}

export default Home;
