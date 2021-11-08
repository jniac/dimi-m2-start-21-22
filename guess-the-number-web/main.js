const mysteryNumber = 50

const response = document.querySelector('div.response')
response.remove()

const cloneResponse = (inputValue, commentValue) => {
  const clone = response.cloneNode(true)
  document.body.append(clone)
  clone.querySelector('span.input').innerHTML = inputValue
  clone.querySelector('span.comment').innerHTML = commentValue
}

const testInput = () => {
  const input = document.querySelector('input')
  const inputNumber = parseFloat(input.value)

  if (isNaN(inputNumber)) {

    cloneResponse(input.value, `Ceci n'est pas un nombre`)

  } else if (inputNumber < 0 || inputNumber > 100) {

    cloneResponse(input.value, `Le nombre doit être compris entre 0 et 100.`)

  } else if (inputNumber < mysteryNumber) {

    // etc.

  }
}

document.querySelector('button#submit').onclick = () => {
  testInput()
}


