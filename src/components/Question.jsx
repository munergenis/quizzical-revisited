import { useId } from 'react'

const Question = (props) => {
  const id = useId()

  const baseAnswerStyle = 'px-4 py-4 w-full h-full text-sm text-center md:text-base rounded-xl border-[1px] flex items-center justify-center transition-all'

  return (
    <div className='w-full flex flex-col gap-6'>
      <h2 className='font-karla font-bold text-blue-950 md:text-2xl'>{props.question.question}</h2>
      <div className='flex flex-col md:flex-row gap-4'>

        {props.question.randomOrderAnswers.map((answer, i) => {
          const answerStyle = getAnswerStyle(props.userAnswers, props.question.correctAnswer.id, props.questionIndex, answer.id, props.isQuizzSubmitted)

          return (
            <div
              key={answer.id}
              className='min-w-32 min-h-7 flex-grow-1 lg:flex-grow-0 flex'
            >
              <label
                className={`${baseAnswerStyle} ${answerStyle}`}
                htmlFor={`${id}-answer-${i + 1}`}
              >
                {answer.value}
              </label>
              <input
                type='radio'
                name={id}
                id={`${id}-answer-${i + 1}`}
                value={answer.value}
                hidden
                onChange={() => props.handleUserAnswers(props.question.id, answer.id)}
              />
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

const answersStyles = {
  unselectedAnswerStyle: 'border-blue-900 hover:cursor-pointer hover:bg-blue-100 hover:border-blue-100',
  selectedAnswerStyle: 'bg-blue-200 border-blue-200 hover:bg-blue-200 hover:border-blue-200 hover:cursor-pointer',
  correctAnswerStyle: 'bg-green-400 border-green-400 hover:cursor-default',
  incorrectAnswerStyle: 'bg-transparent border-slate-300 text-slate-400 hover:cursor-default',
  failedAnswerStyle: 'bg-red-200 border-red-200 text-slate-400 hover:cursor-default',
}

function getAnswerStyle (userAnswers, correctAnswerID, i, answerID, isQuizzSubmitted) {
  if (!userAnswers.length) return

  let answerStyle

  if (!isQuizzSubmitted) {
    if (userAnswers[i].selectedAnswer === answerID) {
      answerStyle = answersStyles.selectedAnswerStyle
    } else {
      answerStyle = answersStyles.unselectedAnswerStyle
    }
  } else {
    if (answerID === correctAnswerID) {
      answerStyle = answersStyles.correctAnswerStyle
    } else if (userAnswers[i].selectedAnswer === answerID) {
      answerStyle = answersStyles.failedAnswerStyle
    } else {
      answerStyle = answersStyles.incorrectAnswerStyle
    }
  }

  return answerStyle
}

export default Question
