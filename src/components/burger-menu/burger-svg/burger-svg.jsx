import React from 'react';
import css from './burger-svg.module.css'

const BurgerMenuIcon = ({color}) => {
  return (
      <svg 
          xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={30}
      height={30}
          fill={color}
          stroke={color}
          className={css.burger}

    >
      
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
};

export default BurgerMenuIcon;