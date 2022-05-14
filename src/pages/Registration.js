import "../styles/LogIn.css";
import {useRef} from "react";
import LogINimage from "../Images/LogIN.jpg"
import { Link } from "react-router-dom";

function Registration() {
    const FirstnameRef = useRef();
    const LastnameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const PhonenumberRef = useRef();

function submitHandler (event){
    event.preventDefault();

    const FirstnameValue = FirstnameRef.current.value;
    const LastnameValue = LastnameRef.current.value;
    const emailvalue = emailRef.current.value;
    const PhonenumberValue = PhonenumberRef.current.value;
    const passwordValue = passwordRef.current.value;
    const data = {Firsrtname: FirstnameValue, Lastname: LastnameValue, email: emailvalue, Phonenumber: PhonenumberValue, password: passwordValue }
    console.log(data)
    
    }
    return (
    <div className="about">
    <div> <div className= "contact" >
       <div className= "leftSide" style={{backgroundImage: `url(${LogINimage})`}} > </div> 
      <div className= "rightSide">
        <h1> Registration.. </h1>
        <form onSubmit={submitHandler}>
          <label> First Name </label>
          <input type="text" id="FirstnameId" ref={FirstnameRef}/>
          <label> Last Name </label>
          <input type="text" id="LastnameId" ref={LastnameRef}/>
          <label> Enter your Email </label>
          <input type="email" id="emailId" ref={emailRef}/>
          <label> Phone number </label>
          <input type="Phone number" id="PhonenumberId" ref={PhonenumberRef}/>
          <label> Enter your Password </label>
          <input type="password" id="passwordId" ref={passwordRef}/>
          <button type="submit"> Done </button>
        </form>
        <Link to="/LogIn"> Already have an account?   </Link>
      </div>
    </div> </div>    
        </div>
    )
}
export default Registration;