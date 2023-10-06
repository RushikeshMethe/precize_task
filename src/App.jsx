import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='Operations'>
      <h3> CRUD operations</h3>
      <label>Name :</label> <input type='text'></input> <br></br>
      <label>Address :</label> <input type='text'></input> <br></br>
      <label>City :</label> <input type='text'></input> <br></br>
      <label>Country :</label> <input type='text'></input> <br></br>
      <label>Pincode :</label> <input type='number'></input> <br></br>
      <label>SAT Score :</label> <input type='Number'></input> <br></br>
    </div>
    <div className='options'>
      <button className='btn' >Insert Data</button>
      <button className='btn' >View Data</button>
      <button className='btn' >Get Rank</button>
      <button className='btn' >Update Score</button>
      <button className='btn' >Delete Record</button>
    </div>
    <div className='Result'></div>
    </>
  )
}

export default App
