import { Link } from "react-router-dom";
import "../styles/Menu.css";

function VegetablesItem (props) {
    return (
        <div className="menuItem">
            <div style = {{backgroundImage: `url(${props.Image})`}}> </div>
            <h1> {props.Name} </h1>
            <p> {props.Price} </p>
        </div>
    )
}
export default VegetablesItem