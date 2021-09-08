import {useEffect, useState} from "react";
/* import axios from "axios";
import {COUNTRY_URL} from "../../utils/index"; */
import {useDispatch, useSelector} from "react-redux";
import {
    getCountries,
    getActivity,
    filterCountryByContinent,
    orderCountries,
    orderActivities,
    mix,
} from "../../store/actions/countryActions";
import {Link} from "react-router-dom";
import Card from "../Card";
import Paginado from "../Paginado/index";
const aux = [];
function CountryCards(/* { countries, getCountries } */) {
    const countries = useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities);

    const activitiesMap = Array.from(new Set(activities.map((e) => e.name)));

    const [order, setOrder] = useState("");
    const dispatch = useDispatch();
    /*  console.log(aux, "<---- el array del principio"); */

    const [actividad, setActividad] = useState("");
    const [continentes, setContinentes] = useState("");
    const [order2, setOrder2] = useState("");

    //Lógica Paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage; //
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = countries.slice(
        indexOfFirstCountry,
        indexOfLastCountry
    );
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());
    }

    function preFilter(e) {
        aux.push(e.target.value);
        console.log(aux, ">--- El array");
    }

    useEffect(() => {
        dispatch(mix());
        dispatch(filterCountryByContinent(continentes));
        dispatch(orderCountries(order2));
        dispatch(getActivity());
        dispatch(orderActivities(actividad));
    }, [continentes, order2, actividad]);

    function handleActivities(e) {
        if (e.target.checked) {
            setActividad(e.target.value);
        } else {
            e.target.value = false;
            setActividad(e.target.value);
        }
    }

    function handleFilterStatus(e) {
        setContinentes(e.target.value);
        /*  if (e.target.checked === true && e.target.value === "activity") {
            return dispatch(orderActivities(e.target.value));
        }
        if (e.target.checked === false && e.target.value === "activity") {
            let filter = aux[aux.length - 1];
            if (!filter) return dispatch(getCountries());
            else return dispatch(filterCountryByContinent(filter));
        }
        console.log("Siguioooooo");
        dispatch(filterCountryByContinent(e.target.value)); */
    }

    function handleOrder(e) {
        setOrder2(e.target.value);
        /*  if (e.target.value === "none") {
            let filter2 = aux[aux.length - 1];

            return dispatch(filterCountryByContinent(filter2));
        }
        e.preventDefault();
        dispatch(orderCountries(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`); */
    }

    return (
        <div>
            <Link to="/activity"> Create Activity</Link>
            <button onClick={(e) => handleClick(e)}>Cargar los paises</button>

            <div>
                <select
                    onChange={(e) => {
                        handleOrder(e);
                    }}
                >
                    <option value="none">None</option>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>

                <select
                    onChange={(e) => {
                        preFilter(e);
                        handleFilterStatus(e);
                    }}
                >
                    <option value="All">All</option>
                    <option value="Americas">America</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Africa">Africa</option>

                    {/* <option value="activity">Actividad Turística</option> */}
                </select>

                <div>
                    <input
                        type="checkbox"
                        onClick={(e) => handleFilterStatus(e)}
                        value="activity"
                    ></input>
                </div>

                <div>
                    {activitiesMap.map((el) => {
                        return (
                            <div>
                                <p>{el}</p>
                                <input
                                    type="checkbox"
                                    value={el}
                                    onClick={(e) => handleActivities(e)}
                                ></input>
                            </div>
                        );
                    })}
                </div>

                <Paginado
                    countriesPerPage={countriesPerPage}
                    countries={countries.length}
                    paginado={paginado}
                />
                {currentCountries?.map((el) => {
                    return (
                        <div>
                            <Link to={"/home/" + el.name}>
                                <Card
                                    name={el.name}
                                    image={el.image}
                                    continent={el.continent}
                                />
                            </Link>
                        </div>
                    );
                })}
            </div>

            {/* {countries &&countries.map((countries) => {
                return (
                    <div key={countries.name}>
                        <p>{countries.name}</p>
                        <img src={countries.image} alt="Countries papaaaaa" />
                    </div>
                );
            })} */}
        </div>
    );
}

/* const mapStateToProps = (state) => {
    return {
        countries: state.countries,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: (countries) => dispatch(getCountries(countries)),
    };
};
 */
export default /* connect(mapStateToProps, mapDispatchToProps)( */ CountryCards;
