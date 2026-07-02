import './App.css'
import visual from './assets/image.png'
import Explanation from './Explanation.jsx'
import Numbers from './numbers.jsx'
import Kth from './kth.jsx'
import People from './People.jsx'

import { useState } from 'react'

/* Im just testing */
function App () {
  const [n, setN] = useState(2) // I am moving these variables here because they wont be correctly updated if defined in another file
  
  const [k, setK] = useState(2)

  // Functions for N
  const incrementN = () => { setN(n + 1)}; // These parts work to set the numbers for N and K
  const decrementN = () => { setN(Math.max(2, n - 1));}
  const resetN = () => { setN(2)} 

  // Functions for K
  const incrementK = () => { setK(k + 1)}
  const decrementK = () => {setK(Math.max(2, k - 1))}
  const resetK = () => { setK(2)} 

  // Now I need to add

  const [people, setPeople] = useState([]) // Initialize as empty array first, now i should update it

  const generate = () => {
      let newArr = []
      for (let i = 1; i <= n; i++) {
      const temp = {
        id: i,
        alive: true
        }
      newArr.push(temp)
      }
      setPeople(newArr)
  }

   // console.log(people) used to debug


  return (
    <>
      <h1 className="title">⚔️Josephus Problem Visualizer⚔️</h1>
      <h3 className="descrip">The Josephus problem is a famous mathematical puzzle where we imagine N people standing in a circle and starting at position 1, you eliminate every k-th person, counting around the circle until one survivor remains.</h3>

      <hr className='line'></hr>
      <div className="diff">
        <button className='start' onClick={generate}>▶️Start</button>
        <Numbers people = {n} incrementN = {incrementN} decrementN = {decrementN} resetN = {resetN}/>
        <Kth steps = {k} incrementK = {incrementK} decrementK = {decrementK} resetK = {resetK}/>
    
        <button className='reset'>🔄RESET</button>
      </div>
      <div className='PeopleContainer'>{people.map(person => (<People key={person.id} id={person.id} alive={person.alive}/>))}</div>
      <hr className='line'></hr>
      <Explanation />

      <img className="romans" src={visual} alt='roman'></img>

      <h3 className='end'>Copyright © 2026 Justin Ham. All rights reserved.</h3>
    </>
  )
}
export default App
