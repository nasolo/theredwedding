import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";

import { wrap } from "@popmotion/popcorn";
import chunk from 'lodash/chunk'

import Chevron from './component/cheveron'
import Container from 'react-bootstrap/Container'

import {variants} from './variants'
import handleOnDragEnd from '../../utils/actionCreators/handleDragEnd';



const hanleData = (data, activeIndex, paginate, pageSize) => {
    if(data === undefined) return;

    const size = pageSize === undefined ? 9 : pageSize
    
    const jump = (direction) => paginate(direction, data.length)

    const isDataDefined = data === undefined

        return !isDataDefined && data.reduce((prev, acc) =>{
            prev.activeIndex = activeIndex
            prev.next = jump(1)
            prev.prev = jump(-1)
            prev.activeMedia= data[prev.activeIndex]
            prev.pages = chunk(data, size)
            prev.currentPage = prev.pages.findIndex(page => 
                page.find(page=> 
                    page === prev.activeMedia))
            prev.currentPageItems = prev.pages[prev.currentPage]

            return prev
        }, {data})
    }   

const getChildrenProps = (children, direction, paginate, handleSlider) => {
    
    const next = paginate(1, children.length)
    const prev = paginate(-1, children.length)

    return React.Children.map(children, child => ({
        ...child, 
        props:{
            ...child.props,
            initial: "enter",
            animate: "center",
            exit:"exit",
            variants: variants,
            custom: direction,
            onDragEnd: (e, info)=>handleOnDragEnd(e, info, next, prev, handleSlider)
           
        }
    }))
}


const Carousel = ({pageSize, children, ...rest}) => {
    
    const [[active, direction], setActiveIndex] = useState([0, 0])
    const paginate = (direction, length) => wrap(0, length, active + direction)
    const handleSlider = newDirection => setActiveIndex([newDirection, active - newDirection])

    const childrenWithProps = getChildrenProps(children, direction, paginate, handleSlider)
    const { activeMedia, next, prev } = hanleData(childrenWithProps, active, paginate)

    return(
     <>
            <AnimatePresence initial={false} custom={direction}>
                    {activeMedia}
            </AnimatePresence>
        <Container fluid className="d-flex justify-content-between">
            <Chevron centered leftChevron key="right" onClick={()=>handleSlider(prev)}/>
            <Chevron centered rightChevron key="left" onClick={()=>handleSlider(next)}/>
        </Container>
    </>
      
    )
}

export default Carousel