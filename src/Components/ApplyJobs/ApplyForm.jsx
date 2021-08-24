import React from 'react'
import { ProgressBar } from 'react-step-progress-bar'
import { useState } from 'react'
import { useRef } from 'react'
import { MdInfo } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { BsFileEarmarkArrowUp } from "react-icons/bs";
import { CgFileRemove } from "react-icons/cg";
import { FaFileSignature } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import ReviewPage from './ReviewPage'
import FormDiv from './StyledForm'
import UploadResume from './StyledUploadResume'
import AddExperience from './StyledExperience'
import AddCoverLetter from './StyledCoverLetter'


const ApplyForm = ({setRight}) => {
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const [step4, setStep4] = useState(false)
    const [review, setReview] = useState(false)
    const [coverLetter, setCoverLetter] = useState(true);
    const inputRef = useRef()

    const comp = JSON.parse(localStorage.getItem('appliedJob')).companyName
    const [formData, setFormData] = useState({})
    let user = JSON.parse(localStorage.getItem('user'))
    
    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    const handleContinue1 = (event) => {
        event.preventDefault();
        setStep1(!step1)
        setStep2(!step2)

    }

    const handleContinue2 = () => {
        setStep2(!step2)
        setStep3(!step3)
    }

    const handleContinue3 = (event) => {
        event.preventDefault();
        setStep3(!step3)
        setStep4(!step4)
    }

    const handleReview = () => {
        setStep4(!step4)
        setReview(!review)
        setRight(false)
        console.log(formData)
    }

    const handleChoose = () => {
        inputRef.current.click();
    }

    const handleCoverLetter = () => {
        setCoverLetter(!coverLetter)
    }

    return (
        <>
            {step1 && <FormDiv>
                <ProgressBar percent={20} unfilledBackground="gray" />


                <h6>Application step 1 of 5</h6>
                <h4 style={{fontWeight:600,margin:"19px 0"}}>Add your contact information</h4>
                <form>
                    <label htmlFor="firstName">First name</label>
                    <input type="text" name="firstName" onChange={handleChange} />
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastName" onChange={handleChange} />
                    <label htmlFor="phoneNumber">Phone number</label>
                    <input type="text" name="phoneNumber" onChange={handleChange} />
                    <h5>Email</h5>
                    <p>{user.emaild}</p>
                    <label htmlFor="city">City, State </label><small>(optional)</small>
                    <input type="text" name="city" onChange={handleChange} />
                    <div>
                        <MdInfo />
                        <p>Your online resume will also be updated with this contact information.</p>
                    </div>
                    <div>
                        <h5>Return to job search</h5>
                        <button onClick={handleContinue1}>Continue</button>
                    </div>
                </form>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </FormDiv>}

            {step2 && <UploadResume>
                <ProgressBar percent={40} unfilledBackground="gray" />

                <div>
                    <BiArrowBack id="arrow"  onClick={handleContinue1} />
                    <h6>Application step 2 of 5</h6>
                </div>
                <h3 style={{marginTop:20,paddingTop:20,fontWeight:700}}>Add a resume for {comp}</h3>
                <input type="file" name="resume" onChange={handleChange} ref={inputRef} style={{ display: 'none' }} />
                <div onClick={handleChoose}>
                    <BsFileEarmarkArrowUp />
                    <section>
                        <h4 style={{margin:0,padding:0}}>Upload resume</h4>
                        <p>Use a pdf, docx, doc, rtf and txt</p>
                    </section>
                    <TiTick />
                </div>

                <div>
                    <h5 style={{margin:0,padding:0}}>Return to job search</h5>
                    <button onClick={handleContinue2}>Continue</button>
                </div>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </UploadResume>}

            {step3 && <AddExperience>
                <ProgressBar percent={60} unfilledBackground="gray" />

                <div>
                    <BiArrowBack id="arrow" onClick={handleContinue2} />
                    <h6>Application step 3 of 5</h6>
                </div>
                <h4 style={{marginTop:6,marginBottom:25}}>Enter a past job that shows relevant experience</h4>
                <h5>Relevant experience <span>(optional)</span></h5>
                <form action="">
                    <label htmlFor="jobTitle">Job title</label>
                    <input type="text" name="jobTitle" onChange={handleChange} />
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" onChange={handleChange} />
                    <label htmlFor="experience">Experience </label><span>(in years)</span>
                    <input type="number" name="experience" onChange={handleChange} />
                </form>
                <div>
                    <h5>Exit</h5>
                    <button onClick={handleContinue3}>Continue</button>
                </div>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </AddExperience>}

            {step4 && <AddCoverLetter>
                <ProgressBar percent={80} unfilledBackground="gray" />

                <div className="arrowBack">
                    <BiArrowBack id="arrow"  onClick={handleContinue3} />
                    <h6>Application step 4 of 5</h6>
                </div>
                <h4>Want to include any supporting documents?</h4>
                <h5>Cover letter <span>(optional)</span></h5>
                <div onClick={handleCoverLetter}>
                    <CgFileRemove />
                    <section>
                        <h5>Apply without cover letter</h5>
                        <p>Cover letter is optional for this job</p>
                    </section>
                    {coverLetter && <TiTick />}
                </div>
                <div onClick={handleCoverLetter}>
                    <FaFileSignature />
                    <section>
                        <h5>Write cover letter</h5>
                        <p>Explain how you're a good fit</p>
                    </section>
                    {!coverLetter && <TiTick />}
                </div>
                <div>
                    <h5>Exit</h5>
                    <button onClick={handleReview}>Review your application</button>
                </div>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </AddCoverLetter>}

            {review && <ReviewPage formData={formData} handleReview={handleReview} />}
        </>
    )
}

export default ApplyForm
