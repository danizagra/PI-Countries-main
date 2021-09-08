import "./App.css";
/* import CountryCards from "./modules/Home"; */

import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./modules/LandingPages";
import Home from "./modules/Home";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/home" component={Home} />
                    {/* <CountryCards /> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
