import React from "react";
import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {
    getNameCountries,
    getCountries,
} from "../../store/actions/countryActions";
import styles from './nav.module.css'

export function Nav() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    useEffect(() => {
        if (name.length === 0) {
            dispatch(getCountries());
        }
        dispatch(getNameCountries(name));
    }, [name, dispatch]);
    /* function handleSubmit(e) {
        e.preventDefault()
        dispatch(getNameCountries(name))
    } */
    return (
        <div className={styles.search}>
            <input
                className={styles.input}
                type="text"
                placeholder="Countries Search..."
                onChange={(e) => {
                    handleInputChange(e);
                }}
            ></input>
        </div>
    );
}

export default Nav;
