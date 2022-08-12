import StartMain from "./components/StartMain"
import {useEffect, useState} from "react"
import Question from './components/Question'
import CheckAnswers from "./components/CheckAnswers";
import Counter from "./components/Counter";
import StartOverButton from "./components/StartOverButton";

export default function App() {

  //States

  const [quizData, setQuizData] = useState({})
  const [checkAnswers, setCheckAnswers] = useState(false)
  const [radioAnswers, setRadioAnswers] = useState({})
  const [counter, setCounter] = useState(0)
  const[page1, setPage1] = useState(true)
 

  //Handler Functions -- handleRadio saves which answer was selected for each question (for debugging)
  //                       This can be removed once the app is finalized. The functions's primary purpose is to update the counter.
  //                  -- handleCheckAnswers tells the app to reveal the answers by toggling the button's state
  //                  --handleStartOver resets the app by refreshing the window and resetting the states
  //                  --handleStartQuiz reveals the quiz questions and answers when the "start quiz" button is clicked

  function handleRadio(questionID, event, correct) {
      setRadioAnswers(prev => {return {...prev, [questionID]: event}})
      if (event === correct){setCounter(prev => prev + 1)}
  }

  function handleCheckAnswers() {
    setCheckAnswers(!checkAnswers)
  }

  function handleStartOver() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);}
    window.location.reload(false)
    setCheckAnswers(false)
    setRadioAnswers({})
    setCounter(0)
    setPage1(true)
  }
  
  function handleStartQuiz() {
    setPage1(false)
  }

  //Data Fetching

    useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=5&category=17&type=multiple')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setQuizData(data);
        });
    }, []);

  
  //Mapping instances of the Questions component

    let mappedQuestion = []
    function mappingQuestions() {
      mappedQuestion = quizData.results.map(item => {
        return (
      <Question
        key={item.question}
        questionID = {quizData.results.indexOf(item)}
        question={item.question}
        correct={item.correct_answer}
        wrong={item.incorrect_answers}
        className="questions"
        checkAnswers={checkAnswers}
        onChange={handleRadio}
        page1={page1}
      />)})}

    console.log(quizData)
    quizData.results && mappingQuestions()

    return (
        <div className="App">
          <StartMain onClick={handleStartQuiz} page1={page1}/>
          {mappedQuestion}
          <CheckAnswers checkAnswers={checkAnswers} onClick={handleCheckAnswers} page1={page1}/>
          <div className={checkAnswers ? "counter-div" : "hidden"}>
            <Counter numberCorrect={counter} checkAnswers={checkAnswers}/>
            <StartOverButton onClick={handleStartOver}/>
          </div>
        </div>
    )
  }
