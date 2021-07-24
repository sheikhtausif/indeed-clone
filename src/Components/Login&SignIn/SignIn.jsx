import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import "./Login.css";
import {useState} from 'react'
import { Link} from "react-router-dom";

import {v4 as uuid} from "uuid"

function SignIn() {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("") 
  const[data,setData] = useState([])
  return (
    <div className="greyBackground">
      {/* <FcGoogle /><FaApple /><SiFacebook /> */}
      <div className="container">
        <div className="textCentre">
          {" "}
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/indeed-logo.png"
            alt="indeed"
          />
        </div>
        <form className="whiteBackground" onSubmit ={(e)=>{
          e.preventDefault()
        }}>
          <div className="SingInText">Create an Account (It's free)</div>
          <button>
            <FcGoogle className="logo" /> SignIn with Gooogle
          </button>
          <button>
            <FaApple className="logo" />
            SignIn with Apple
          </button>
          <button className="facebookButton">
            <SiFacebook className="logo " /> SignIn with facebook
          </button>
          <hr className="devider_left" /> <span className=" or">or</span>{" "}
          <hr className="devider_left" />
          <p>Email Address</p>
          <input
            value ={userName}
            className="inputBox"
            type="email"
            
            name="emailId"
            onChange={e=>{
              setUserName(e.target.value)
              // console.log(userName)
            }}
          />
          <p>Password</p>
          <input
          value ={password}
            className="inputBox"
            type="password"
            
            name="Password"
            onChange={e=>{
              setPassword(e.target.value)
              // console.log(password)
            }}
          />
          <p>
            <input
              type="checkbox"
              
              name="checkedIn"
              value="checkedIn"
            />
            <label htmlFor="checkedIn">keep me signed In this device</label>
          </p>
          <button className="SignInButton" onClick={()=>{
            if(userName === "" || password === ""){
              alert('enter emailId or Password')
              return
            }
            setData([...data,{'userName':userName ,'password':password,'id':uuid()}])

            console.log(data)
            setPassword('')
            setUserName('')
          }

          }><Link to="/login">Create an Account</Link></button>
          <hr />
          <div className='textCentre Terms' >By creating an account, you agree to Indeed's <span className='facebookButton'>Terms of Service</span> ,<span className='facebookButton'>Cookie Policy</span>  and <span className='facebookButton'>Privacy Policy</span> . You consent to receiving marketing messages from Indeed and may opt out from receiving such messages by following the unsubscribe link in our messages, or as detailed in our terms.</div>
        </form>
      </div>
    </div>
  );
}
export { SignIn };
