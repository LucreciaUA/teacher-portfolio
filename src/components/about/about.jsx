import React from "react";
import css from './about.module.css'

export const About = () => {
    return (
        <ul>
            <li className={css.options}>Осіта
                <h3>Державний педагогічний інститут ім. Затонського</h3>
                <p></p>
                <p></p>
            </li>
            <li className={css.options}>Досвід праці
            <h3>Хмельницька загальноосвітня школа І-ІІІ ст. №14</h3>
                <p>Посада: вчитель математики</p>
                <p>Роки праці: 2003 р. - по сьогодні</p>
            </li>
            <li className={css.options}>Курси підвищення квваліфікації
            <h3>ХШППО</h3>
                <p></p>
                <p></p>
            </li>
            <li className={css.options}>Атестація 
            <h3>Хмельницька загальноосвітня школа І-ІІІ ст. №14</h3>
                <p>Освітня категорія: старший вчитель</p>
                <p>2018 р</p>
            </li>
        </ul>
    )
    
}