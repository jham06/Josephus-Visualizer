import react, {useState} from 'react'

function Numbers () {

    const [count, setCount] = useState(2) // This sets the initial value to be zero

    const increment = () => {
        setCount(count + 1);

    }

    const decrement = () => {
        setCount(Math.max(2, count - 1));
    }

    const reset = () => {
        setCount(2)
    }

    return (<div className="counter-container"> 
        <p className='count-display'> People: {count}</p>
        <button className='counter-button' onClick={decrement} >🔽</button>
        <button className='counter-button' onClick={reset}>🔄RESET</button>
        <button className='counter-button' onClick={increment}>🔼</button>
        </div>
    )
}

export default Numbers