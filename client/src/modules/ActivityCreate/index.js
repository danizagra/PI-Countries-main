import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {
    postActivity,
   /*  getCountries, */
    orderCountries,
    mix,
} from "../../store/actions/countryActions";
import {useDispatch, useSelector} from "react-redux";
const arrayId = [];
function CreateActivity() {
      const dispatch = useDispatch();
      const history = useHistory();
    const countries = useSelector((state) => state.countriesComplete);
    const [arrayCreate, setArrayCreate] = useState([]);
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
        /* arrayCreate.push(e.target.text); */

        arrayId.push(e.target.value);

        if (!e.target.text) return setArrayCreate([...arrayCreate]);
        if (arrayCreate.includes(e.target.text))
            return setArrayCreate([...arrayCreate]);

        setArrayCreate([...arrayCreate, e.target.text]);
    }
    function handleDelete(e) {
        setArrayCreate(arrayCreate.filter((el) => el !== e.target.value));
    }
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
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
          alert('The activities were created ✅')
          history.push('/home')
    }

    return (
        <div>
            <Link to="/home">
                <button>Volver</button>
            </Link>
            <h1>Crea tu Actividad</h1>
            <form onSubmit={(e) => post(e)}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Difficulty</label>
                    <input
                        type="number"
                        name="difficulty"
                        min="1"
                        max="5"
                        value={input.difficulty}
                        onChange={(e) => handleChange(e)}
                    ></input>
                </div>
                <div>
                    <label>Duration</label>
                    <input
                        type="time"
                        name="duration"
                        value={input.duration}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Season</label>
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
                </div>
                <select
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
                <button type="submit"> Post</button>
            </form>
            {arrayCreate?.map((el, i) => {
                return (
                    <div key={i}>
                        <label>{el}</label>
                        <button value={el} onClick={(e) => handleDelete(e)}>
                            X
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default CreateActivity;
