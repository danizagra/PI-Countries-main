import React from "react";
import styles from "./card.module.css";
function Card({name, image, continent}) {
    return (
        <div className={styles.all}>
            <div className={styles.letras}>
                <h5 className={styles.country}>{name}</h5>
                <h5 className={styles.region}>Continent: {continent}</h5>
            </div>
            {/* <div className={styles.stage}>
                <div className={styles.container}>
                    <div className={styles.ring}> */}
                        <img
                            className={styles.image}
                            src={image}
                            alt="Countries papaaaaa" /* width='16vw' height='18vw' */
                        />
                    {/* </div>
                </div>
            </div> */}
        </div>
    );
}

export default Card;
