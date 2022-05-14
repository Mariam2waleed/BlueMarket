import { Link } from "react-router-dom";
import "../styles/Menu.css";

function MenuItem(props) {
    return (
        <div className="menuItem">
            <div style = {{backgroundImage: `url(${props.image})`}}> </div>
            <h1> {props.name} </h1>
            <Link to= {props.More} ><button>See Moore</button></Link>
        </div>
    )
}
export default MenuItem