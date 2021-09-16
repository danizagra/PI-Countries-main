import React from "react";
import {Link} from "react-router-dom";
import styles from "../LandingPages/landing.module.css";

function LandingPage() {
    return (
        <div className={styles.container}>

            <img className={styles.img} alt="cucho" />
            <div className={styles.letras}>
                <h1 className={styles.title}>We love travel</h1>

                <div className={styles.button}>
                    <Link to="/home">
                        {/*  <a>Come in</a> */}
                        <span className={styles.text_button}>Come in</span>
                    </Link>
                    <div className={styles.dot}></div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
