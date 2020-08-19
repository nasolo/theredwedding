import { createAction, nanoid } from '@reduxjs/toolkit'
import HEADER_CONSTANTS from './constants'

const {
    PAGINATE_NEXT,
    PAGINATE_PREV,
    REQUEST_CARDS,
    RECEIVE_CARDS,
    DIRECTION,
    PAGE,
    INVALID_CARD_REQUEST,
    SET_CURRENT_CARD_ID,
    UPDATE_CAROUSEL_DATA
} = HEADER_CONSTANTS



export const direction = createAction(DIRECTION)
export const nextCardById = createAction(PAGINATE_NEXT)
export const setCurrentCardById = createAction(SET_CURRENT_CARD_ID)
export const prevCardById = createAction(PAGINATE_PREV)
export const page = createAction(PAGE)
export const requrestCards = createAction(REQUEST_CARDS)

export const updateCarouselData = createAction(UPDATE_CAROUSEL_DATA)

export const receiveCards = createAction(RECEIVE_CARDS,  function prepare(json){
 
    return{
        payload:{
            receivedAt: Date.now(),
            id: nanoid(),
            cards: json.map((card, position) => {
                return {
                    ...card,
                    position: position,
                    id: nanoid()
                }
            })
        }

    }
})

export const invalidCardRequest = createAction(INVALID_CARD_REQUEST)

