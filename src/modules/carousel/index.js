import React, { useReducer, useEffect, useState } from 'react'

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
    setActiveItem
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
        direction: 1
    }

    const [state, dispatch] = useReducer(carouselReducer, INITSTATE)
   
    
    //map active item and slider direction from state
    const {activeIndex, direction, nextItem, prevItem} = state
    
    //valide if children exists
    const childrenExist = React.Children.count(children) > 0

    //init pageItems
    let pageItems = childrenExist ? React.Children.toArray(children) : []

  
    //Create Slider object using activeIndex state as key
    const {
            activeItem,
            next,
            prev,
            currentPage,
            currentPageItems,
            data
    } = sliderHandler(pageItems, activeIndex, itemsPerPage)

    const handleIndicatorsAndChevrons = (id, type) =>{
        if(id === undefined & type === undefined) return
        const items = data.map(item => item.props)
        const propsExist = items.length > 0

        if(id){
            const itemIndex = propsExist && items.findIndex(item => item.id && item.id === id)
            return dispatch(setActiveItem(itemIndex))
        }

        if(type){
            switch(type){
                case 'next':
                    return dispatch(paginateNext(next))
                case 'prev':
                    return dispatch(paginatePrev(prev)) 
            }
        }
    }


    useEffect(
        () =>{

        if(!getCarouselInfo) return

        const carouselInfo = {
            activeIndex,
            direction,
            activeItem,
            next,
            prev,
            slideRight: () => dispatch(paginateNext(next)),
            slideLeft: () => dispatch(paginatePrev(prev)),
            setPageItem: (index) => dispatch(setActiveItem(index)),
            currentPage,
            currentPageItems: currentPageItems && currentPageItems.map(item => item.props),
            ...allActions,
            dispatch
        }

        return getCarouselInfo(carouselInfo)

    },[childrenExist, activeIndex])


      return (
        <Paralax>
        <AnimatePresence custom={direction} initial={false} exitBeforeEnter={exitBeforeEnter}>
            <Drag 
                position="absolute"
                width="100%"
                height="100%"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                key={activeIndex}
                onDragEnd={(event, info) => handleOnDragEnd(event, info, paginateNext(next), paginatePrev(prev), dispatch)}
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