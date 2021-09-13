import React from "react";
import styles from "./card.module.css";
function Card({name, image, continent}) {
    return (
        <div className={styles.all}>
            <div className={styles.letras}>
                <h5 className={styles.country}>{name}</h5>
                <h5 className={styles.region}>Continent: {continent}</h5>
            </div>
            <img
                className={styles.image}
                src={image}
                alt="Countries papaaaaa" /* width='16vw' height='18vw' */
            />
        </div>
    );
}

export default Card;
