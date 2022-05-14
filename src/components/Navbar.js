import "../styles/Navbar.css";
import logo from "../Images/grocery-cart.png";
import {Link} from "react-router-dom";

function Navbar() {
    
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} alt="logo"/>
                <h1> <font color="white"> Blue Market </font></h1>
            </div>
            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/LogIn">LogIn</Link>
                <Link to="/Us">About Us</Link>
            </div>
        </div>
    )
}
export default Navbar