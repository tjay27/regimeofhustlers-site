import React from 'react';
import Question from './Question';

export default function Questions(props) {
    let { answers, setAnswers } = props;
    return (
        <>
            <Question answers = {answers} setAnswers={setAnswers}/>
        </>
    )
}
