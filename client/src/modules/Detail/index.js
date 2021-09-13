import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect /* , useState */} from "react";
import {oneCountry} from "../../store/actions/countryActions";
import {Link} from "react-router-dom";

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
          <div>
                <Link to="/home">
                            <button>X</button>
                </Link>
                
            {aux.map((el, i) => {
                return (
                    <div key={i}>
                        
                        <h3>{el.name}</h3>
                        <img
                            src={el.image}
                            alt="Countries papaaaaa"
                            width="200px"
                            height="100px"
                        />
                        <label>Continent</label>
                        <h5>{el.continent}</h5>

                        <h5>{el.id}</h5>
                        <h5>{el.capital}</h5>
                        <h5>{el.subregion}</h5>
                        <h5>{numberSeparate(el.area)}</h5>
                        <h5>{numberSeparate(el.population)}</h5>
                        {el.Activities.length === 0 ? (
                            <h2>No hay actividades</h2>
                        ) : (
                            el.Activities.map((el, i) => {
                                return (
                                    <div key={i}>
                                        <h5>{el.name}</h5>
                                        <h5>{el.difficulty}</h5>
                                        <h5>{stringToTime(el.duration)}</h5>
                                        <h5>{el.season}</h5>
                                    </div>
                                );
                            })
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default OneCountry;
