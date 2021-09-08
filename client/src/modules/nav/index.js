import React from "react";
import { Link } from "react-router-dom";
import stylesNav from './nav.module.css'
export function Nav() {
    return (
          <header /* className={stylesNav.navbar} */>
                
                <div>Soy Nav</div>
                <nav>
                <ul /* className={stylesNav.list} */>
                    <li /* className={stylesNav.listitem} */>
                       Home
                       Create Activities
                    </li>
                </ul>
                </nav>
        </header>
    );
}

export default Nav;
