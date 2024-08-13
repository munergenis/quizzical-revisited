const WelcomePage = (props) => {
  return (
    <div className='h-full flex flex-col justify-center items-center gap-4'>
      <h1 className='font-karla text-3xl font-extrabold text-blue-900 opacity-90'>Quizzical</h1>
      <p className='text-slate-500'>Some description if needed</p>

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
