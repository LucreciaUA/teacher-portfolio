import { SwiperDiploma } from "components/swiper-diploma/swiper-diploma";
import React from "react";
import css from './portfolio.module.css'

export const Portfolio = () => {
    return (

        <div className={css.wrap}><h2>portfolio</h2>
            <SwiperDiploma/>
        </div>
    )
}