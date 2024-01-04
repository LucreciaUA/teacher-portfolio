import React from "react";
import css from './navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <header className={css.header}>
            <nav className={css.navigation}>
                <ul className={css.list}>
                    <li className={css.listItems}>
                        <NavLink
                            className={({ isActive }) => 
                            isActive ? `${css.link} ${css.activeLink}` : css.link}
                            to='/'>Home</NavLink></li>
                    <li className={css.listItems}>
                        <NavLink
                            className={({ isActive }) => 
                            isActive ? `${css.link} ${css.activeLink}` : css.link}
                            to='/about'>About</NavLink></li>
                    <li className={css.listItems}>
                        <NavLink
                            className={({ isActive }) => 
                            isActive ? `${css.link} ${css.activeLink}` : css.link}
                            to='/portfolio'>Portfolio</NavLink></li>
                    <li className={css.listItems}>
                        <NavLink
                            className={({ isActive }) => 
                            isActive ? `${css.link} ${css.activeLink}` : css.link}
                            to='/gallery'>Gallery</NavLink></li>
                    <li className={css.listItems}>
                        <NavLink
                            className={({ isActive }) => 
                            isActive ? `${css.link} ${css.activeLink}` : css.link}
                            to='/contacts'>Contacts</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}