import { nanoid } from 'nanoid'
import he from 'he'

const END_POINT = 'https://opentdb.com/api.php'

function getAPIUrl (questionCount) {
  return `${END_POINT}?amount=${questionCount}`
}

function fetchData (questionCount) {
  return (
    fetch(getAPIUrl(questionCount))
      .then(res => res.json())
      .then(({ results }) => {
        return results.map(result => {
          const correctAnswer = {
            id: nanoid(),
            value: he.decode(result.correct_answer),
          }

          const incorrectAnswers = result.incorrect_answers.map(answer => ({
            id: nanoid(),
            value: he.decode(answer),
          }))
          return (
            {
              id: nanoid(),
              type: result.type,
              question: he.decode(result.question),
              correctAnswer,
              incorrectAnswers,
              randomOrderAnswers: [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5),
            }
          )
        })
      })
  )
}

export default fetchData
