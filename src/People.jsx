// After receiving the array, it should display perfectly 
function People (props) {


// Now i have access to the index and total, which makes me be able to calculate the positions of the circles. 
const radius = 150; // THese are the fixed values for the circle
const centerY = 200;
const centerX = 200;


const angle = (2 * Math.PI / props.total) * props.index
const x = centerX + radius * Math.cos(angle) // But radius is not defined???
const y = centerY + radius * Math.sin(angle)


        return (<div className="person" style={{ position: "absolute", left: x, top: y, backgroundColor: props.alive ? "green": "red"}}>{props.id}</div>
        )
}

export default People