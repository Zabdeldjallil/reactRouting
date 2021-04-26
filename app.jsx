import React from "react";
import { render } from "react-dom";
import axios from "axios";
import About from "./components/about";
import Home from "./components/home";
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from "react-router-dom"
function App() {
    const name="sdqsdq"
    const auth=true
  return (
    <Router>
      <ul>
          <Link to="/">Home</Link>
          <Link to={`/About/${name}`}>About</Link>
      </ul>
       <Switch>
           <Route path="/" exact component={Home} />

           {auth ? <Switch><Route path="/About/:name" component={About}/>
               <Route render={()=><h1>404 not found</h1>} />
           </Switch>:<Redirect to="/" />
           }
       </Switch>
    </Router>
  );
}

render(
  <>
      <App/>
  </>,
  document.querySelector(".app")
);
