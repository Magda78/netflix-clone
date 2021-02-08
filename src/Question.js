import React, { useState } from 'react';
import './Question.css';

function Question({item}) {
    const {id, title, answer} = item
    const [ click, setClick ] = useState(false);

const questionHandler = () => {
setClick(!click)
}
    return (
        <div className="question">
            <button className="question__content" onClick={questionHandler}>
						<h2>{title}</h2>
						<h2
							className={
								!click ? 'question__contentIcon' : 'question__contentIconAfter'
							}
						>
							+
						</h2>
					</button>
					{click ? (
						<div className="question__contentAnswer">
							<h2>
								{answer}
							</h2>
						</div>
					) : null}
        </div>
    )
}

export default Question
