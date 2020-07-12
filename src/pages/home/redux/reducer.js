import { createReducer } from '@reduxjs/toolkit'
import {requrestCards, receiveCards, nextCardById, prevCardById, setCurrentCardById, direction} from './actions'
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
        const { id, index } = action.payload
        return {
            ...state,
            direction: 1,
            activeCardIndex: index,
            activeCardId: id
        }
    },
    [prevCardById]: (state, action) => {
        const { id, index } = action.payload
        return {
            ...state,
                direction: -1,
                activeCardIndex: index,
                activeCardId: id

        }
    },
    [setCurrentCardById]: (state, action) =>{
        
        const { id, index } = action.payload
        const { activeCardIndex } = state
        const newDirection = index > activeCardIndex ? 1 : -1

        return {
            ...state,
            direction: newDirection,
            activeCardIndex: index,
            activeCardId: id
        }
    }


})

export default header