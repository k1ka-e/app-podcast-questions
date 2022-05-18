export class Question {
  static create(question) {
      fetch('https://podcast-app-b41af-default-rtdb.firebaseio.com/question.json', {
          method: 'POST',
          body: JSON.stringify(question),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => response.json())
      .then(response => {
          question.id = response.name
          return question
      })
      .then(addToLocalStorage)
  }
}

function addToLocalStorage(question) {
  localStorage.setItem('question', JSON.stringify(question))
}