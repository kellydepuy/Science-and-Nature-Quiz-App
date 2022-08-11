import { useState } from "react"

export default function Question(props) {
    const [answer0, setAnswer0] = useState("")
    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")


    return (
        <div className={!props.page1 ? "questions" : "hidden"}>
            <div className="question-div">
                <h2 dangerouslySetInnerHTML={{__html: props.question}}></h2>
            </div>

        <div className="radio-answers-div">
            <div>
                <input
                    className="radio-input"
                    type="radio"
                    name={props.question}
                    id={props.wrong[0]}
                    value={props.wrong[0]}
                    onChange={(e) => {props.onChange(props.questionID, e.target.value, props.correct)
                                        setAnswer0("0")
                                        setAnswer1("")
                                        setAnswer2("")
                                        setAnswer3("")}}
                    checked={answer0 === props.wrong[0]}
                    disabled={props.checkAnswers ? true : false}
                    />
                <label 
                    dangerouslySetInnerHTML={{__html: props.wrong[0]}}
                    className= {props.checkAnswers && answer0 ? "radio-label radio-label-red radio-label-clicked"
                                : props.checkAnswers && !answer0 ? "radio-label radio-label-gray"
                                :!props.checkAnswers && answer0 ? "radio-label-clicked radio-label"
                                : "radio-label"}
                    htmlFor={props.wrong[0]}
                    ></label>
            </div>

            <div>
                {props.wrong[1] && <input
                    className="radio-input"
                    type="radio"
                    name={props.question}
                    id={props.wrong[1]}
                    value={props.wrong[1]}
                    onChange={(e) => {props.onChange(props.questionID, e.target.value, props.correct)
                                            setAnswer1("1")
                                            setAnswer0("")
                                            setAnswer2("")
                                            setAnswer3("")}}
                    checked={answer1 === props.wrong[1]}
                    disabled={props.checkAnswers ? true : false}
                    />}
                {props.wrong[1] &&
                    <label
                    dangerouslySetInnerHTML={{__html: props.wrong[1]}}
                        className= {props.checkAnswers && answer1 ? "radio-label radio-label-red radio-label-clicked"
                            : props.checkAnswers && !answer1 ? "radio-label radio-label-gray"
                            :!props.checkAnswers && answer1 ? "radio-label-clicked radio-label"
                            : "radio-label"}
                        htmlFor={props.wrong[1]}
                        ></label>}
            </div>

            <div>
                {props.wrong[2] && <input
                    className="radio-input"                     
                    type="radio"
                    name={props.question}
                    id={props.wrong[2]}
                    value={props.wrong[2]}
                    onChange={(e) => {props.onChange(props.questionID, e.target.value, props.correct)
                                        setAnswer2("2")
                                        setAnswer1("")
                                        setAnswer0("")
                                        setAnswer3("")}}
                    checked={answer2 === props.wrong[2]}
                    disabled={props.checkAnswers ? true : false}
                    />}
                {props.wrong[2] &&
                    <label
                    dangerouslySetInnerHTML={{__html: props.wrong[2]}}
                        className= {props.checkAnswers && answer2 ? "radio-label radio-label-red radio-label-clicked"
                            : props.checkAnswers && !answer2 ? "radio-label radio-label-gray"
                            :!props.checkAnswers && answer2 ? "radio-label-clicked radio-label"
                            : "radio-label"}
                        htmlFor={props.wrong[2]}
                        ></label>}
            </div>

            <div>
                <input
                    className= "radio-input"
                    type="radio"
                    name={props.question}
                    id={props.correct}
                    value={props.correct}
                    onChange={(e) => {props.onChange(props.questionID, e.target.value, props.correct)
                                        setAnswer3("3")
                                        setAnswer1("")
                                        setAnswer2("")
                                        setAnswer0("")}}
                    checked={answer3 === props.correct}
                    disabled={props.checkAnswers ? true : false}
                />
                <label
                    dangerouslySetInnerHTML={{__html: props.correct}}
                    className= {props.checkAnswers && answer3 ? "radio-label radio-label-green radio-label-clicked"
                        : props.checkAnswers && !answer3 ? "radio-label radio-label-green-light"
                        : !props.checkAnswers && answer3 ? "radio-label-clicked radio-label"
                        : "radio-label"} 
                    htmlFor={props.correct}
                    ></label>
            </div>

        </div>
        </div>

    )
}