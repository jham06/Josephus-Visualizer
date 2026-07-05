
function Numbers (props) {

    // now using props, i should be able to import the functions into this file? testing
    return (<div className="counter-container"> 
        <p className='count-display'> People: {props.people}</p>
        <button disabled={props.isRunning} className='counter-button' onClick={props.decrementN} >🔽</button>
        <button disabled={props.isRunning} className='counter-button' onClick={props.resetN}>🔄RESET</button>
        <button disabled={props.isRunning} className='counter-button' onClick={props.incrementN}>🔼</button>
        </div>
    )
}

export default Numbers
