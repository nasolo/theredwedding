import React from 'react'

import Paralax from "../../../elements/paralax"

import { useDispatch } from 'react-redux'
import handleOnDragEnd from '../../../utils/actionCreators/handleDragEnd'
import { setActiveId } from '../redux/actions'
import { AnimatePresence } from 'framer-motion'
import Drag from '../../../elements/drag'
import ActiveMedia from './activeMedia'
import { sliderVariants } from '../assets/motionVariants' 

const Slider = ({activeMedia, prev, next, direction, playerRef}) => {

    const dispatch = useDispatch()
    

    return (
        <Paralax className="position-absolute">
            <AnimatePresence custom={direction}>
                <Drag
                    className="w-100 h-100 container-fluid position-absolute p-0"
                    onDragEnd={(event, info)=>dispatch(handleOnDragEnd(event, info, setActiveId(prev), setActiveId(next)))}
                    key={activeMedia !== undefined && activeMedia.id}
                    custom={direction}
                    variants={sliderVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                >
                    <ActiveMedia playerRef={playerRef} media={activeMedia !== undefined && activeMedia}/>
                </Drag>
            </AnimatePresence>
        </Paralax>
    )

}

export default Slider