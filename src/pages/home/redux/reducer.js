import { createReducer } from '@reduxjs/toolkit'
import {requrestCards, receiveCards, nextCardById, prevCardById, setCurrentCardById, updateCarouselData, direction} from './actions'
import appInitialState from '../../../root/initialState'

const header = createReducer(appInitialState.header, {

    [requrestCards]: (state, action) =>{
        return {
            ...state,
                isFetching: true,
                didValidate: false
        }
    },
    [receiveCards]: (state, action) => {
        return {
            ...state,
                isFetching: false,
                didValidate: false,
                lastUpdate: action.payload.receivedAt,
                cards: action.payload.cards,
                activeCardId: action.payload.cards[0].id,
                id: action.payload.id,
        }
    },
    [nextCardById]: (state, action) =>{
        const { id, index, direction } = action.payload

       

        return {
            ...state,
            direction: direction,
            activeCardIndex: index,
            activeCardId: id
        }
    },
    [prevCardById]: (state, action) => {
        const { id, index, direction } = action.payload

       
        return {
            ...state,
                direction: direction,
                activeCardIndex: index,
                activeCardId: id

        }
    },
    [setCurrentCardById]: (state, action) =>{
        
        const { id, index, direction } = action.payload
        const { activeCardIndex } = state
        
      

        return {
            ...state,
            direction: direction,
            activeCardIndex: index,
            activeCardId: id
        }
    },
    [updateCarouselData]: (state, action) =>({
        ...state,
        activeCardIndex: action.payload
    })


})

export default header