import React from 'react'
import './Question.css';
import correct from './../Assets/icons/correct.svg';
import wrong from './../Assets/icons/wrong.svg';
import { useState } from 'react';


export default function Question(props) {
    let { answers, setAnswers } = props;
    const [showQue, setshowQue] = useState([1, 0, 0]);

    const show1 = showQue[0] ? 'animate__fadeInUp' : 'animate__fadeOutUp';
    const show2 = showQue[1] ? 'animate__fadeInUp' : 'animate__fadeOutUp';
    const show3 = showQue[2] ? 'animate__fadeInUp' : 'animate__fadeOutUp';

    let questions = [
        ['01', 'Do you beleive in fair fights?'],
        ['02', 'Do results matter more than efforts?'],
        ['03', 'Do you have to work 100hr a week to qualify as a hustler?']
    ];

    function changeQuestion() {
        let changeQ1 = JSON.stringify(showQue) === JSON.stringify([1, 0, 0]);
        let changeQ2 = JSON.stringify(showQue) === JSON.stringify([0, 1, 0]);
        let changeQ3 = JSON.stringify(showQue) === JSON.stringify([0, 0, 1]);

        if (changeQ1) {
            setshowQue([0, 1, 0]);
        }
        else if (changeQ2) {
            setshowQue([0, 0, 1]);
        }
        else if (changeQ3) {
            setshowQue([0, 0, 1]);
        }
    }
    function handleCorrect() {
        let newAnswers = [...answers];
        newAnswers.push(1);
        setAnswers(newAnswers);
        changeQuestion();
    }
    function handleWrong() {
        let newAnswers = [...answers];
        newAnswers.push(0);
        setAnswers(newAnswers);
        changeQuestion();
    }
    return (
        <div className='h-100 d-flex align-items-center justify-content-between'>
            <div className="content">
                <div className="text">
                    <div className="questions">
                        <div className={`item ${show1} animate__animated`}>
                            <div className="num">
                                {questions[0][0]}
                            </div>
                            <div className="question">
                                {questions[0][1]}
                            </div>
                        </div>
                        <div className={`item ${show2} animate__animated`}>
                            <div className="num">
                                {questions[1][0]}
                            </div>
                            <div className="question">
                                {questions[1][1]}
                            </div>
                        </div>
                        <div className={`item ${show3} animate__animated`} >
                            <div className="num">
                                {questions[2][0]}
                            </div>
                            <div className="question">
                                {questions[2][1]}
                            </div>
                        </div>
                    </div>
                    <div className="icons">
                        <button onClick={handleCorrect}><img src={correct} alt="" /></button>
                        <button onClick={handleWrong}><img src={wrong} alt="" /></button>
                    </div>
                </div>
            </div>
        </div >

    )
}
