export default function CheckAnswers(props) {
    return(
        <button
            checkAnswers={props.checkAnswers}
            className={props.checkAnswers || props.page1 ? "hidden" : "check-answers-button"}
            onClick={props.onClick}>Check Answers</button>
    )
}