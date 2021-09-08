import React from "react";
import {Link} from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <h1>Welcome to my page Countries</h1>
            <Link to="/home">
                <button>Ingresa Cucho</button>
            </Link>
        </div>
    );
}

export default LandingPage;
