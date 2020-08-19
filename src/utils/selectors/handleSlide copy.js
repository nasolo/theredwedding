import { wrap } from "@popmotion/popcorn";
import chunk from 'lodash/chunk'
import { nanoid } from "@reduxjs/toolkit";



const initialValue = {
    
    activeId: null,
    activeIndex: null,
    nextItem: null,
    prevItem: null,
}

export const sliderHandler = (data, activeId, chunkSize) =>{
   
        if(!data){
            return "no data was provided"
        }

        
        const active = activeId === undefined ? data[0].id : activeId
        const size = chunkSize === null ? 9 : chunkSize

        const paginate = (activeIndex, direction) => wrap(0, data.length, activeIndex + direction) 
        
        const sliderData = data.reduce((prev, curr) =>{
                prev.activeId = active
                prev.pages = chunk(data, size)
                prev.activeIndex = data.findIndex(card => card.id === activeId)
                prev.paginate =(direction)=>paginate(prev.activeIndex, direction)
                prev.activeMedia = data[prev.activeIndex]
                prev.jump = (direction) => prev.paginate(direction)
                prev.next = { ...data[prev.paginate(1)], direction: 1}
                prev.prev = {...data[prev.paginate(-1)], direction: -1}
                prev.currentPage = prev.pages.findIndex(page => page.find(page=> page.id.includes(prev.activeId)))
                prev.currentPageItems = prev.pages[prev.currentPage]
                return prev
            },initialValue)

    return {data, ...sliderData}

    }