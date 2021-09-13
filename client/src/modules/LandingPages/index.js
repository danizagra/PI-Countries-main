import React from "react";
import {Link} from "react-router-dom";
import styles from "../LandingPages/landing.module.css";

function LandingPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>We love travel</h1>

            <div className={styles.button}>
                <Link to="/home">
                    <a>Come in</a>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;
