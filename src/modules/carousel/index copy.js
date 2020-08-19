import React, { useReducer, useEffect } from 'react'

import Drag from '../../elements/drag'


import { AnimatePresence } from 'framer-motion'

import handleOnDragEnd from '../../utils/actionCreators/handleDragEnd'
import { sliderHandler } from '../../utils/selectors/handleSlide'
import allActions from './redux/actions'
import carouselReducer from './redux/reducer'
import { sliderVariants } from '../../pages/gallery/assets/motionVariants'
import Paralax from '../../elements/paralax'
const {
    paginateNext,
    paginatePrev,
} = allActions

//fullscreen styles will initialzed @fullscreen prop (string)
const fullScreen = {

}

//default style will swapped based on @fullscreen prop (string)
const defaultStyle = {

}




const Carousel = ({
    children, 
    fullscreen, 
    variants = sliderVariants, 
    itemsPerPage,
    exitBeforeEnter = false,
    getCarouselInfo
}) =>{

    const INITSTATE = {
        activeIndex: 0,
        itemsPerPage
    }

    const [state, dispatch] = useReducer(carouselReducer, INITSTATE, sliderHandler)
   
    
    //map active item and slider direction from state
    const {activeIndex, direction} = state
    
    //valide if children exists
    const childrenExist = React.Children.count(children) > 0

    //init pageItems
    let pageItems = childrenExist ? React.Children.toArray(children) : []

    //get next, active and prev item
    const {
        activeItem,
        next,
        prev,
        currentPage,
        currentPageItems
    } = sliderHandler(pageItems, activeIndex, itemsPerPage, )

    

    //handle drag events
    const handleDrag = (event, info) => handleOnDragEnd(event, info, dispatch(paginateNext(next)), dispatch(paginatePrev(prev)))


    //emit carousel data when the active index changes
    useEffect(
        () =>{

        if(!getCarouselInfo) return

        const carouselInfo = {

            activeIndex,
            direction,
            activeItem,
            next,
            prev,
            currentPage,
            currentPageItems,
            allActions,
            dispatch

        }

        return getCarouselInfo(carouselInfo)

    },[activeIndex])




      return (
        <Paralax>
        <AnimatePresence custom={direction} initial={false} exitBeforeEnter={exitBeforeEnter}>
            <Drag 
                position="absolute"
                width="100%"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                key={activeIndex}
                onDragEnd={handleDrag}
            >
                {activeItem}
            </Drag>
        </AnimatePresence>
        </Paralax>
    )
}

Carousel.prototype = {
   
}


export default Carousel