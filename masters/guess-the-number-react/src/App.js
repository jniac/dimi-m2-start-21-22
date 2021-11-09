import React from 'react'
import './App.css'

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

const Response = ({ index, inputValue, mysteryNumber, bigger }) => {

  const comment = inputToComment(inputValue, mysteryNumber)

  return (
    <div className="Response" style={{ fontSize: bigger ? '2em' : '1em' }}>
      <span className="index">#{index}</span>
      <span className="input">{inputValue || '\u00A0'}</span>
      <span className="comment">{comment}</span>
    </div>
  )
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
        placeholder="un nombre"
        onKeyDown={event => {
          if (event.code === 'Enter') {
            submit()
          }
          if (event.code === 'Space' && event.shiftKey) {
            event.preventDefault()
            inputRef.current.value = mysteryNumber
          }
        }}
      />
      <button
        id="submit"
        onClick={() => submit()}
      >OK</button>
      {inputs.slice(-5).reverse().map((input, index) => {
        return (
          <Response
            key={inputs.length - index}
            bigger={index === 0}
            index={inputs.length - index}
            inputValue={input}
            mysteryNumber={mysteryNumber}
          />
        )
      })}
    </div>
  )
}

export default App
