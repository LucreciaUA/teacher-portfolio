import React from "react";
import ViberLogo from "./viber/viber";
import TelegramLogo from "./telegram/telegram";
import PhoneIcon from "./phone/phone";
import EmailIcon from "./email/email";
import css from './links.module.css'


export const Links = () => {
    
    const contacts = [
        {
            id: 1,
            name: "email",
            data: "mailto:ludmila.polyuk@gmail.com",
            logo: <EmailIcon color="#fff" />,
        },
        {
            id: 2,
            name: "phone",
            data: "tel:+380674194367",
            logo: <PhoneIcon color="#fff" />,
        },
        {
            id: 3,
            name: "Telegram",
            data: "http://t.me/ludmila_poliuk",
            logo: <TelegramLogo color="#fff" />
        },
        {
            id: 4,
            name: "Viber",
            data: "viber://chat/?number=%2BP380674194367",
            logo: <ViberLogo color="#fff" />
        },
    ]   

    return (
    <div>
            <div className={css.wrap}>
                <ul className={css.contactlinks}>
                {contacts.map(contact => (
                    <li key={contact.id}><a href={contact.data} alt={contact.name} className={css.link}>{contact.logo}
                    </a></li>))}
            
                </ul>
            
            </div>
            
    </div>
    )
}