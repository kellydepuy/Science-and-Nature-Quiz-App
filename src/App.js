import Background from "./components/Background";
import StartMain from "./components/StartMain"
import {useEffect, useState} from "react"
import Question from './components/Question'

function App() {

  const [quizData, setQuizData] = useState({})
  const [mappedQuestion, setMappedQuestion] = useState()

    useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=10')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setQuizData(data);
        });
    }, []);

    let tempQuestionsList = []
    function mappingQuestions() {
      tempQuestionsList =
      quizData.results.map(item =>
      <Question
      id={Math.floor(Math.random) * 100}
      question={item.question}
      key={item.question}
      correct={item.correct_answer}
      wrong={item.incorrect_answers}
      onClick={handleAnswerClick}
      isClicked={false}
      />)
      return tempQuestionsList
    }

    quizData.results && console.log(tempQuestionsList)
    quizData.results && mappingQuestions()

    function handleAnswerClick(id) {
      setMappedQuestion(prevQuestions =>{
        const newMappedQuestion = []
        for (let i = 0; i < mappedQuestion.length; i++) {
          if (mappedQuestion[i].id === id) {
            newMappedQuestion.push(mappedQuestion[i] = {...prevQuestions, isClicked:!mappedQuestion[i].isClicked})
          } else {newMappedQuestion.push(mappedQuestion[i])}
        }
        return newMappedQuestion
      }
      )
    }
    return (
        <div className="App">
          <Background />
          <StartMain />
          {mappedQuestion}
     </div>
    );
  }
export default App;
