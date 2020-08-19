import { createAction, nanoid } from '@reduxjs/toolkit'
import carouselConstants from './constants'


const {
    PAGINATE_NEXT,
    PAGINATE_PREV,
    SETACTIVEITEM,
    UPDATECAROUSELDATA
} = carouselConstants

export const paginateNext = createAction(PAGINATE_NEXT)
export const paginatePrev = createAction(PAGINATE_PREV)
export const setActiveItem = createAction(SETACTIVEITEM)
export const updateCarouselData = createAction(UPDATECAROUSELDATA)


export default {
    paginateNext,
    paginatePrev,
    setActiveItem,
    updateCarouselData
}