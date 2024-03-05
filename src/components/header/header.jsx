import React from "react";
import css from './header.module.css';
import { Links } from "components/links/links";
import { Menu } from "components/menu/menu";


const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.holder}>
                <h1>Полюк Людмила Василівна</h1>
                <h3>Вчитель математики</h3>
            </div>
            <Links />
            <Menu/>
            
        </header>
    )
}

export default Header