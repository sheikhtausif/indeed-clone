import React from 'react'
import Paper from "@material-ui/core/Paper";
import StarRateIcon from '@material-ui/icons/StarRate';
import './JobCards.css'
export const JobCards = ({ ele, setDetails, crossit, setCrossit }) => {
    console.log(ele);
    let jobs = JSON.parse(localStorage.getItem('jobs'))
    const [state, setState] = React.useState(false);
    const [status, setStatus] = React.useState(true);
    const handleClick = (e) => {
        setState((prev) => !prev);

        console.log(state);
    };
    const saveJob = (e) => {
        localStorage.setItem('appliedJob',JSON.stringify(ele))
        console.log(e);
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].id === e) {
                let item = jobs[i]
                setDetails(item)
                break
            }
        }
    }
    return <div id={ele.id} className={status ? "card" : "shrinkk"} onClick={() => {
        saveJob(ele.id)
        setCrossit(false)
    }} >
        < nav className={status ? "dis" : "rem"}>
            <div className="top">
                <p className="new">new</p>
                <div className="dots" onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <Paper className={state ? "show" : "hidden"} id="expandd" variant="outlined" square>
                        <p onClick={() => setStatus(!status)}>Not Interested</p>
                        <p >Save job</p>
                    </Paper>
                </div>
            </div>
            <h3 >{ele.job}</h3>
            <h4>{ele.companyName} <p className="rating">{ele.rating}.0</p> <span className="starr">{<StarRateIcon style={{ width: 17, display: "flex", marginTop: 3, color: "grey" }} />}</span></h4>
            <h4>{ele.city}, {ele.state}</h4>
            <img src="/freq.png" alt="" />
            <ul>
                <li>{ele.skills1}</li>
                <li>{ele.skills2}</li>
            </ul>
            <p className="postDate">{ele.date} days ago</p>
        </nav>
        {status ? null : <div className="undo" onClick={() => setStatus(!status)}>
            <div>Job removed</div>
            <div>Undo</div>
        </div>}
    </div>


}
