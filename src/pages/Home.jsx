import { useState, useEffect, useRef, Suspense } from 'react';
import './Home.css'
import Navbar from './../Components/Navbar';
import Textdiv from './../Components/Textdiv';
import Questions from './../Components/Questions';
import Path from './../Components/Path';
import lock from './../Assets/icons/lock.svg';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Canvas } from '@react-three/fiber';
import Model from "./../Assets/models/HumansMesh";
import Keyboard from "./../Assets/models/Keyboard";
import RotationWrapper from "./../Components/RotationWrapper";
import { useFrame } from '@react-three/fiber';
import 'animate.css/animate.min.css';
import * as THREE from 'three';



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
  let hidePath = answers.length < 3;

  //const [scroll, setScroll] = useState(0);
  const scroll = useRef(0)
  const handleScroll = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) ;
    scroll.current = scrollPercent;
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);


  return (
    <div className="Home" id='Home' >
      <div className="Model">
        <Canvas shadows>
          {/* Start Lights */}
          <fog attach="fog" args={["white", 0, 40]} />
          <ambientLight intensity={0.4} />
          <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          {/* End Lights */}


          {/* Start Scene objects */}
          <Suspense>
            <RotationWrapper scroll={scroll}>
              <Keyboard position={[0, 0, 1]} rotation={[0.5, 0, 0]} scale={[15, 15, 10]} />
            </RotationWrapper>
          </Suspense>
          {/* End Scene objects */}

        </Canvas>
      </div>
      <>
        <div className={'rotatedPath1'}>
          <AnimationOnScroll
            animateOut='line1Out'
            animationDuration={1}
            animateIn='line1In'
            offset={200}
          >
            <div className={`line1 ${line1Out} ${line1In}`}></div>
          </AnimationOnScroll>
        </div>
        <Navbar open={open} setOpen={setOpen} />
        <div className="rotatedPath2">
          <AnimationOnScroll
            animateOut='line2Out'
            animationDuration={1}
            animateIn='line2In'
          >
            <div className={`line2 ${line2In} ${line2Out}`}></div>
          </AnimationOnScroll>

        </div>
        <div style={{ height: '70%', width: '100%' }}>
          <AnimationOnScroll
            animateOut='animate__fadeOut'
            animationDuration={1}
            animateIn='animate__fadeIn'
            offset={100}
          >

            <div className={`title ${slideDiagonal} ${slideDiagonalRev}`}>
              We<br />Hustlers<br />Never<br />Quit
            </div>

          </AnimationOnScroll>

          <AnimationOnScroll
            animateOut='fadeOut'
            animateIn='fadeIn'
            offset={100}
          >

            <div className={`joinUs ${joinUsOpen} ${joinUsClose}`}>
              <span className={`joinUsText`}>Join Us</span>
              <span className={`joinUsText`}>|</span>
              <img src={lock} alt="" />
            </div>

          </AnimationOnScroll>

        </div>
        <>
          <AnimationOnScroll
            animateOut='animate__fadeOut'
            animationDuration={1}
            animateIn='animate__fadeIn'
            offset={300}
          >
            <Textdiv text={'Welcome to'} size={15} color={'white'} />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOut='animate_fadeOut'
            animationDuration={1}
            animateIn='animate__fadeIn'
            offset={300}>
            <Textdiv text={'RegimeOfHustlers'} size={15} color={'#D7263D'} />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOut='fadeOut'
            animationDuration={1}
            animateIn='animate__fadeIn'
            offset={300}
          >
            <Textdiv text={'But'} size={30} color={'white'} marginB={10} />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateOut='animate__fadeOut'
            animationDuration={1}
            animateIn='animate__fadeInUp'
            offset={100}
          >
            <Textdiv text={'Are you worthy?'} size={15} color={'white'} />
          </AnimationOnScroll>

          <Textdiv text={'To become one of us.'} size={15} color={'white'} />
          <Textdiv text={"Let's test that shall we?"} size={15} color={'white'} />
          <Textdiv text={'Answer these questions.'} size={15} color={'white'} marginB={1} />
          <Questions answers={answers} setAnswers={setAnswers} />
          <Path path='correct' toHide={!isCorrect || hidePath} />
          <Path path='wrong' toHide={isCorrect || hidePath} />
        </>
      </>
    </div>
  );
}

export default Home;
