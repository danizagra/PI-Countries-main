import "./App.css";
/* import CountryCards from "./modules/Home"; */

import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./modules/LandingPages";
import Home from "./modules/Home";
import CreateActivity from "./modules/ActivityCreate"
import OneCountry from './modules/Detail/index'
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path='/activity' component={CreateActivity} />
                    <Route path='/home/:id' component={OneCountry}/>
                    {/* <CountryCards /> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
