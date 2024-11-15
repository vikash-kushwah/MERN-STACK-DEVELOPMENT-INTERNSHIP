import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0);

  function increase() {
    console.log(counter);
    setcounter(counter++);
  }

  function decrease() {
    console.log(counter);
    setcounter(counter--);
  }

  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <div className="buttons">
          <button onClick={decrease}> - </button>
          <span>{counter}</span>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </>
  )
}

export default App
