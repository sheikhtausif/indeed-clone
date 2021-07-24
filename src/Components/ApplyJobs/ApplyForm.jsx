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


const ApplyForm = () => {
    const [step1, setStep1] = useState(true)
    const [step2, setStep2] = useState(false)
    const [step3, setStep3] = useState(false)
    const [step4, setStep4] = useState(false)
    const [review, setReview] = useState(false)
    const [coverLetter, setCoverLetter] = useState(true);
    const inputRef = useRef()
    // const [myPdf, setMyPdf] = useState("");
    const [newPdf, setNewPdf] = useState("");

    const [formData1, setFormData1] = useState({})

    const handleChange = (event) => {
        // console.log(event.target.value);
        const { name, value } = event.target

        setFormData1({ ...formData1, [name]: value })
        // setMyPdf(event.target.files[0]);

    }

    const handleContinue1 = (event) => {
        event.preventDefault();
        // console.log("handleContinue1")
        setStep1(!step1)
        setStep2(!step2)
        // console.log('formData:', formData1)

    }
    const handleContinue2 = () => {
        // event.preventDefault();
        // console.log("handleContinue2")
        setStep2(!step2)
        setStep3(!step3)

        const reader = new FileReader();
        console.log(reader);
        reader.onload = () => {
            if (reader.readyState === 2) {
                setNewPdf(reader.result);
            }
        };
        // reader.readAsDataURL(myPdf);

        setFormData1({ ...formData1, newPdf })
        // console.log('formData:', formData1)

    }
    const handleContinue3 = (event) => {
        event.preventDefault();
        // console.log("handleContinue3")
        setStep3(!step3)
        setStep4(!step4)
        console.log('formData:', formData1)

    }

    const handleReview = () => {
        // console.log("handleReview")
        setStep4(!step4)
        setReview(!review)
    }

    const handleChoose = () => {
        inputRef.current.click();
        // console.log("hello UploadResume");
    }

    const handleCoverLetter = () => {
        // console.log("cover letter");
        setCoverLetter(!coverLetter)

    }

    return (
        <>
            {!step1 && <FormDiv>
                {/* <div >
                </div> */}
                <ProgressBar percent={20} unfilledBackground="gray" />


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
                    <label htmlFor="city">City, State </label><small>(optional)</small>
                    <input type="text" name="city" onChange={handleChange} />
                    <div>
                        <MdInfo />
                        <p>Your online resume will also be updated with this contact information.</p>
                    </div>
                    <div>
                        <h4>Return to job search</h4>
                        <button onClick={handleContinue1}>Continue</button>
                    </div>
                </form>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </FormDiv>}

            {step2 && <UploadResume>
                {/* <div></div> */}
                <ProgressBar percent={40} unfilledBackground="gray" />

                <div>
                    <BiArrowBack onClick={handleContinue1} />
                    <h5>Application step 2 of 5</h5>
                </div>
                <h2>Add a resume for FlexTrade</h2>
                <input type="file" name="resume" onChange={handleChange} ref={inputRef} style={{ display: 'none' }} />
                <div onClick={handleChoose}>
                    <BsFileEarmarkArrowUp />
                    <section>
                        <h4>Upload resume</h4>
                        <p>Use a pdf, docx, doc, rtf and txt</p>
                    </section>
                    <TiTick />
                </div>

                <div>
                    <h4>Return to job search</h4>
                    <button onClick={handleContinue2}>Continue</button>
                </div>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </UploadResume>}

            {step3 && <AddExperience>
                {/* <div></div> */}
                <ProgressBar percent={60} unfilledBackground="gray" />

                <div>
                    <BiArrowBack onClick={handleContinue2} />
                    <h5>Application step 3 of 5</h5>
                </div>
                <h2>Enter a past job that shows relevant experience</h2>
                <h4>Relevant experience <span>(optional)</span></h4>
                <form action="">
                    <label htmlFor="jobTitle">Job title</label>
                    <input type="text" name="jobTitle" onChange={handleChange} />
                    <label htmlFor="company">Company</label>
                    <input type="text" name="company" onChange={handleChange} />
                    <label htmlFor="experience">Experience </label><span>(in years)</span>
                    <input type="number" name="experience" onChange={handleChange} />
                </form>
                <div>
                    <h4>Exit</h4>
                    <button onClick={handleContinue3}>Continue</button>
                </div>
                <p>Having an issue with this application?<span>Tell us more</span></p>
            </AddExperience>}

            {step4 && <AddCoverLetter>
                {/* <div></div> */}
                <ProgressBar percent={80} unfilledBackground="gray" />

                <div>
                    <BiArrowBack onClick={handleContinue3} />
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
            </AddCoverLetter>}

            {!review && <ReviewPage formData1={formData1} handleReview={handleReview} />}
        </>
    )
}

export default ApplyForm
