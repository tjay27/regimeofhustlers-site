import React from 'react';
import Question from './Question';

export default function Questions(props) {
    let { answers, setAnswers } = props;
    return (
        <>
            <Question question={'Do you beleive in fair fights?'} no={'01'} />
            <Question question={'Do results matter more than efforts?'} no={'02'} />
            <Question question={'Do you have to work 100hr a week to qualify as a hustler?'} no={'03'} />
        </>
    )
}
