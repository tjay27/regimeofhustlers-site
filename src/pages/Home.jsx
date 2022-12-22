import { useState, useEffect } from 'react';
import './Home.css'
import Navbar from './../Components/Navbar';
import Textdiv from './../Components/Textdiv';
import Questions from './../Components/Questions';
import Path from './../Components/Path';
import lock from './../Assets/icons/lock.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';


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
  let isCorrect = JSON.stringify([0, 1, 0]) === JSON.stringify(answers);
  const [changeColor, setchangeColor] = useState('');

  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    const position = window.scrollY;
    console.log(scrollPercent);
    //setScrollPosition(scrollPercent*100);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);


  return (
    <div className="Home" id='Home'>
      {/* <div style ={{height: '150px', backgroundColor: 'pink'}}></div> */}
      <div className={'rotatedPath1'}>
        <div className={`line1 ${line1Out} ${line1In}`}></div>
      </div>
      <Navbar open={open} setOpen={setOpen} />
      <div className="rotatedPath2">
        <div className={`line2 ${line2In} ${line2Out}`}></div>
      </div>
      <div style={{ height: '70%', width: '100%' }} className={`${changeColor}`}>
        <div className={`title ${slideDiagonal} ${slideDiagonalRev}`}>
          We<br />Hustlers<br />Never<br />Quit
        </div>
        <div className={`joinUs ${joinUsOpen} ${joinUsClose}`}>
          <span className={`joinUsText`}>Join Us</span>
          <span className={`joinUsText`}>|</span>
          <img src={lock} alt="" />
        </div>
      </div>

      <>
        <Textdiv text={'Welcome to'} size={15} color={'white'} />
        <Textdiv text={'RegimeOfHustlers'} size={15} color={'#D7263D'} />
        <Textdiv text={'But'} size={30} color={'white'} />
        <Textdiv text={'Are you worthy?'} size={15} color={'white'} />
        <Textdiv text={'To become one of us.'} size={15} color={'white'} />
        <Textdiv text={"Let's test that shall we?"} size={15} color={'white'} />
        <Textdiv text={'Answer these questions.'} size={15} color={'white'} />
        <Questions answers={answers} setAnswers={setAnswers} />
        <Path path='correct' toHide={!isCorrect} />
        <Path path='wrong' toHide={isCorrect} />
      </>
    </div>
  );
}

export default Home;
