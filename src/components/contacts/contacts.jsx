import React from "react";
import css from './contacts.module.css'
import { ContactForm } from "components/contact-form/contact-form";



export const Contacts = () => {
      

    return (
    <div>
        <h2>Зворотній звʼязок</h2>
            <div className={css.wrap}>
                <ContactForm/>
                
            
            </div>
            
    </div>
    )
}