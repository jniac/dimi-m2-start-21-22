
// INIT

const mysteryNumber = Math.round(Math.random() * 100)

// je récupère, mémorise et supprime le nœud div.response
const responseElement = document.querySelector('div.response')
responseElement.remove()

const inputElement = document.querySelector('input')



// RUNTIME

inputElement.onchange = (event) => {
  
  let x = inputElement.value

  x = parseFloat(x)

  if (Number.isNaN(x)) {

    const clone = responseElement.cloneNode(true)
    document.body.append(clone)
    clone.querySelector('span.input').innerHTML = x
    clone.querySelector('span.comment').innerHTML = `Ceci n'est pas un nombre "${inputElement.value}"`

  } else if (x < 0 || x > 100) {

  } else if (x < mysteryNumber) {

  } else if (x > mysteryNumber) {

  } else if (x == mysteryNumber) {
  }
}