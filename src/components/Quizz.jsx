import Question from 'components/Question.jsx'
import { useEffect } from 'react'
import { useState } from 'react'

const Quizz = () => {
  const [questions, setQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])
  // console.log(questions)
  // console.log(userAnswers)

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
      .then(res => res.json())
      .then(({ results }) => {
        setQuestions(results.map(result => ({
          id: result.question,
          type: result.type,
          question: result.question,
          correctAnswer: result.correct_answer,
          incorrectAnswers: result.incorrect_answers,
          randomOrderAnswers: [result.correct_answer, ...result.incorrect_answers].sort(() => Math.random() - 0.5),
        })))
      })
  }, [])

  useEffect(() => {
    if (questions) {
      setUserAnswers(questions.map(question => ({
        id: question.id,
        type: question.type,
        selectedAnswer: null,
      })))
    }
  }, [questions])

  function handleUserAnswers (questionID, answerValue) {
    setUserAnswers(prevAnswers => prevAnswers.map(answer => answer.id === questionID ? { ...answer, selectedAnswer: answerValue } : answer))
  }

  return (
    <form className='w-full flex flex-col justify-start items-center gap-8 container'>
      <h1 className='font-karla text-3xl font-extrabold text-blue-900 opacity-90 mb-8 underline md:text-4xl'>Quizzical</h1>
      {questions.map((question, index) => <Question key={question.id} question={question} questionIndex={index} userAnswers={userAnswers} handleUserAnswers={handleUserAnswers} />)}
    </form>
  )
}

export default Quizz
