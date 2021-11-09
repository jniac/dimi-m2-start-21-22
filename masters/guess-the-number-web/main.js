
// INIT

const mysteryNumber = Math.round(Math.random() * 100)

// je récupère, mémorise et supprime le nœud div.response
const responseElement = document.querySelector('div.response')
responseElement.remove()

const inputElement = document.querySelector('input')



// RUNTIME

const clampResponses = (max = 5) => {
  const responses = [...document.querySelectorAll('div.response')]
  while (responses.length > max) {
    const response = responses.shift()
    response.remove()
  }
}

const testInputValue = () => {
  
  let x = inputElement.value

  x = parseFloat(x)

  const clone = responseElement.cloneNode(true)
  document.body.append(clone)
  clone.querySelector('span.input').innerHTML = x

  if (Number.isNaN(x)) {

    clone.querySelector('span.comment').innerHTML = `Ceci n'est pas un nombre "${inputElement.value}"`
    
  } else if (x < 0 || x > 100) {

    clone.querySelector('span.comment').innerHTML = `Le nombre doit être compris entre 0 et 100`
    
  } else if (x < mysteryNumber) {
    
    clone.querySelector('span.comment').innerHTML = `Trop petit.`
    
  } else if (x > mysteryNumber) {
    
    clone.querySelector('span.comment').innerHTML = `Trop grand.`

  } else if (x == mysteryNumber) {

    clone.querySelector('span.comment').innerHTML = `Exact !`

  }

  // On vide le champ.
  inputElement.value = ''

  clampResponses()
}

document.querySelector('button#submit').onclick = () => {
  testInputValue()
}

document.querySelector('input').onkeydown = (event) => {
  if (event.key === 'Enter') {
    testInputValue()
  }
}