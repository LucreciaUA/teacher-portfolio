import { useDispatch, useSelector } from "react-redux";
import { selectIsMenuOpen, modalTogle } from "../../redux/burgerMenuSlicer";
import MobileMenu from "components/mobilemenu/mobilemenu";

export const BurgerMenu = () => {
      const isMenuOpen = useSelector(selectIsMenuOpen);
    const dispatch = useDispatch();
    

    return (
        <>
        <button type="button" onClick={() => dispatch(modalTogle())}>menu</button>
           {isMenuOpen ? <MobileMenu /> : []}
            
            </>
    )
}

