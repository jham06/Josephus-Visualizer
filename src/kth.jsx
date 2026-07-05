
function Kth (props) {

    // now using props, i should be able to import the functions into this file?
    return (<div className="counter-container"> 
        <p className='count-display'> Steps: {props.steps}</p>
        <button disabled={props.isRunning} className='counter-button' onClick={props.decrementK} >▼</button>
        <button disabled={props.isRunning} className='counter-button' onClick={props.resetK}>⟳ RESET</button>
        <button disabled={props.isRunning} className='counter-button' onClick={props.incrementK}>▲</button>
        </div>
    )
}

export default Kth