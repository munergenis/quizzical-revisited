import { useId } from 'react'

const Question = (props) => {
  const id = useId()

  const answerStyle = 'px-4 py-4 min-w-32 min-h-7 text-sm text-center flex-grow-1 lg:flex-grow-0 md:text-base rounded-xl border-blue-900 border-[1px] hover:cursor-pointer hover:bg-blue-100 hover:border-blue-100'
  const selectedAnswerStyle = ' bg-blue-200 border-blue-200 hover:bg-blue-200 hover:border-blue-200'
  const correctAnswerStyle = ' bg-green-400 border-green-400 hover:bg-green-400 hover:border-green-400 hover:cursor-default'
  const incorrectAnswerStyle = ' bg-transparent border-slate-400 hover:bg-transparent hover:border-slate-400 text-slate-400 hover:cursor-default'
  const failedAnswerStyle = ' bg-red-200 border-red-200 hover:bg-red-200 hover:border-red-200 text-slate-400 hover:cursor-default'

  return (
    <div className='w-full flex flex-col gap-6'>
      <h2 className='font-karla font-bold text-blue-950 md:text-2xl'>{props.question.question}</h2>
      <div className='flex flex-col md:flex-row gap-4'>

        <label
          className={`${answerStyle} ${selectedAnswerStyle}`}
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
        />

        <label
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
        />
      </div>
      <hr />
    </div>
  )
}

export default Question
