import "./App.css";
import Content from "./content";
import NavBar from "./navBar";
import "swiper/css/bundle";

import M1 from "./M1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Result from "./searchResualt";
import M2 from "./M2";
import NotFound from "./Notfound";
import M3 from "./M3";
import See from "./see";
function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/movie">
            <M1 />
          </Route>
          <Route path="/tv">
            <M2 />
          </Route>

          <Route path="/movie/:name">
            <Result />
          </Route>
          <Route path="/see/:id/:type">
            <See />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
