export default function StartMain(props) {
    return (
    <div className={props.page1 ? "start-main-container" : "hidden"}>
    <h1>Science and Nature Quiz</h1>
    <h2>Test your knowledge!</h2>
    <button className="btn" onClick={props.onClick}>Start Quiz</button>
    </div>
    )
}