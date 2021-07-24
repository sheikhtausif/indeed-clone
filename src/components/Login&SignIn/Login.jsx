import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import "./Login.css";
function Login() {
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
        <form className="whiteBackground">
          <div>Sign In</div>
          <p>Email Address</p>
          <input
            className="inputBox"
            type="text"
           
            name="emailId"
          />
          <p>Password</p>
          <input
            className="inputBox"
            type="password"
           
            name="Password"
          />
          <p>
          <input
            
            type="checkbox"
            id="checkedIn"
            name="checkedIn"
            value="checkedIn"
          />
          <label htmlFor="checkedIn">
             keep me signed In this device
          </label>
          </p>
          
          <button className="SignInButton">SignIn</button>
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
