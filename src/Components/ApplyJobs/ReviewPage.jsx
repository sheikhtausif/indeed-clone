import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { ProgressBar } from 'react-step-progress-bar'
import styled from 'styled-components'

const ReviewDiv = styled.div`
    width: 46%;
    margin:16px auto;
    padding:24px;
    border: 1px solid black;
    border-radius:8px;

    /* div :nth-child(1){
        width: 100%;
        height:7px;
        background: navy;
        border-radius:12px;
        margin: 6px 0 10px;
        padding:0;
    } */
    .backArrow{
        display:flex;
        align-items: center;
    }
    .backArrow>:first-child{
        cursor:pointer;
        width: 20px;
        margin-right: 8px;
        padding:5px;
    }
    .backArrow>:first-child:hover{
        background: rgb(238, 241, 254);
        border-radius:5px;
    }
    h2{
        margin: 15px 0;
    }
    h4{
        color: grey;
    }
    .contactInfo{
        margin: 10px 0 20px;
        padding:0 10px 10px 10px;
        border: 1px solid lightgrey;
        border-radius:8px;
    }
    .contactInfo>div,.questions>div{
        border-bottom: 1px solid lightgrey;
        padding: 10px;
    }
    .contactInfo p, .questions p{
        color: #706e6e;
    }
    .contactInfo h3, .questions h3,.checkbox h3{
        font-size:17px;
        margin-bottom:20px;
    }
    small{
        color: grey;
    }
    span{
        cursor: pointer;
        color: rgb(22, 64, 129);
    }
    .contactInfo>div:last-child,.questions>div:last-child{
        border: none;
    }
    .resume{
        margin: 10px 0 20px;
        height:70px;
        border: 1px solid lightgrey;
        border-radius: 8px;
    }
    .questions{
        margin: 10px 0 20px;
        border: 1px solid lightgrey;
        border-radius: 8px;
        padding:0 10px 10px 10px;
    }
    .checkbox{
        margin-top: 16px;
        padding-bottom: 14px;
        border-top: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
    }
    .checkbox>div{
        display:flex;
        align-items: center;
        
    }
    .checkbox input{
        width: 25px;
        height: 25px;
        margin-right: 16px;
    }
    .checkbox h3{
        padding-top: 10px;
        margin-top: 8px;
    }

    div:nth-child(13){
        display:flex;
        justify-content:flex-end;
        align-items:center;
        margin-top:50px;
        margin-bottom:50px;
    }

    div:nth-child(13)>:first-child{
        color: rgb(22, 64, 129);
        margin-right: 30px;
        cursor: pointer;
    }
    div:nth-child(13)>button{
        width: 220px;
        background: rgb(22, 64, 129);
        padding:13px;
        font-weight: bold;
        font-size:15px;
        border-radius:5px;
        border: none;
        color: white;
        cursor: pointer;
    }

    .textCenter{
        text-align:center;
    }
    
`

let formData1 = {
    city: "Budaun",
    company: "Masai School",
    experience: "1",
    firstName: "Tausif",
    jobTitle: "Developer",
    lastName: "Sheikh",
    newPdf: "",
    phoneNumber: "09140708447",
    resume: "C:\\fakepath\\Highschool.pdf"
}

const ReviewPage = ({ handleReview }) => {
    console.log(formData1)

    const submitApplication = () => {
        console.log("submit done");
    }

    return (
        <ReviewDiv>
            {/* <div></div> */}
            <ProgressBar percent={100} unfilledBackground="gray" filledBackground="navy" />
            <div className="backArrow">
                <BiArrowBack onClick={handleReview} />
                <h5>Application step 5 of 5</h5>
            </div>
            <h2>Please review your application</h2>
            <h4>Contact information</h4>
            <div className="contactInfo">
                <div>
                    <p>Full Name</p>
                    <h3>{`${formData1.firstName} ${formData1.lastName}`}</h3>
                </div>
                <div>
                    <p>Email Address</p>
                    <h3>email@example.com</h3>
                    <small>To mitigate fraud, Indeed may mask your email address. If masked, the employer will see an address like <strong>mohdtausif67_j7s@indeedemail.com</strong>. Some employers, however, may still be able to unmask and see your actual email address.</small>
                </div>
                <div>
                    <p>City, State</p>
                    <h3>{formData1.city}</h3>
                </div>
                <div>
                    <p>Phone Number</p>
                    <h3>{formData1.phoneNumber}</h3>
                </div>
            </div>

            <h4>Resume</h4>
            <div className="resume"></div>

            <h4>Employee questions</h4>
            <div className="questions">
                <div>
                    <p>Job Profile</p>
                    <h3>{formData1.jobTitle}</h3>
                </div>
                <div>
                    <p>Company name</p>
                    <h3>{formData1.company}</h3>
                </div>
                <div>
                    <p>How many years of total work experience do you have?</p>
                    <h3>{formData1.experience}</h3>
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
                <button onClick={submitApplication} >Submit your application</button>
            </div>
            <p className="textCenter">Having an issue with this application?<span>Tell us more</span></p>
        </ReviewDiv>
    )
}

export default ReviewPage