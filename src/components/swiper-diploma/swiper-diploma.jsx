

import { LightboxModal } from 'components/lightbox-modal/lightbox-modal'
import images from './diploma'
import css from './swiper-diploma.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { isImageOpen, modalOpen, selectImage } from "../../redux/lightboxSlicer";
import { useCallback, useEffect } from 'react';



export const SwiperDiploma = () => {
    const isImage = useSelector(isImageOpen)
    const isOpen = useSelector(state => state.lightbox.isOpen)
    console.log(isOpen)

    const dispatch = useDispatch()

    const handleClick = useCallback((image) => {
        dispatch(selectImage(image));
        dispatch(modalOpen());
    }, [dispatch]);
    
    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
    },[isOpen])

    return (
        <ul className={css.gallery}>
            {images.map(image => 
                <li key={image.id}>
                    <img src={process.env.PUBLIC_URL + image.path}
                        alt={image.name}
                        onClick={() => dispatch(handleClick(image))} />
                    {isImage && <LightboxModal />}</li>
            )}
       </ul>
   )
}
