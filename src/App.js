import './App.css';
import { SearchResults } from './Components/Search_Results/SearchResults';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Landing } from './Components/Home/Landing';
import { Login } from "./Components/Loginn.jsx/Login";
import { SignUp } from "./Components/Loginn.jsx/SignUp";
import MainApply from './Components/ApplyJobs/MainApply.jsx'
import { Sucess } from './Components/Sucess/Sucess';
function App() {

  
  return (
    <Router>

      <div className="App">

        <Switch>
          <Route exact path="/">
            <Landing />

          </Route>
          <Route exact path="/results">

            <SearchResults />
          </Route>
          <Route path="/apply">
            <MainApply/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/sucess">
            <Sucess/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
