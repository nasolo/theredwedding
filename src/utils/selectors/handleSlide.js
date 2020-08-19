import { wrap } from "@popmotion/popcorn";
import chunk from 'lodash/chunk'
import { nanoid } from "@reduxjs/toolkit";




export const sliderHandler = (data, active, chunkSize) =>{
   
        if(!data){
            return "no data was provided"
        }

        
        const wasActiveIndexGiven = active === undefined
        const wasChunkSizeGiven = chunkSize === undefined
        
        const activeIndex =  wasActiveIndexGiven ? 0 : active
        const activeData = wasActiveIndexGiven ? data[0] : data[activeIndex] 
        const size = wasChunkSizeGiven ? 9 : chunkSize
        const pages = chunk(data, size)
        const paginate = (direction) => wrap(0, data.length, activeIndex + direction)
        const currentPage = pages.findIndex(page => page.find(page => page === activeData))
        
        const sliderData = {
                
                pages,
                activeIndex: activeIndex,
                paginate: (direction)=>paginate(activeIndex, direction),
                activeItem: data[activeIndex],
                jump: (direction) => paginate(direction),
                next: {
                    activeIndex: paginate(1), 
                    direction: 1
                },
                prev: {
                    activeIndex: paginate(-1), 
                    direction: -1
                },
                currentPage,
                currentPageItems: pages[currentPage]
            }

    return {data, ...sliderData}

    }