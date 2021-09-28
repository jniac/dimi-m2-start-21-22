console.log('Hello user!')
console.log('Try to guess the mystery number.')
console.log('Use "submit(x)" to submit a number.')

const mysteryNumber = Math.round(Math.random() * 100)

const submit = (x) => {
  if (x < mysteryNumber) {
    console.log('Too small.')
    document.body.innerHTML = '<h1>Too small.</h1>'
    document.body.style.backgroundColor = '#8e7cdb'
  }
  if (x > mysteryNumber) {
    console.log('Too big.')
    document.body.innerHTML = '<h1>Too big.</h1>'
    document.body.style.backgroundColor = '#db7cb5'
  }
  if (x == mysteryNumber) {
    console.log('Hurrah!')
    document.body.innerHTML = '<h1>Hurrah!</h1>'
    document.body.style.backgroundColor = '#97ffe7'
  }
}

const cheat = () => {
  console.log(`The mystery number is ${mysteryNumber}`)
}
