import React from "react";
import style from "./paginacion.module.css";
function Paginado({countriesPerPage, countries, paginado, currentPage}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(countries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
   
    return (
        
        <section className={style.paginacion}>
            

            <div className={style.controls}>
                <button className={style.button} onClick={() => paginado(currentPage=1)}>First Page</button>
                {currentPage === 1 ? (
                    <button className={style.button}  disabled>
                        &lt;
                    </button>
                ) : (
                    <button
                        onClick={() => paginado(currentPage - 1)}
                        className={style.button} 
                    >
                        &lt;
                    </button>
                )}

                <label>
                    {" "}
                    Pag {currentPage} / {pageNumbers.length}
                </label>
                <button
                    onClick={() => paginado(currentPage + 1)}
                    className={style.button} 
                >
                    &gt;
                </button>
                <button
                    className={style.button} 
                    onClick={() => paginado(currentPage = pageNumbers.length)}>Last Page</button>
            </div>
            <ul hidden>
                {pageNumbers &&
                    pageNumbers.map((number) => (
                        <li key={number}>
                            {/* <a onClick={() => paginado(number)}>{number}</a> */}
                            <button onClick={() => paginado(number)}>
                                {number}
                            </button>
                        </li>
                    ))}
            </ul>
        </section>
    );
}

export default Paginado;
