
import Axios from 'axios'
import { wrap } from "@popmotion/popcorn";
import HEADER_CONSTANTS from './constants';
import { sliderHandler } from '../../../utils/selectors/handleSlide'

import{ requrestCards, 
        receiveCards, 
        invalidCardRequest, 
        nextCardById, 
        prevCardById, 
        setCurrentCardById
    } from './actions'


    const { SUCCESS, PENDING, ERROR, API } = HEADER_CONSTANTS


export const FETCH_HEADER_CONFIG = {
        reducer: "header",
        type: API,
        url: "data/headerCards.json",
        payload: {
            SUCCESS,
            PENDING,
            ERROR,
        actions: {
            SUCCESS: receiveCards,
            PENDING: requrestCards,
            ERROR: invalidCardRequest
        }
    }
}

const getCard = ( state, key ) => state[key]

export const setActiveCardId = (card) => {
    return(dispatch, getState) => {
        const { activeCardId } = getCard(getState(), "header")
        const active = activeCardId === card.id
        return  !active && dispatch(setCurrentCardById(card))
    }
}

export const handleChevrons = (type) => {
    return (dispatch, getState) => {
        
        const { activeCardId, cards} = getState().header
        
        const { next, prev } = sliderHandler(cards, activeCardId)
        
        switch(type){
            case 'leftChevron': 
                return dispatch(prevCardById(next))
            case 'rightChevron': 
                return dispatch(nextCardById(prev))
            default: 
                return dispatch(setCurrentCardById(activeCardId))
        }
    }
}

