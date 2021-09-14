import React from 'react'
import './JobCards.css'
import './JobDetails.css'
import { useState } from 'react';
import { Link } from "react-router-dom";

import StarRatings from 'react-star-ratings';
export const JobDetails = ({ details, crossit, setCrossit }) => {
    const [saved, setSaved] = useState(true)
    return (
        <div>
            <div className="jobHeadings">
                <div className="titlee" >
                    <h3 >{details.job}</h3>
                    <svg onClick={() => setCrossit(!crossit)} className="cross" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.536 7.8987c-0.1953-0.19526-0.5119-0.19526-0.7071 0l-2.8284 2.8284-2.8285-2.8284c-0.19526-0.19527-0.51185-0.19527-0.70711 0l-0.56568 0.56568c-0.19527 0.19526-0.19526 0.51185 0 0.70711l2.8285 2.8284-2.8285 2.8285c-0.19526 0.1952-0.19526 0.5118 0 0.7071l0.56568 0.5657c0.19527 0.1952 0.51185 0.1952 0.70711 0l2.8285-2.8285 2.8284 2.8284c0.1952 0.1953 0.5118 0.1953 0.7071 0l0.5657-0.5657c0.1952-0.1953 0.1952-0.5118 0-0.7071l-2.8284-2.8284 2.8283-2.8284c0.1953-0.19526 0.1953-0.51184 0-0.70711l-0.5656-0.56568z" clipRule="evenodd" fill="#2D2D2D" fillRule="evenodd"></path></svg>
                </div>
                <div className="comp">
                    <h4>{details.companyName}
                    </h4>
                    <p className="rating">
                        <StarRatings
                            rating={details.rating}
                            starDimension="13px"
                            starSpacing="1px"
                        />
                    </p>
                    <p> - {details.remote}</p>
                </div>
                <h4>{details.city}, {details.state}</h4>
                <div className="apply">
                    <div className="app"><Link to="/apply">Apply Now</Link></div>
                    {saved ? <img onClick={() => setSaved(!saved)} src="/heart.png" alt="" /> : <img onClick={() => setSaved(!saved)} src="/oheart.png" alt="" />}
                </div>
            </div>
            <div className="detailed">
                <div id="jobDescriptionText" class="jobsearch-jobDescriptionText">
                    <p>Job Description:</p>
                    <p>We are looking for talented graduate fresher male candidates for email marketing process. Interested candidates should apply if he eligible for this job according to job description .Your main duties include running email marketing campaigns end-to-end and work within a team to generate the efficient result for our company.
                        <br />
                        <b>we arrange online interviews for this lockdown situation</b></p>
                    <p><b><i>Before apply just check our location, beacause we only hire local candidates due to covid 19. we hire minimum one hour distance candidates, so check the location then apply otherwise we rejected your cv with out any reply.</i></b></p>
                    <p><b><i>we don't take any charges for this job beacause this is a organisation not a consultancy. so, don't warry about that.</i></b></p>
                    <p><b>Responsibilities and Dutie: </b></p>
                    <p>1. Generate leads on daily basis through searching various domain.<br />2. Handle Email Marketing with different tools.<br />3. Formalize a deal report after done with all the campaigns.</p>
                    <p><b>Required Experience, Skills and Qualifications</b><br /><b>Minimum Qualification : </b> Diploma (Engg.) / Graduation (Any)<br /><b>Age : </b> 18 -28 year(s) only male candidates<br /><b>Experience : </b> 0 - 6 month(s)</p><p><b>Skills : </b></p><p>1. Basic Knowledge of Microsoft excel.</p><p>2. Good English Writing skill &amp; typing speed.</p><p>3. Must be smart to work under team.</p><p><b>Benefits</b><br />PF &amp; ESIC is available.<br />Paid Leaves are available.<br /><b>Contact Person : </b> KARAN DORA (HR-Executive)<br /><b>Contact Number : </b> <span class="jobsearch-JobDescription-phone-number"><a href="#MosaicProviderCallToApplyFeedback">7890801159</a></span> ( Office hours only)</p><p><b>_</b>_<br /><i>*</i>*</p><p>Job Type: Fresher</p><p>Salary: ₹9,500.00 - ₹10,000.00 per month</p><p>Schedule:</p><ul><li>Morning shift</li></ul><p>Supplemental Pay:</p><ul><li>Commission pay</li><li>Performance bonus</li></ul><p>Education:</p><ul><li>Diploma (Required)</li></ul><p>Experience:</p><ul><li>total work: 1 year (Preferred)</li></ul><p>Work Remotely:</p><ul><li>No</li></ul><p><b>Speak with the employer</b><br />+91 <span class="jobsearch-JobDescription-phone-number"><a href="#MosaicProviderCallToApplyFeedback">7890801159</a></span></p></div>
            </div>
        </div>

    )
}
