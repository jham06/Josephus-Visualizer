import './App.css'
import visual from './assets/image.png'
import Explanation from './Explanation.jsx'
import Numbers from './Numbers.jsx'
import Kth from './kth.jsx'
import People from './People.jsx'

import {useState, useEffect, useRef} from 'react'
import Popup from 'reactjs-popup';
/* The initial stages of this project, setting up some variables. */

function App () {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isRunning, setisRunning] = useState(false) // for the autoplay

  const intervalRef = useRef(null)

  const [n, setN] = useState(2) // I am moving these variables here because they wont be correctly updated if defined in another file
  
  const [k, setK] = useState(2)

  const [speed, setSpeed] = useState(700) // IN this case, the speed is initially 700ms, but the user can speed up if they wish 

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

  const [currentIdx, setCurrentIdx] = useState(0);

  function eliminate() {

    // I need to filter people, use the filter function, also need to get alivePeople.length

    const alivePeople = people.filter(person => person.alive)
    const numAlive = alivePeople.length

    if (alivePeople.length <= 1) {
      return
    } else {
      const remove = (currentIdx + k - 1) % numAlive
      const exit = alivePeople[remove] // this gets the specific object at the index
      
      setPeople(people.map(person => person.id === exit.id ? { ...person, alive: false } : person))
      setCurrentIdx(remove % (alivePeople.length - 1)); // works so it wraps around. 
    }
    // const newPeople = people.filter(person => !person.alive), reserve for now
  }

  useEffect(()=> {
    if (isRunning) {
      intervalRef.current = setInterval(() => eliminate(), speed)
    } else {
      clearInterval(intervalRef.current)
    }

     return () => clearInterval(intervalRef.current)
  },[isRunning, eliminate, speed]) // side function, and its option for cleanup 

  // I added eliminate on the dependency array as the isRunning variable correlates witht eh eliminate

  function reset() {
    let resetArr = []
    for (let i = 1; i <= n; i++) {
      const temp = { // re-create the array again. 
        id: i, 
        alive: true
        }
      resetArr.push(temp)
      }
    setPeople(resetArr)

    setisRunning(false) // since it is reset, it should not be running
    
    clearInterval(intervalRef.current) // Need to clear the interval again, as it is resetting, but kind of different than pause
    
    setCurrentIdx(0)
    }

   
    /*const finalPeople = people.filter(person => person.alive)
    if (finalPeople.length === 1){
      setPopupOpen(true)
    } */ // IMPLEMENT POPUP AND WINNING SIGN
    

  return (
    <>
      <h1 className="title">⚔️Josephus Problem Visualizer⚔️</h1>
      <h2 className="descrip">The Josephus problem is a famous mathematical puzzle where we imagine N people standing in a circle and starting at position 1, you eliminate every k-th person, counting around the circle until one survivor remains.</h2>

      <hr className='line'></hr>
      <div className="diff">
        <button className='start' onClick={generate}>⚙️ Start</button>
        <Numbers people = {n} incrementN = {incrementN} decrementN = {decrementN} resetN = {resetN} isRunning={isRunning}/>
        <Kth steps = {k} incrementK = {incrementK} decrementK = {decrementK} resetK = {resetK} isRunning={isRunning}/>
    
        <button className='Next' onClick={eliminate}>▶ Next</button>
      </div>
      <div className='PeopleContainer'>{people.map((person,index) => (<People key={person.id} 
                                                                              id={person.id} 
                                                                              alive={person.alive}
                                                                              index={index}
                                                                              total={people.length}/>))}</div>
      <div className="bottom-buttons">
        <button className="play-pause" onClick = {() => setisRunning(!isRunning)}>▷ {isRunning ? "Pause" : "Play"}</button>
        <input className = "speed"type="range" min="200" max="2000" value={speed} onChange={(e) => setSpeed(Number(e.target.value))}/> 
        <button className='reset' onClick = {reset}>⟳ Reset</button>
      </div>
     
      <hr className='line'></hr>
      <Explanation />

      <img className="romans" src={visual} alt='roman'></img>

      <h3 className='end'>Copyright © 2026 Justin Ham. All rights reserved.</h3>
    </>
  )
}
export default App
