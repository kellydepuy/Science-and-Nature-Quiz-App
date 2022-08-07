

export default function Question(props) {
    let allAnswers = [...props.wrong, props.correct]
    allAnswers.sort(()=>Math.random()-0.5 )
    return (
        <div>
            <h2>{props.question}</h2>
            <div>

                <button
                    id={props.id}
                    onClick={() =>props.onClick(props.id)}
                    isClicked={props.isClicked}
                    className= {props.isClicked ? "clicked-blue" : "answer-button"}
                    stats={allAnswers[0] in props.wrong ? "incorrect" : "correct"}
                >{allAnswers[0]}</button>

                <button
                    id={props.id}
                    onClick={() =>props.onClick(props.id)}
                    isClicked={props.isClicked}
                    className= {props.isClicked ? "clicked-blue" : "answer-button"}
                    stats={allAnswers[1] in props.wrong ? "incorrect" : "correct"}>
                {allAnswers[1]}</button>

                {allAnswers[2] &&
                <button
                    id={props.id}
                    onClick={() =>props.onClick(props.id)}
                    isClicked={props.isClicked}
                    className= {props.isClicked ? "clicked-blue" : "answer-button"}
                    stats={allAnswers[2] in props.wrong ? "incorrect" : "correct"}
                >{allAnswers[2]}</button>}

                {allAnswers[3] &&
                <button
                    id={props.id}
                    onClick={() =>props.onClick(props.id)}
                    isClicked={props.isClicked}
                    className= {props.isClicked ? "clicked-blue" : "answer-button"}
                    stats={allAnswers[3] in props.wrong ? "incorrect" : "correct"}
                >{allAnswers[3]}</button>}
            </div>
        </div>
    )
}