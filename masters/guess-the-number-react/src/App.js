import React from 'react'
import './App.css'

const Response = ({ inputValue, commentValue }) => {
  return (
    <div className="Response">
      <span class="input">{inputValue}</span>
      <span class="comment">{commentValue}</span>
    </div>
  )
}

const inputToComment = (input, mysteryNumber) => {
  const inputNumber = parseFloat(input)
  if (isNaN(inputNumber)) {
    return `Ceci n'est pas un nombre`
  }
  if (inputNumber < 0 || inputNumber > 100) {
    return `Le nombre doit être compris entre 0 et 100.`
  }
  if (inputNumber < mysteryNumber) {
    return `Trop petit.`
  }
  if (inputNumber > mysteryNumber) {
    return `Trop grand.`
  }
  if (inputNumber === mysteryNumber) {
    return `EXACT!!!`
  }
}

const App = () => {
  
  const inputRef = React.useRef()
  const mysteryNumber = React.useMemo(() => Math.round(Math.random() * 100), [])
  const [inputs, setInputs] = React.useState([])
  const submit = () => {
    const inputValue = inputRef.current.value
    setInputs([...inputs, inputValue])
    inputRef.current.value = ''
  }

  return (
    <div className="App">
      <h1>"Guess the number"</h1>
      <input 
        ref={inputRef}
        placeholder="saisir un nombre"
        onKeyDown={event => {
          if (event.key === 'Enter') {
            submit()
          }
        }}
      />
      <button
        id="submit"
        onClick={() => submit()}
      >OK</button>
      {inputs.slice(-5).reverse().map((input, index) => {
        const comment = inputToComment(input, mysteryNumber)
        return (
          <Response
            key={index}
            inputValue={input}
            commentValue={comment}
          />
        )
      })}
    </div>
  )
}

export default App
