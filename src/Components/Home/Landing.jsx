import { Footer } from "./Footer";
import { Header } from "./Header";
import { BsSearch } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import styles from "./landing.module.css";
import { Optioncard } from "./Optioncard";
import { useCallback, useState } from "react";
import { ResumeUpload } from "./ResumeUpload";
import { Link} from "react-router-dom";

// import { Header1 } from "./Header1";
// import { Head1 } from "./Head1";

function Landing() {
  const [search, setSearch] = useState([]);
  const [sign, setSign] = useState(false);
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

  const handleChange = (event) => {
    const { value } = event.target;

    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSearch(json.data.items));
  };

  const optimisedVersion = useCallback(debounce(handleChange), []);

  return (
    <div>
      {/* <div className={styles.head}> {sign ? <Header /> : <Header1 />}</div> */}

      <div className={styles.head2}>
        {/* <Head1 /> */}
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
            <form action="">
              <div className={styles.deb}>
                <div className={styles.search}>
                  <div className={styles.lab}>What</div>
                  <div className={styles.inp}>
                    <input
                      type="text"
                      placeholder="Job title, keywords, or company"
                      className={styles.inpu}
                      onChange={optimisedVersion}
                    />
                  </div>
                  <div style={{ paddingRight: "1rem" }}>
                    <BsSearch />{" "}
                  </div>
                </div>
                {search?.length > 0 && (
                  <div className={styles.autocomplete}>
                    {search?.map((el, i) => (
                      <div key={i} className={styles.autocompleteItems}>
                        <span>{el.name}</span>
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
                  <div style={{ paddingRight: "1rem" }}>
                    <MdLocationOn />{" "}
                  </div>
                </div>
              </div>
            </form>
            <button className={styles.btn,styles.buttn}><Link exact to="/users">Find jobs</Link></button>
          </div>
        </div>

        <div className={styles.contain}>
          <div className={styles.post}>
            <span className={styles.highlight}>Post your resume</span>
            <span> - </span>
            <span className={styles.para}>It only takes a few seconds</span>
          </div>
        </div>

        <div className={styles.contain1}>
          <div className={styles.post1}>
            <span className={styles.highlight}>Employers: Post a job</span>
            <span> - </span>
            <span className={styles.para}>Your next hire is here</span>
          </div>
        </div>
        <div className={styles.empty1}></div>
       
        <div className={styles.searchTitle}>
          <h2>Popular Search</h2>
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
