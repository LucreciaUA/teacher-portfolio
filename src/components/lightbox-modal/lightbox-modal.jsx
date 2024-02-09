import { getSelectedImage, modalClose } from "../../redux/lightboxSlicer";
import { useDispatch, useSelector } from 'react-redux';
import css from './lightbox-modal.module.css';
import React from 'react';

export const LightboxModal = () => {
    const dispatch = useDispatch();
    const image = useSelector(getSelectedImage);
   
    return (
        <div className={css.overlay}>
            <button className={css.close} type="button" onClick={() => dispatch(modalClose())}>close</button>
            <div className={css.wrapper}>
                <button type="button">prev</button>
                {image && <img className={css.modalimg} src={process.env.PUBLIC_URL + image.path} alt={image.name} />}
                <button type="button">next</button>
            </div>
        </div>
    );
};
