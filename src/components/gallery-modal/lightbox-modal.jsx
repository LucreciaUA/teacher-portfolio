import { getSelectedImage, modalClose } from "../../redux/lightboxSlicer";
import { useDispatch, useSelector } from 'react-redux';
import css from './lightbox-modal.module.css';
import CloseIcon from "./close/close";



export const GalleryModal = () => {
    const dispatch = useDispatch();
    const image = useSelector(getSelectedImage);
   
    return (
        <div className={css.overlay}>
        <div className={css.holder}>
            <button className={css.close} type="button" onClick={() => dispatch(modalClose())}><CloseIcon color={'#fff'} /></button></div>
             <div className={css.wrapper}>
                <div>
                    {image && <img className={css.modalimg} src={process.env.PUBLIC_URL + image.path} alt={image.name} />}
                    <div className={css.credits}><p >{image.name} </p></div>
               </div>
            </div>
        </div>
    );
};
