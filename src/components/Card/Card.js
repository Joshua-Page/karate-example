import React from 'react';

import './Card.css'

const Card = (props) => {

    let studentWord = props.studentNumber === '1' ? 'STUDENT' : 'STUDENTS'

    /* 
    Expects props:
    studentNumber: Number of students for card
    pricePerOne: Price per single session
    pricePerTwo: Price per two sessions (weekly, discounted)
    */

    return (
        <div className="card">
            <div className="top">
                {props.studentNumber} {studentWord}
            </div>
            <div className="text-box">
                <p>1 SESSION PER WEEK</p>
                <p>{props.pricePerOne}</p>
            </div>
            <div className="text-box">
                <p>2 SESSIONS PER WEEK</p>
                <p>{props.pricePerTwo}</p>
            </div>
        </div>
    );
}

export default Card;