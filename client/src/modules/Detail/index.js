import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect /* , useState */} from "react";
import {oneCountry} from "../../store/actions/countryActions";
import {Link} from "react-router-dom";
import style from "./detail.module.css";
function OneCountry(prop) {
   
    const aux = useSelector((state) => state.aux);
    const dispatch = useDispatch();
    const id = prop.match.params.id;
   
    useEffect(() => {
        dispatch(oneCountry(id));
    }, [dispatch, id]);

    function stringToTime(e) {
        let aux = e.toString();
        let a = aux.split("").reverse();
        a.splice(2, 0, ":");
        a.reverse();
        let result = a.join("");
        return result;
    }
    function numberSeparate(number) {
        number = number.toString();
        let a = number.split("").reverse().join("");
        number = a.match(/.{1,3}/g);
        for (let i = 0; i < number.length - 1; i++) {
            number[i] = number[i] + ".";
        }
        let result = number.join("").split("").reverse().join("");
        return result;
    }
    return (
        <div className={style.container}>
            <img className={style.img} alt="" />
            <div >
                <Link  to="/home">
                    <button className={style.return}>X</button>
                </Link>
            </div>
            <div className={style.all}>
            {aux.map((el, i) => {
                return (
                    <div className={style.container2} key={i}>
                         
                        <div>
                            <img
                                className={style.image}
                                src={el.image}
                                alt="Countries papaaaaa"
                        
                            />
                        </div>

                        <div className={style.information}>
                            <div className={style.name}>
                                <h3>{el.name}</h3>
                            </div>

                            <h5>Continent: {el.continent}</h5>
                            <h5>{el.id}</h5>
                            <h5>Capital: {el.capital}</h5>
                            <h5>Subregion: {el.subregion}</h5>
                            <h5>Area: {numberSeparate(el.area)}</h5>
                            <h5>Population:{numberSeparate(el.population)}</h5>
                        </div>
                        <div className={style.activity}>
                            {el.Activities.length === 0 ? (
                                <h3>Don't exist activities 😢</h3>
                            ) : (
                                el.Activities.map((el, i) => {
                                    return (
                                        <div
                                            className={style.activity2}
                                            key={i}
                                        >
                                            <h5>
                                                Activity:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                                {el.name}
                                            </h5>
                                            <h5>
                                                Difficulty:&nbsp;&nbsp;&nbsp;&nbsp;
                                                {el.difficulty}
                                            </h5>
                                            <h5>
                                                Duration:
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                {stringToTime(el.duration)}
                                            </h5>
                                            <h5>
                                                Season: &nbsp;&nbsp;&nbsp;&nbsp;
                                                {el.season}
                                            </h5>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                );
            })}
                </div>
        </div>
    );
}

export default OneCountry;
