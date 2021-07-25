import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { ProgressBar } from 'react-step-progress-bar'
import { VscFilePdf } from "react-icons/vsc";
import ReviewDiv from './StyledReviewPage'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const ReviewPage = ({ handleReview, formData }) => {
  let user = JSON.parse(localStorage.getItem('user'))
    

    return (
        <ReviewDiv>
            <div id="prog"></div>
            {/* <ProgressBar id="prog" percent={100} unfilledBackground="gray" filledBackground="navy" /> */}
            <div className="backArrow">
                <BiArrowBack id="arrow" onClick={handleReview} />
                <h6>Application step 5 of 5</h6>
            </div>
            <h2>Please review your application</h2>
            <h4>Contact information</h4>
            <div className="contactInfo">
                <div>
                    <p>Full Name</p>
                    <h3>{`${formData.firstName} ${formData.lastName}`}</h3>
                </div>
                <div>
                    <p>Email Address</p>
                    <h3>{user.emaild}</h3>
                    <small>To mitigate fraud, Indeed may mask your email address. If masked, the employer will see an address like <strong>{user.emaild}</strong>. Some employers, however, may still be able to unmask and see your actual email address.</small>
                </div>
                <div>
                    <p>City, State</p>
                    <h3>{formData.city}</h3>
                </div>
                <div>
                    <p>Phone Number</p>
                    <h3>{formData.phoneNumber}</h3>
                </div>
            </div>

            <h4>Resume</h4>
            <div className="resume">
                <VscFilePdf />
                <h3>{formData.resume.slice(12)}</h3>
            </div>

            <h4>Employee questions</h4>
            <div className="questions">
                <div>
                    <p>Job Profile</p>
                    <h3>{formData.jobTitle}</h3>
                </div>
                <div>
                    <p>Company name</p>
                    <h3>{formData.company}</h3>
                </div>
                <div>
                    <p>How many years of total work experience do you have?</p>
                    <h3>{formData.experience}</h3>
                </div>
            </div>
            <p style={{ fontSize: "15px" }}>If you notice an error in your application, please <br /><span style={{ textDecoration: "underline" }}>contact Indeed</span></p>

            <div className="checkbox">
                <div>
                    <input type="checkbox" name="" id="" />
                    <h3>Notify me by email when similar jobs are available</h3>
                </div>
                <small >By creating a job alert, you agree to our <span>Terms</span>. You can change your consent settings at any time by unsubscribing or as detailed in our terms.</small>
            </div>
            <small>By pressing apply: 1) you agree to our <span>Terms, Cookie & Privacy Policies</span>; 2) you consent to your application being transmitted to the Employer (Indeed does not guarantee receipt), & processed & analyzed in accordance with its & Indeed's terms & privacy policies; & 3) you acknowledge that when you apply to jobs outside your country it may involve you sending your personal data to countries with lower levels of data protection.</small>

            <div>
                <h4>Exit</h4>
                <button><Link style={{color:"white"}} to="/sucess">Submit your application</Link></button>
            </div>
            <p className="textCenter">Having an issue with this application?<span>Tell us more</span></p>
        </ReviewDiv>
    )
}

export default ReviewPage