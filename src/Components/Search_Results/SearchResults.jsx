import './JobCards.css'
import '../../App.css'
import React from "react";
import useRef from "react";
import { JobCards } from "./JobCards";
import { Filters } from './Filters';
import { JobDetails } from "./JobDetails";
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { Footer } from '../Home/Footer.jsx'
import styles from "../Home/landing.module.css";
import { ResumeUpload } from '../Home/ResumeUpload.jsx'
import { Header1 } from '../Home/Header1';
import { Header } from '../Home/Header';
import { Head1 } from '../Home/Head1';
export const SearchResults = () => {
  let jobs = JSON.parse(localStorage.getItem('jobs'))
  const [users, setUsers] = useState(jobs.slice(0, 50))
 
  const [pageNumber, setpageNumber] = useState(0)
  const [details, setDetails] = useState("")
  const [fa, setFa] = useState(true)
  const [crossit, setCrossit] = useState(true)
  const [sort, setSort] = useState(true)
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pageNumber]);
  const usersPerPage = 5
  const pagesVisited = pageNumber * usersPerPage;
  const displayjobs = users.slice(pagesVisited, pagesVisited + usersPerPage)
  const pageCount = Math.ceil(users.length / 10)

  const changePage = ({ selected }) => {
    setpageNumber(selected)
  };
  console.log(details);
  return (
    <>
      <div className={styles.head}><Header1/></div>
      <div className={styles.head2}>
        <Head1 />
      </div>
      <Filters setUsers={setUsers} jobs={jobs} />
      <div className="middle-container" >
        <div className="Left-container">
          <div className="search-param">
            <div className="upload">
              <h4>
                Upload your resume
              </h4>
              <h4 id="h4"> - Let employers find you</h4>
            </div>
            <div className="pages">
              <p>Online Typing jobs</p>
              <div>
                <div className="sort">
                  Sort by : <span className={sort ? "grey" : "blue"} onClick={() => {
                    let x = users.sort((a, b) => {
                      return (b.rating - a.rating)
                    })
                    console.log(x);
                    setSort(!sort)

                    setFa(!fa)
                    setUsers(x)
                  }}
                  >Relavance</span> - <span className={sort ? "blue" : "grey"} onClick={() => {
                    console.log(users);
                    let x = users.sort((a, b) => {
                      return (a.date - b.date)
                    })
                    console.log(x);
                    setFa(!fa)
                    setSort(!sort)
                    setUsers(x)
                  }}>Date</span>
                </div>
                <div>
                  Page {pageNumber + 1} of {users.length} jobs
                </div>
              </div>
            </div>
          </div>
          <div className="jobs-container">
            {
              displayjobs.map((el) => {

                return <JobCards crossit={crossit} setCrossit={setCrossit} ele={el} setDetails={setDetails} />
              })
            }
          </div>

          <div className="paginate">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginateBttns"}
              previousLinkClassName={"previousBn"}
              nextLinkClassName={"nextBn"}
              disabledClassName={"paginateDisabled"}
              activeClassName={"paginateActive"}
            />
          </div>
        </div>
        <div className={crossit ? "hideit" : "right-container"} >
          {details == "" ? null : <JobDetails details={details} crossit={crossit} setCrossit={setCrossit} />}
        </div>
      </div>
      <Footer />
      <ResumeUpload />
    </>
  );
};
