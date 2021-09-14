import React, { useState, } from "react";
import styled from "styled-components";
import { Buttons } from "./Buttons";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import './Buttons.css'
import './Filter.css'
import '../../App.css'
const A = styled.div`
  margin-left: ${(props) => props.fd * 1.3}px;
`;
export const Filters = ({ setUsers, jobs }) => {
    const [state, setState] = React.useState(false);
    const [salary, setSalary] = useState(0);
    const [direc, setDirec] = useState(true);
    const [calculated, setCalculated] = useState(0);
    let searchQuery = localStorage.getItem('searchQuery')

    const handleClick = () => {
        setState((prev) => !prev);
    };
    const filters = [
        "Date Posted",
        "Remote",
        "Education level",
        "Company",
        "Job Language",
        "Job Type"
    ];
    const dateItems = [
        "Last 10 days",
        "Last 15 days",
        "Last 8 days",
        "Last 4 days",
        "Last 3 days",
    ];
    const jtype = ["Part Time(5)",
        "Fill Time(15)", "Fresher(4)", "InternShip(10)"
    ]
    const remote = ["Work from home", "On site"];
    const education = [
        "Bachelor's Degree(12)",
        "12th Pass(2)",
        "Master's Degree(1)",
        "10th Pass(2)",
    ];
    const company = ["Aivee", "Trilia", "Fadeo", "Zoomzone", "Mita", "Yodel", "Feedfish", "Dazzlesphere", "Twitterbridge", "Yadel", "Gigashots", "Tazzy", "Flashspan", "Devpulse", "Devbug", "Topicstorm", "Skyndu", "Talane", "Tekfly", "Dabfeed", "Skinder", "Bubblebox", "Kazio", "Fiveclub", "Twitternation", "Mynte", "Einti", "Oyope", "Twitterbeat", "Jabberbean", "Blogspan", "Wikizz", "Linktype", "Buzzdog", "Eazzy", "Oyoba", "Feedbug", "Photolist", "Tanoodle", "InnoZ", "Kare", "Skyba", "Fivespan", "Tagpad", "Babbleblab", "Mydo", "Buzzster", "Yotz"];
    const language = ["English", "Hindi", "Marathi"];
    function increase(e) {
        if (salary === 78300) {
            setDirec(!direc);
        }

        if (direc) {
            let temp = calculated + 1;
            setCalculated(temp);
        } else {
            let temp = calculated - 1;
            setCalculated(temp);
        }
    }
    return (
        <div className="upper-part">
            <div className="wrapper">
                <div className="form-container">
                    <form className="form">
                        <div className="job-input">
                            What
                            <input value={searchQuery} type="text" placeholder="Accountant" />
                        </div>
                        <div className="job-input">
                            Where
                            <input type="text" placeholder="Noida, Uttar Pradesh" />
                        </div>
                        <span className="findjobs">
                            <button className="jobs" type="submit">Find Jobs</button>
                            <span className="advance">Advanced Job Search</span>
                        </span>
                    </form>
                </div>
                {/* Filter Dropdowns */}
                <div className="filter-div">
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[0]} filters={dateItems} />
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[1]} filters={remote} />
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[2]} filters={education} />
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[3]} filters={company} />
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[4]} filters={language} />
                    <Buttons setUsers={setUsers} jobs={jobs} tag={filters[5]} filters={jtype} />
                    <div id="parentDiv"  >
                        <Button classes={{ root: 'button', label: 'button-label' }} onClick={handleClick} variant="contained">
                            Salary Estimate <ArrowDropDownSharpIcon />{" "}
                        </Button>
                        <Paper className={state ? "show" : "hidden"} id="expand sala" style={{ zIndex: 12 }} variant="outlined" square>
                            <div className="salary-container">
                                <div className="heading">
                                    <h2 className="filter-header">
                                        What's your desired salary per month?
                                    </h2>
                                </div>
                                <div className="slider">
                                    <A fd={calculated}>₹{salary > 650 ? salary : ""}</A>
                                </div>
                                <input
                                    type="range"
                                    tabIndex="0"
                                    // role="slider"
                                    aria-valuemin="0"
                                    aria-valuemax="78300"
                                    aria-valuenow="67800"
                                    aria-valuetext="₹67,800"
                                    min="0"
                                    max="78300"
                                    step="100"
                                    aria-orientation="horizontal"
                                    className="Slider-range"
                                    onChange={(e) => {
                                        if (e.target.value > 650) {
                                            setSalary(e.target.value);
                                        }
                                        increase(e);
                                    }} />
                                <div className="max-data">78K+</div>
                            </div>
                        </Paper>
                    </div>

                </div>
            </div>
        </div>
    );
};
