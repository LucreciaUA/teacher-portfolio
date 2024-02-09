// Import Swiper React components


import { LightboxModal } from 'components/lightbox-modal/lightbox-modal'
import images from './diploma'
import css from './swiper-diploma.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { isImageOpen, modalOpen, selectImage } from "../../redux/lightboxSlicer";







export const SwiperDiploma = () => {
    const isImage = useSelector(isImageOpen)

    const dispatch = useDispatch()

    const handleClick = (image) => {
        dispatch(selectImage(image))
        dispatch(modalOpen())
    }
    


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
