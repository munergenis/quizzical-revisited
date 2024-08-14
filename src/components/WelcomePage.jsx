import { useId } from 'react'

const WelcomePage = (props) => {
  const id = useId()

  return (
    <div className='h-full flex flex-col justify-center items-center gap-4'>
      <h1 className='font-karla text-3xl font-extrabold text-blue-900 opacity-90'>Quizzical</h1>
      <p className='text-slate-500'>Some fancy description</p>

      <form className='text-slate-500 bg-slate-200 px-10 py-10 rounded-lg shadow-xl'>
        <div className='flex flex-col text-center gap-3 items-center justify-center'>
          <label htmlFor={id + '-questionCount'}>Number of Questions</label>
          <input
            type='number'
            name='questionCount'
            id={id + '-questionCount'}
            value={props.questionCount}
            hidden
          />
          <output className='relative px-4 py-2 w-32 rounded-md bg-blue-800 opacity-90 text-white placeholder-blue-300 flex items-center justify-center'>
            <button type='button' className='absolute left-0 px-4 h-full rounded-full hover:bg-gradient-to-l from-blue-700 to-blue-800' onClick={() => props.handleQuestionCount(prevCount => prevCount - 1)}>-</button>
            {props.questionCount}
            <button type='button' className='absolute right-0 px-4 h-full rounded-full hover:opacity-80 hover:bg-gradient-to-r from-blue-700 to-blue-800' onClick={() => props.handleQuestionCount(prevCount => prevCount + 1)}>+</button>
          </output>
        </div>
      </form>

      <button
        className='bg-blue-800 text-white text-xl opacity-90 px-10 py-4 mt-4 rounded-md hover:opacity-85 active:opacity-70 active:scale-95 transition-all'
        onClick={props.handleClick}
      >
        Start quiz
      </button>
    </div>
  )
}

export default WelcomePage
