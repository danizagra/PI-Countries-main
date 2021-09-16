import React, {useEffect, useState} from "react";
import style from "./create.module.css";
import {Link, useHistory} from "react-router-dom";
import {
    postActivity,
    /*  getCountries, */
    orderCountries,
    mix,
} from "../../store/actions/countryActions";
import {useDispatch, useSelector} from "react-redux";
let arrayId = [];
const arrayseason = [];

function CreateActivity() {
    const dispatch = useDispatch();
    const history = useHistory();
    const countries = useSelector((state) => state.countriesComplete);
    const [arrayCreate, setArrayCreate] = useState([]);
    const [errors, setErrors] = useState({});
    const [validateerror, setValidate] = useState(false);
    const [input, setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: "",
    });

    useEffect(() => {
        dispatch(mix());

        dispatch(orderCountries("asc"));
    }, [dispatch]);

    function handleCreate(e) {
        if (!e.target.text) return setArrayCreate([...arrayCreate]);
        if (arrayCreate.includes(e.target.text))
            return setArrayCreate([...arrayCreate]);

        setArrayCreate([...arrayCreate, e.target.text]);
    }
    function handleDelete(e) {
        setArrayCreate(arrayCreate.filter((el) => el !== e.target.value));
    }
    function handleChange(e) {
        if (e.target.name === "country") {
            arrayId.push(e.target.value);
        }

        if (e.target.name === "season") {
            arrayseason.push(e.target.value);
        }
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }

    function post(e) {
        e.preventDefault();
        if (typeof input.duration === "string") {
            input.duration = input.duration.replace(":", "");
            input.duration = parseInt(input.duration);
        }
        for (let i = 0; i < arrayId.length; i++) {
            dispatch(
                postActivity({
                    name: input.name,
                    difficulty: input.difficulty,
                    duration: input.duration,
                    season: input.season,
                    country: arrayId[i],
                })
            );
        }
        alert("The activities were created ✅");
        history.push("/home");
    }
    /* let Validate = false; */
    function validate(input = "") {
        let errors = {};
        let arrayErrors = [
            "name",
            "difficulty",
            "duration",
            "season",
            "country",
        ];

        if (!input.name) {
            errors.name = "name is required";
        }
        if (!input.difficulty) {
            errors.difficulty = "Number between 1 - 5 is required";
        }
        if (!input.duration) {
            errors.duration = "Duration is required";
        }

        if (arrayseason.length === 0) {
            errors.season = "Season is required";
        }
        if (arrayId.length === 0) {
            errors.country = "Country is required";
        }

        for (let i = 0; i < arrayErrors.length; i++) {
            setValidate(false);
            if (errors.hasOwnProperty(arrayErrors[i])) {
                setValidate(true);
            }
        }

        return errors;
    }

    function reset(e) {
        arrayId = [];
    }

    return (
        <div>
            <img className={style.img} alt="cucho" />
            <Link to="/home">
                <button onClick={(e) => reset(e)} className={style.return}>
                    X
                </button>
            </Link>
            <h1>What do you want to do ?</h1>
            <form className={style.form} onSubmit={(e) => post(e)}>
                <div className={style.name}>
                    <label>Name&nbsp;&nbsp;&nbsp;</label>
                    <input
                        className={errors.username && style.danger}
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.name && (
                        <p className={style.danger}>
                            &nbsp;&nbsp;{errors.name}
                        </p>
                    )}
                </div>
                <div className={style.difficulty}>
                    <label>Difficulty&nbsp;&nbsp;&nbsp;</label>
                    <input
                        type="number"
                        name="difficulty"
                        min="1"
                        max="5"
                        value={input.difficulty}
                        onChange={(e) => handleChange(e)}
                    ></input>
                    {errors.difficulty && (
                        <p className={style.danger}>
                            &nbsp;&nbsp;{errors.difficulty}
                        </p>
                    )}
                </div>
                <div className={style.duration}>
                    <label>Duration&nbsp;&nbsp;&nbsp;</label>
                    <input
                        type="time"
                        name="duration"
                        value={input.duration}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.duration && (
                        <p className={style.danger}>
                            &nbsp;&nbsp;{errors.duration}
                        </p>
                    )}
                </div>
                <div className={style.season}>
                    <label>Season&nbsp;&nbsp;&nbsp;</label>
                    <select
                        name="season"
                        value={input.season}
                        onChange={handleChange}
                    >
                        <option name="season" value="Summer">
                            Summer ☀️{" "}
                        </option>
                        <option name="season" value="Winter">
                            Winter ❄️{" "}
                        </option>
                        <option name="season" value="Spring">
                            Spring 💐{" "}
                        </option>
                        <option name="season" value="Fall">
                            Fall 🍁{" "}
                        </option>
                    </select>

                    {errors.season && (
                        <p className={style.danger}>
                            &nbsp;&nbsp;{errors.season}
                        </p>
                    )}
                </div>

                <select
                    className={style.select_countries}
                    onClick={(e) => handleCreate(e)}
                    name="country"
                    value={input.country}
                    onChange={(e) => handleChange(e)}
                >
                    {countries.map((el) => (
                        <option key={el.id} value={el.id}>
                            {el.name}
                        </option>
                    ))}
                </select>

                {errors.country && (
                    <label className={style.danger}>
                        &nbsp;&nbsp;{errors.country}
                    </label>
                )}

                {validateerror === true ? (
                    <button className={style.button} type="submit" disabled>
                        Post ❌
                    </button>
                ) : (
                    <button className={style.button} type="submit">
                        Post ✅
                    </button>
                )}
            </form>
            <div className={style.create}>
                {arrayCreate?.map((el, i) => {
                    return (
                        <div key={i} className={style.create_individual}>
                            <label>{el} &nbsp; &nbsp;</label>
                            <button
                                className={style.create_delete}
                                value={el}
                                onClick={(e) => handleDelete(e)}
                            >
                                ❌
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CreateActivity;
