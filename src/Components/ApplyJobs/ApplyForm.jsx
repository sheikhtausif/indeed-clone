import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { MdInfo } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { CgFileRemove } from "react-icons/cg";
import { FaFileSignature } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import FormDiv from './StyledForm'
import UploadResume from './StyledUploadResume'
import AddExperience from './StyledExperience'
import styled from 'styled-components'

const AddCoverLetter = styled.div`
    width: 46%;
    margin: auto;

    div:first-child{
        width: 100%;
        height:7px;
        background: navy;
        border-radius:12px;
        margin: 50px 0 10px;
        padding:0;
    }
    div:nth-child(2){
        display:flex;
        align-items: center;
    }
    div:nth-child(2)>:first-child{
        cursor:pointer;
        width: 20px;
        margin-right: 8px;
        padding:5px;
    }
    div:nth-child(2)>:first-child:hover{
        background: rgb(238, 241, 254);
        border-radius:5px;
    }

    h2{
        margin: 19px 0;
    }
    h4>span{
        font-weight: normal;
    }

    & label{
        font-weight: bold;
    }
    & input{
        display: block;
        width: 94%;
        padding:11px;
        border: 1px solid black;
        border-radius:7px;
        margin: 8px 0 28px;
        font-size:17px;
        outline:none;
    }
    div:nth-child(5),div:nth-child(6){
        display:flex;
        /* justify-content:space-evenly; */
        align-items: center;
        border: 1px solid rgb(22, 64, 129);
        border-radius:8px;
        padding: 11px;
        margin-top: 10px;
        cursor: pointer;
    }
    div:nth-child(5)>:first-child,div:nth-child(6)>:first-child{
        width: 30px;
        height: 30px;
        color: grey;
        margin-right: 8px;
    }
    div:nth-child(5)>:nth-child(3),div:nth-child(6)>:nth-child(3){
        width: 20px;
        height: 20px;
        color: white;
        background: rgb(22, 64, 129);
        border-radius: 50%;
        margin-left: 130px;
    }
    div:nth-child(6)>:nth-child(3){
        margin-left: 160px;
    }
    div:nth-child(6)>:nth-child(5){
        display:block;
    }
    & section>h4{
        color: rgb(22, 64, 129);
    }
    & section>p{
        font-size:14px;
    }

    div:nth-child(7){
        display:flex;
        justify-content:flex-end;
        align-items:center;
        margin-top:50px;
        margin-bottom:50px;
    }
    div:nth-child(7)>:first-child{
        color: rgb(22, 64, 129);
        margin-right: 30px;
        cursor: pointer;
    }
    div:nth-child(7)>button{
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

    & p{
        text-align:center;
    }
    p>span{
        color:rgb(22, 64, 129);
        cursor: pointer;
    }
`;



const ApplyForm = () => {
    const [showInput, setShowInput] = useState(false);
    const [coverLetter, setCoverLetter] = useState(true);
    const inputRef = useRef()

    const handleChange = (event) => {
        console.log(event.target.value);
    }

    const handleContinue = (event) => {
        event.preventDefault();
        console.log("Working")
        setShowInput(true);
    }


    const handleChoose = () => {
        inputRef.current.click();
        console.log("hello UploadResume");
    }

    const handleReview = () => {
        console.log("handleReview")
    }

    const handleCoverLetter = () => {
        console.log("cover letter");
        setCoverLetter(!coverLetter)

    }

    return (
        <>
            {showInput && <FormDiv>
                <div></div>
                <h5>Application step 1 of 5</h5>
                <h2>Add your contact information</h2>
                <form>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" onChange={handleChange} />
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName" onChange={handleChange} />
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="text" name="phoneNumber" onChange={handleChange} />
                    <h4>Email</h4>
                    <p>email@example.com</p>
                    <label htmlFor="phoneNumber">City </label><small>(optional)</small>
                    <input type="text" name="phoneNumber" onChange={handleChange} />
                    <div>
                        <MdInfo />
                        <p>Your online resume will also be updated with this contact information.</p>
                    </div>
                    <div>
                        <h4>Return to job search</h4>
                        <button onClick={handleContinue}>Continue</button>
                    </div>
                </form>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </FormDiv>}

            {showInput && <UploadResume>
                <div></div>
                <div>
                    <BiArrowBack />
                    <h5>Application step 2 of 5</h5>
                </div>
                <h2>Add a resume for FlexTrade</h2>
                <input type="file" onChange={handleChange} ref={inputRef} style={{ display: 'none' }} />
                <div onClick={handleChoose}>
                    <BsFileEarmarkArrowUp />
                    <section>
                        <h4>Upload resume</h4>
                        <p>Use a pdf, docx, doc, rtf and txt</p>
                    </section>
                </div>

                <div>
                    <h4>Return to job search</h4>
                    <button onClick={handleContinue}>Continue</button>
                </div>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </UploadResume>}

            {showInput && <AddExperience>
                <div></div>
                <div>
                    <BiArrowBack />
                    <h5>Application step 3 of 5</h5>
                </div>
                <h2>Enter a past job that shows relevant experience</h2>
                <h4>Relevant experience <span>(optional)</span></h4>
                <form action="">
                    <label htmlFor="jobTitle">Job title</label>
                    <input type="text" name="jobTitle" onChange={handleChange} />
                    <label htmlFor="jobTitle">Company</label>
                    <input type="text" name="company" onChange={handleChange} />
                    <label htmlFor="jobTitle">Experience </label><span>(in years)</span>
                    <input type="number" name="experience" onChange={handleChange} />
                </form>
                <div>
                    <h4>Exit</h4>
                    <button onClick={handleContinue}>Continue</button>
                </div>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </AddExperience>}

            <AddCoverLetter>
                <div></div>
                <div>
                    <BiArrowBack />
                    <h5>Application step 4 of 5</h5>
                </div>
                <h2>Want to include any supporting documents?</h2>
                <h4>Cover letter <span>(optional)</span></h4>
                <div onClick={handleCoverLetter}>
                    <CgFileRemove />
                    <section>
                        <h4>Apply without cover letter</h4>
                        <p>Cover letter is optional for this job</p>
                    </section>
                    {coverLetter && <TiTick />}
                </div>
                <div onClick={handleCoverLetter}>
                    <FaFileSignature />
                    <section>
                        <h4>Write cover letter</h4>
                        <p>Explain how you're a good fit</p>
                    </section>
                    {!coverLetter && <TiTick />}
                    {/* <hr />
                    <textarea name="coverLetter" cols="30" rows="10"></textarea> */}
                </div>
                <div>
                    <h4>Exit</h4>
                    <button onClick={handleReview}>Review your application</button>
                </div>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </AddCoverLetter>

        </>
    )
}

export default ApplyForm
