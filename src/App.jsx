import './App.css'
import visual from './assets/image.png'
import Explanation from './Explanation.jsx'
import Numbers from './numbers.jsx'
import Kth from './kth.jsx'

import { useState } from 'react'

/* Im just testing */
function App () {
  const [n, setN] = useState(2) // I am moving these variables here because they wont be correctly updated if defined in another file
  
  const [k, setK] = useState(2)

  const incrementN = () => { setN(n + 1)}; // These parts work to set the numbers for N and K
  const decrementN = () => { setN(Math.max(2, n - 1));}
  const resetN = () => { setN(2)} // Functions for N

  const incrementK = () => { setK(k + 1)}
  const decrementK = () => {setK(Math.max(2, k - 1))}
  const resetK = () => { setK(2)} // Functions for K


  return (
    <>
      <h1 className="title">⚔️Josephus Problem Visualizer⚔️</h1>
      <h3 className="descrip">The Josephus problem is a famous mathematical puzzle where we imagine N people standing in a circle and starting at position 1, you eliminate every k-th person, counting around the circle until one survivor remains.</h3>

      <hr className='line'></hr>
      <div class="diff">
        <button className='start'>▶️Start</button>
        <Numbers people = {n} incrementN = {incrementN} decrementN = {decrementN} resetN = {resetN}/>
        <Kth steps = {k} incrementK = {incrementK} decrementK = {decrementK} resetK = {resetK}/>
        <button className='reset'>🔄RESET</button>
      </div>
      <hr className='line'></hr>
      <Explanation />

      <img className="romans" src={visual} alt='roman'></img>

      <h3 className='end'>Copyright © 2026 Justin Ham. All rights reserved.</h3>
    </>
  )
}
export default App
