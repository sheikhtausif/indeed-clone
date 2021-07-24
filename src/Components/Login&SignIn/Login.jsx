import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import {useState} from "react"
import { Link} from "react-router-dom";

import "./Login.css";
function Login() {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  return (
    <div className="greyBackground">
      {/* <FcGoogle /><FaApple /><SiFacebook /> */}
      <div className="container">
        <div className="textCentre">
        
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2018/03/indeed-logo.png"
            alt="indeed"
          />
        </div>
        <form className="whiteBackground" onSubmit={e=>{
          e.preventDefault()
        }}>
          <div>Sign In</div>
          <p>Email Address</p>
          <input
          value ={userName}
          onChange={(e)=>{
            setUserName(e.target.value)
          }}
            className="inputBox"
            type="text"
           
            name="emailId"
          />
          <p>Password</p>
          <input
          value ={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            className="inputBox"
            type="password"
           
            name="Password"
          />
          <p>
          <input
            
            type="checkbox"
            
            name="checkedIn"
            value="checkedIn"
          />
          <label htmlFor="checkedIn">
             keep me signed In this device
          </label>
          </p>
          
          <button className="SignInButton"><Link to="/">Sign In</Link></button>
          <hr className="devider_left" /> <span className=" or">or</span>{" "}
          <hr className="devider_left" />
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
          <p className="textCentre">
            <a href="SignIn.jsx">New to Indeed? Create an account </a>
          </p>
          <hr />
          <div className='Terms textCentre' > By signing in to your account, you agree to Indeed' <span className='facebookButton'> Terms of Service</span>  and consent to our <span className='facebookButton'> Cookie Policy</span>  and <span className='facebookButton'> Privacy Policy</span>.</div>
        </form>
      </div>
    </div>
  );
}
export { Login };
