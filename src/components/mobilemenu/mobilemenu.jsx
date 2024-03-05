import { useDispatch } from "react-redux";
import { modalClose } from "../../redux/burgerMenuSlicer";
import css from './mobilemenu.module.css'
import { MenuItems } from "components/menuitems/menuitems";
import CloseIcon from "./close/close";

const MobileMenu = () => {
    const dispach = useDispatch()
    return (
        <div className={css.mobile}>
            <button className={css.menuclose} type="button" onClick={() => dispach(modalClose())}><CloseIcon color={'#fff'} /></button>
       
            <MenuItems/>

        </div>
    )
}

export default MobileMenu