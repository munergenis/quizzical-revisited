import Question from 'components/Question.jsx'
import { useEffect } from 'react'
import { useState } from 'react'
import fetchQuizzData from 'services/quizzApi'

const Quizz = (props) => {
  const [questions, setQuestions] = useState([])
  const [userAnswers, setUserAnswers] = useState([])
  const [isQuizzSubmitted, setIsQuizzSubmitted] = useState(false)
  const [auxiliarText, setAuxiliarText] = useState({ isShown: false, text: '', color: '' })

  useEffect(() => {
    if (!isQuizzSubmitted) {
      fetchQuizzData(props.questionCount)
        .then(data => setQuestions(data))
    }
  }, [isQuizzSubmitted])

  useEffect(() => {
    if (questions) {
      setUserAnswers(questions.map(question => ({
        id: question.id,
        type: question.type,
        selectedAnswer: null,
      })))
    }
  }, [questions])

  function handleUserAnswers (questionID, answerID) {
    setUserAnswers(prevAnswers => prevAnswers.map(answer => answer.id === questionID ? { ...answer, selectedAnswer: answerID } : answer))
  }

  function checkAnswers (e) {
    e.preventDefault()
    setAuxiliarText({ isShown: false, text: '', color: '' })

    if (userAnswers.some(answer => answer.selectedAnswer === null)) {
      setAuxiliarText({ isShown: true, text: 'Answer all the questions', color: 'text-red-900' })
      return
    }

    setIsQuizzSubmitted(true)

    const finalCorrectAnswers = questions.reduce((acc, curr, currIndex) => {
      if (curr.correctAnswer.id === userAnswers[currIndex].selectedAnswer) {
        return acc + 1
      } else {
        return acc
      }
    }, 0)

    setAuxiliarText({ isShown: true, text: `Correct answers: ${finalCorrectAnswers}/${questions.length}`, color: 'text-blue-900' })
  }

  function requestAnotherQuizz (e) {
    e.preventDefault()

    // fetchQuizzData()
    setIsQuizzSubmitted(false)

    setAuxiliarText({ isShown: false, text: '', color: '' })
  }

  return (
    <form className='w-full flex flex-col justify-start items-center gap-8 container'>
      <h1 className='font-karla text-3xl font-extrabold text-blue-900 opacity-90 mb-8 underline md:text-4xl'>Quizzical</h1>

      {questions.map((question, index) =>
        <Question
          key={question.id}
          question={question}
          questionIndex={index}
          userAnswers={userAnswers}
          handleUserAnswers={handleUserAnswers}
          isQuizzSubmitted={isQuizzSubmitted}
        />
      )}

      {auxiliarText.isShown && <p className={auxiliarText.color + ' text-lg'}>{auxiliarText.text}</p>}
      <button
        className='w-full md:w-fit px-6 py-4 bg-blue-900 text-white md:text-lg rounded-lg hover:opacity-90 active:opacity-80 transition-all'
        onClick={isQuizzSubmitted ? requestAnotherQuizz : checkAnswers}
      >
        {isQuizzSubmitted ? 'Try again' : 'Check answers'}
      </button>
    </form>
  )
}

export default Quizz
