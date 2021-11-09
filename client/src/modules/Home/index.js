import {useEffect, useState} from "react";
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
import Nav from "../nav/index";
import style from "./home.module.css";

const aux = [];
function CountryCards() {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const activities = useSelector((state) => state.activities);

    //Verifico todas las actividades para no REPETIR
    const activitiesMap = Array.from(new Set(activities.map((e) => e.name)));

    const [actividad, setActividad] = useState("");
    const [continentes, setContinentes] = useState("");
    const [order2, setOrder2] = useState("");

    //Lógica Paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage /* , setCountriesPerPage */] = useState(9);
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
        dispatch(getActivity());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getCountries());
    }

    function preFilter(e) {
        aux.push(e.target.value);
    }

    useEffect(() => {
        dispatch(mix());
        dispatch(filterCountryByContinent(continentes));
        dispatch(orderCountries(order2));
        dispatch(getActivity());
        dispatch(orderActivities(actividad));
    }, [continentes, order2, actividad, dispatch]);

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
    }

    function handleOrder(e) {
        setOrder2(e.target.value);
    }

    return (
        <div className={style.container}>
            <img className={style.img} alt="" />
            <div className={style.filter}>
                <div className={style.search}>
                    <Nav />
                </div>
                <div className={style.create}>
                    <Link to="/activity">
                        <button className={style.button_charge}>
                            {" "}
                            Create Activity
                        </button>
                    </Link>
                    <button
                        className={style.button_charge}
                        onClick={(e) => handleClick(e)}
                    >
                        Call 🌎
                    </button>
                </div>
                <div className={style.order}>
                    <div className={style.Filter_name}>
                        <h3>Filters</h3>
                    </div>
                    <div className={style.Buttons_filter}>
                        <select
                            onChange={(e) => {
                                handleOrder(e);
                            }}
                        >
                            <option value="none">None</option>
                            <option value="asc">A - Z ⬇️</option>
                            <option value="desc">Z - A ⬆️</option>
                            <option value="population_asc">
                                {" "}
                                Population ASCENDING{" "}
                            </option>
                            <option value="population_desc">
                                {" "}
                                Population DESCENDING
                            </option>
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
                        </select>
                    </div>
                </div>
                            
                <div className={style.checkbox}>
                    {activitiesMap?.map((el, i) => {
                        return (
                            <div className={style.individual_check} key={i}>
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
            </div>
            <div className={style.countries}>
                <div className={style.country}>
                    {currentCountries?.map((el) => {
                        return (
                            <div key={el.id}>
                                <Link to={"/home/" + el.id}>
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

                {/* <div className={style.controls}>
                    <button className={style.disabled} disabled>
                        &lt;
                    </button>
                    <button className={style.next}>&gt;</button>
                    <div className={style.pag}>
                        Pág.{currentPage}
                    </div>
                </div> */}

                <div className={style.paginado}>
                    <Paginado
                        currentPage={currentPage}
                        countriesPerPage={countriesPerPage}
                        countries={countries.length}
                        paginado={paginado}
                    />
                </div>
            </div>
            
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
