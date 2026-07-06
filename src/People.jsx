// After receiving the array, it should display perfectly 
function People (props) {


// Now i have access to the index and total, which makes me be able to calculate the positions of the circles. 
const radius = 350; // THese are the fixed values for the circle
const centerY = 400;
const centerX = 400;


const angle = (2 * Math.PI / props.total) * props.index - Math.PI /2
const x = centerX + radius * Math.cos(angle) // But radius is not defined??? my bad it is im just dumb as shit
const y = centerY + radius * Math.sin(angle)


        return (<div className="person" style={{ position: "absolute", left: x-35, top: y-35, backgroundColor: props.alive ? "green": "red", boxShadow: props.alive ? '0 0 10px #00ff88, 0 0 20px rgba(0, 255, 136, 0.4)': '0 0 10px #ff3333, 0 0 20px rgba(255, 51, 51, 0.4)', color: '#0a0a1a',
  fontWeight: 'bold'}}>{props.id}</div>
        )
}

export default People