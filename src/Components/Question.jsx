import React from 'react'
import './Question.css';
import correct from './../Assets/icons/correct.svg';
import wrong from './../Assets/icons/wrong.svg';

export default function Question(props) {
    let { no, question } = props;
    return (
        <div className='h-100 d-flex align-items-center justify-content-between'>
            <div className="content">
                <div className="item">
                    <div className="num">
                        {no}
                    </div>
                    <div className="question">
                        {question}
                    </div>
                </div>
                <div className="icons">
                    <img src={correct} alt="" />
                    <img src={wrong} alt="" />
                </div>
            </div>
        </div>

    )
}

