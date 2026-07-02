
function Numbers (props) {

    // now using props, i should be able to import the functions into this file?
    return (<div className="counter-container"> 
        <p className='count-display'> People: {props.people}</p>
        <button className='counter-button' onClick={props.decrementN} >🔽</button>
        <button className='counter-button' onClick={props.resetN}>🔄RESET</button>
        <button className='counter-button' onClick={props.incrementN}>🔼</button>
        </div>
    )
}

export default Numbers