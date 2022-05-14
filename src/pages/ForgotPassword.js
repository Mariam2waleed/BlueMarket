import "../styles/ForgotPassword.css";
import Forgotimage from "../Images/Forgot.jpeg"
import { Link } from "react-router-dom";


function ForgotPassword() {



  return (
    <div className="about">
    <div className="aboutTop" style={{ backgroundImage: `url(${Forgotimage})` }}>
    </div>
    <div className="aboutBottom">
        <h1>Oops...Forgot your Password?</h1>
        <label> Enter your Email </label>
        <input type="email" id="emailId" />   
        <button> Done </button> 
     </div>
</div>
  )
}

export default ForgotPassword;
