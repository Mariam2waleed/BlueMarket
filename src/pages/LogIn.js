import "../styles/LogIn.css";
import {useRef} from "react";
import LogINimage from "../Images/LogIN.jpg"
import { Link } from "react-router-dom";
  

function LogIn() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function submitHandler (event){
    event.preventDefault();

    const nameValue = nameRef.current.value;
    const emailvalue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    const data = {name: nameValue, email: emailvalue, password: passwordValue }
    console.log(data)
    }
    return (
    <div className="about">
    <div> <div className= "contact" >
       <div className= "leftSide" style={{backgroundImage: `url(${LogINimage})`}} > </div> 
      <div className= "rightSide">
        <h1> LogIn.. </h1>
        <form onSubmit={submitHandler}>
          <label> Enter your  Name </label>
          <input type="text" id="nameId" ref={nameRef}/>
          <label> Enter your Email </label>
          <input type="email" id="emailId" ref={emailRef}/>
          <label> Enter your Password </label>
          <input type="password" id="passwordId" ref={passwordRef}/>
          <button type="submit"> Done </button>
        </form>
        <Link to="/ForgotPassword"> Forgot your password?  </Link>
        <Link to="/Registration"> Don't have an account? </Link>
      </div>
    </div> </div>    
        </div>
    )
}
export default LogIn;
