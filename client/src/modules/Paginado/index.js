import React from "react";
import style from "./paginacion.module.css";
function Paginado({countriesPerPage, countries, paginado}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <section className={style.paginacion}>
            <ul>
                {pageNumbers &&
                    pageNumbers.map((number) => (
                        <li key={number}>
                            {/* <a onClick={() => paginado(number)}>{number}</a> */}
                            <button onClick={() => paginado(number)}>{number}</button>
                        </li>
                    ))}
            </ul>
        </section>
    );
}

export default Paginado;
