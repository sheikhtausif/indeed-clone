import { Footer } from "./Footer";
import { Header } from "./Header";
import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import styles from "./landing.module.css";
import { Optioncard } from "./Optioncard";
import { useCallback, useState ,useEffect,useRef} from "react";
import { ResumeUpload } from "./ResumeUpload";
import { Link} from "react-router-dom";

import { Header1 } from "./Header1";
import { Head1 } from "./Head1";

function Landing() {
  const [open,setOpen] = useState(true)
  const buttref = useRef();
  const options = useRef();
  const [search, setSearch] = useState([]);
  const [sign, setSign] = useState(true);
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };
  console.log(sign);
   useEffect(()=>{
      let y = JSON.parse(localStorage.getItem('y'))
      let x = JSON.parse(localStorage.getItem('x'))
 if(y==true && x==0){

   setSign(false)
   x++
   localStorage.setItem('x',JSON.stringify(x))

 }
  },[sign])
  const manage=(e)=>{
   let searchQuery = e.target.innerText
   localStorage.setItem("searchQuery",searchQuery)

    options.current.value=e.target.innerText
    buttref.current.style.height = "40px"
    buttref.current.style.overflowY="none"
  }
  const handleChange = (event) => {
    const { value } = event.target;

   let comp = JSON.parse(localStorage.getItem('jobs'))
   setSearch(comp)
  }
  const optimisedVersion = useCallback(debounce(handleChange), []);

  return (
    <div  className="sd">
      <div className={styles.head}> {sign ? <Header setSign={setSign} /> : <Header1  setSign={setSign}/>}</div>

      <div className={styles.head2}>
        <Head1 />
      </div>

      <div
        style={{
          paddingTop: "50px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div className={styles.area}>
            <form className={styles.forms} action="">
              <div ref={buttref} className={styles.deb}>
                <div className={styles.search}>
                  <div className={styles.lab}>What</div>
                  <div className={styles.inp}>
                    <input
                      type="text"
                      ref={options}
                      placeholder="Job title, keywords, or company"
                      className={styles.inpu}
                      onChange={optimisedVersion}
                    />
                  </div>
                  <div style={{ paddingRight: "0rem" }}>
                    <BsSearch style={{width:12}} />{" "}
                  </div>
                </div>
                {search?.length > 0 && (
                  <div className={styles.autocomplete}>
                    {search?.map((el, i) => (
                      <div key={i} className={styles.autocompleteItems}>
                        <span onClick={manage}>{el.job}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.deb2}>
                <div className={styles.search}>
                  <div className={styles.lab}>Where</div>
                  <div className={styles.inp}>
                    <input
                      type="text"
                      placeholder="City,state,or pin code"
                      className={styles.inpu}
                    />
                  </div>
                  <div style={{ paddingRight: "0rem" }}>
                    <MdLocationOn />{" "}
                  </div>
                </div>
              </div>
            </form>
            <button className={styles.btn} ><Link className="link" exact to="/results">Find jobs</Link></button>
          </div>
        </div>

        <div className={styles.contain}>
          <div className={styles.post}>
            <span className={styles.highlight}>Post your resume -</span>
            <span className={styles.para}> It only takes a few seconds</span>
          </div>
        </div>

        <div className={styles.contain1}>
          <div className={styles.post1}>
            <span className={styles.highlight}>Employers: Post a job -</span>
           
            <span className={styles.para}>Your next hire is here</span>
          </div>
        </div>
        <div className={styles.empty1}></div>
       
        <div className={styles.searchTitle}>
          <h2>Popular searches</h2>
          <div className={styles.options}>
            <Optioncard title="Government" />
            <Optioncard title="Online Typing" />
            <Optioncard title="Work From Home" />
            <Optioncard title="Bank" />
            <Optioncard title="Delivery Executive" />
            <Optioncard title="Healthcare" />
            <Optioncard title="Online Tutoring" />
            <Optioncard title="Police" />
            <Optioncard title="Nursing" />
            <Optioncard title="NGO" />
          </div>
          <div className={styles.empty2}></div>
        </div>
      </div>
      <div className={styles.footDiv}>
        <Footer></Footer>
      </div>
      <div className={styles.resume}>
        <ResumeUpload></ResumeUpload>
      </div>
    </div>
  );
}

export { Landing };
