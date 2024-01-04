import React from "react";
import css from './navigation.module.css';

export const Navigation = () => {
    return (
        <header className={css.header}>;
            <nav className={css.navigation}>;
                <ul className={css.list}>;
                    <li className={css.listItems}>About</li>;
                    <li className={css.listItems}>Portfolio</li>;
                    <li className={css.listItems}>Gallery</li>;
                    <li className={css.listItems}>Contacts</li>;
                </ul>
            </nav>
        </header>
    )
}