
import { useState } from 'react'
import './App.css'
import { Children, Children2 } from './children'
import { Hobby } from './Hobby'

function App() {
  const[hobby , setHobby] =useState("")
  return (
    <>
      <Children />
      <Children2>
        <div>hello pass by jsx</div>
      </Children2>
      <hr />
      <div>

        {hobby && <Hobby hobby={hobby} />}
        <button onClick={() => setHobby("Reading Books")}  >display Hobby</button>
      </div>
    </>
  )
}

export default App
