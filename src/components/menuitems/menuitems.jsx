import { NavLink } from "react-router-dom"
import css from './menuitems.module.css'
import { useDispatch } from "react-redux"
import { modalClose } from "../../redux/burgerMenuSlicer"

export const MenuItems = () => {
    const dispatch = useDispatch()
     const handleClick = () => {
        // Dispatch the modalClose action to close the menu
        dispatch(modalClose());
    };
    return (
        <nav className={css.navigation}>
                <ul className={css.list}>
                    <li className={css.listItems} onClick={handleClick}>
                        <NavLink
                            className={({ isActive }) => 
                            isActive ? `${css.link} ${css.activeLink}` : css.link}
                            to='/'>Home</NavLink></li>
                    <li className={css.listItems} onClick={handleClick}>
                        <NavLink
                            className={({ isActive }) => 
                            isActive ? `${css.link} ${css.activeLink}` : css.link}
                            to='/about'>About</NavLink></li>
                    <li className={css.listItems} onClick={handleClick}>
                        <NavLink
                            className={({ isActive }) => 
                            isActive ? `${css.link} ${css.activeLink}` : css.link}
                            to='/portfolio'>Portfolio</NavLink></li>
                    <li className={css.listItems} onClick={handleClick}>
                        <NavLink
                            className={({ isActive }) => 
                            isActive ? `${css.link} ${css.activeLink}` : css.link}
                            to='/gallery'>Gallery</NavLink></li>
                    <li className={css.listItems} onClick={handleClick}>
                        <NavLink
                            className={({ isActive }) => 
                            isActive ? `${css.link} ${css.activeLink}` : css.link}
                            to='/contacts'>Contacts</NavLink></li>
                </ul>
            </nav>
    )
}