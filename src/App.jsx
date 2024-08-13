import blobYellow from 'assets/blob-yellow.png'
import blobBlue from 'assets/blob-blue.png'
import WelcomePage from 'components/WelcomePage.jsx'
import Quizz from 'components/Quizz.jsx'
import { useState } from 'react'

const App = () => {
  const [isQuizzStarted, setIsQuizzStarted] = useState(false)

  function startQuizz () {
    setIsQuizzStarted(true)
  }

  return (
    <main className='min-h-dvh max-w-dvw bg-slate-100 font-inter flex justify-center'>
      <img className='fixed top-0 right-0 z-0' src={blobYellow} />
      <img className='fixed bottom-0 left-0 z-0' src={blobBlue} />
      <div className='z-10 max-h-full max-w-screen-lg w-full px-8 py-8 md:px-20 md:py-20 flex flex-col items-center justify-start'>
        {!isQuizzStarted
          ? <WelcomePage handleClick={startQuizz} />
          : <Quizz />}
      </div>
    </main>
  )
}

export default App
