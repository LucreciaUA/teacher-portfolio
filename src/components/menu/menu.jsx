
import React, { useEffect, useState } from 'react'
import { BurgerMenu } from 'components/burger-menu/burgermenu'
import { MenuItems } from 'components/menuitems/menuitems'


export const Menu = () => {

    const [isModal, setIsModal] = useState(true)

    


useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth < 680) {
                setIsModal(true);
            } else {
                setIsModal(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    


    console.log(isModal)

    return (
        <>{isModal?
        (<BurgerMenu/>):
        (<MenuItems/>)}
            </>
    )
}