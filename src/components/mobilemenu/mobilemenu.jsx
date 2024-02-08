import { useDispatch } from "react-redux";
import { modalClose } from "../../redux/burgerMenuSlicer";
import css from './mobilemenu.module.css'
import { MenuItems } from "components/menuitems/menuitems";

const MobileMenu = () => {
    const dispach = useDispatch()
    return (
        <div className={css.container}>
            <button type="button" onClick={() => dispach(modalClose())}>close</button>
            <h1> mobile</h1>
            <MenuItems/>

        </div>
    )
}

export default MobileMenu