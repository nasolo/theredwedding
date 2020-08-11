import React from 'react'

import FullScreenImage from '../../../../../elements/imagePlaceholder'

import { AnimatePresence } from 'framer-motion';
import Drag from '../../../../../elements/drag';
import handleOnDragEnd from '../../../../../utils/actionCreators/handleDragEnd';
import { sliderVariants } from '../style/variants';


const BackgroundCarousel = ({
    page,
    setPage,
    next,
    prev,
    media,
    id,
}) =>{



    const { index, direction } = page
    const imagePath = "../../assets/images/packages/wedding/"

    return (
        <AnimatePresence initial={false} custom={direction}>
            <Drag
                position="absolute"
                top="0"
                left="0"
                key={`id-${id}-index-${index}`}
                custom={direction}
                onDragEnd={(e, i) => handleOnDragEnd(e, i, next, prev, setPage)}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
            >
                <FullScreenImage
                    shadow
                    key={index}
                    src={`${imagePath}${media}`}
                />

            </Drag>
        </AnimatePresence>
    )

}

export default BackgroundCarousel