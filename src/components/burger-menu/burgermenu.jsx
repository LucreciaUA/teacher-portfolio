import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen, modalTogle } from "../../redux/burgerMenuSlicer";
import MobileMenu from "components/mobilemenu/mobilemenu";
import BurgerMenuIcon from "./burger-svg/burger-svg";

export const BurgerMenu = () => {
      const isMenuOpen = useSelector(selectIsMenuOpen);
    const dispatch = useDispatch();
    

    return (
        <>
        <button type="button" onClick={() => dispatch(modalTogle())}><BurgerMenuIcon color={"#fff"}/></button>
           {isMenuOpen ? <MobileMenu /> : []}
            
            </>
    )
}

