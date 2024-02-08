import React from "react";
import userPhoto from './PoliukLV.png'
import css from './home.module.css'

export const Home = () => {
    return (
        <div className={css.container}>
            <img src={userPhoto} alt="user" className={css.userPhoto} /> 
            <div className={css.wrap}>
            <h2>Полюк Людмила Василівна</h2>
            <h3>Вчитель математики</h3>
                <h4>Хмельницька загальноосвітня школа І-ІІІ ст. №14</h4>
                <article className={css.credo}>
                <p >Впіймавши метелика і сховавши його в долонях, двоє учнів прийшли до свого вчителя і запитали:</p>
                <p>“Учителю, живий метелик чи мертвий?”</p>
                <p>А перед тим вони домовились, що коли він відповість "мертвий", то вони розкриють  долоні і він вилетить,а коли скаже "живий" – непомітно зімкнуть і він загине... Мудрий учитель відповів:</p> 
                <p><span className={css.accent}>"Все в ваших руках"...</span></p>
                </article>
            </div>
        </div>
    )
}