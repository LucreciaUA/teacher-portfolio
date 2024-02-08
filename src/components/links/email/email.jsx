import React from 'react';
import css from './email.module.css'

const EmailIcon = (color) => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 36 36" className={css.email}>
          <path fill={color}
              d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z" className="clr-i-outline clr-i-outline-path-1"></path>
	<path fill="none" d="M0 0h36v36H0z"></path>
</svg>
  );
};

export default EmailIcon;
