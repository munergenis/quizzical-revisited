import { useId } from 'react'

const Question = (props) => {
  const id = useId()

  const baseAnswerStyle = 'px-4 py-4 w-full h-full text-sm text-center md:text-base rounded-xl border-[1px] flex items-center justify-center'

  return (
    <div className='w-full flex flex-col gap-6'>
      <h2 className='font-karla font-bold text-blue-950 md:text-2xl'>{props.question.question}</h2>
      <div className='flex flex-col md:flex-row gap-4'>

        {props.question.randomOrderAnswers.map((answer, i) => {
          const answerStyle = getAnswerStyle(props.userAnswers, i, answer)

          return (
            <div
              key={answer}
              className='min-w-32 min-h-7 flex-grow-1 lg:flex-grow-0 flex'
            >
              <label
                className={`${baseAnswerStyle} ${answerStyle}`}
                htmlFor={`${id}-answer1`}
              >
                {answer}
              </label>
              <input
                type='radio'
                name={id}
                id={`${id}-answer1`}
                value={answer}
                hidden
              />
            </div>
          )
        })}

        {/* <label
          className={`${baseAnswerStyle} ${failedAnswerStyle}`}
          htmlFor={`${id}-answer1`}
        >
          Adiósas dfasdf
        </label>
        <input
          type='radio'
          name={id}
          id={`${id}-answer1`}
          value='Adiós'
          hidden
        /> */}

        {/* <label
          className={answerStyle}
          htmlFor={`${id}-answer2`}
        >
          Holaasd fasdfas
        </label>
        <input
          type='radio'
          name={id}
          id={`${id}-answer2`}
          value='Hola'
          hidden
        />

        <label
          className={answerStyle}
          htmlFor={`${id}-answer3`}
        >
          Au Revoirasdf asdfadf
        </label>
        <input
          type='radio'
          name={id}
          id={`${id}-answer3`}
          value='Au Revoir'
          hidden
        />

        <label
          className={answerStyle}
          htmlFor={`${id}-answer4`}
        >
          Salirasdf asdfasd
        </label>
        <input
          type='radio'
          name={id}
          id={`${id}-answer4`}
          value='Salir'
          hidden
        /> */}
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

function getAnswerStyle (userAnswers, i, answerValue) {
  let answerStyle

  if (userAnswers[i]?.selectedAnswer === answerValue) {
    answerStyle = answersStyles.selectedAnswerStyle
  } else {
    answerStyle = answersStyles.unselectedAnswerStyle
  }

  return answerStyle
}

export default Question
