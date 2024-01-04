import React from "react";
import css from './contacts.module.css'

export const Contacts = () => {
    return (
        <>
            <p>text</p>
        <ul>
            <li className={css.contact}><span>Телефон</span></li>
            <li className={css.contact}><span>Електронна пошта</span></li>
            <li className={css.contact}><span>Skype</span></li>
        </ul>
        </>
        
    )
}