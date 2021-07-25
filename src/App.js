import './App.css';
// import { SearchResults } from './Components/Search_Results/SearchResults';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Landing } from './Components/Home/Landing';
import { Login } from "./Components/Login&SignIn/Login";
import { SignIn } from './Components/Login&SignIn/SignIn'
import MainApply from './Components/ApplyJobs/MainApply.jsx'
function App() {

  var data = []
  return (
    <Router>

      <div className="App">

        <Switch>
          <Route exact path="/">
            <Landing />

          </Route>
          <Route exact path="/results">

            {/* <SearchResults /> */}
          </Route>
          <Route path="/apply">
            <MainApply />
          </Route>
          <Route path="/signup">
            <SignIn />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
