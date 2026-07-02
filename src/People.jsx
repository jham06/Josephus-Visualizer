// After receiving the array, it should display perfectly 
function People (props) {
        return (<div className="person" style={{backgroundColor: props.alive ? "green": "red"}}>{props.id}</div>
        )
}

export default People