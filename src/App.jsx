import './App.css'

import visual from './assets/image.png'
import Explanation from './Explanation.jsx'
import Numbers from './numbers.jsx'
import Kth from './kth.jsx'
function App() {

  return (
    <div className='outer'>
      <div className='begin'> 
        <h1 className="title">⚔️Josephus Problem Visualizer⚔️</h1>
        <h3 className="descrip">The Josephus problem is a famous mathematical puzzle where we imagine N people standing in a circle and starting at position 1, you eliminate every k-th person, counting around the circle until one survivor remains.</h3>
      </div>

      <hr className='line'></hr>
      <div class="diff">
        <button className='start'>▶️Start</button>
        <Numbers />
        <Kth />
        <button className='reset'>🔄RESET</button>
      </div>
      <hr className='line'></hr>
      <Explanation />

      <img className="romans" src={visual} alt='roman'></img>

      <h3 className='end'>Copyright © 2026 Justin Ham. All rights reserved.</h3>
    </div>
  )
}
export default App
