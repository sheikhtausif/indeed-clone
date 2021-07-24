import './App.css';
import { SearchResults } from './Components/Search_Results/SearchResults';
import { BrowserRouter as Router , Route, Link , Switch} from "react-router-dom";
import { Landing } from './Components/Home/Landing';
function App() {

 var data = []
  return (
    <Router>

<div className="App">
<Link exact to="/users">sjdsd</Link>
     <Switch>
     <Route exact path="/">
      <Landing />
       
       </Route>   
       <Route path="/users">
            
      <SearchResults/>
          </Route>   
     </Switch>
    </div>
    </Router>
  );
}

export default App;
