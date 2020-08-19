import { createReducer, createNextState } from '@reduxjs/toolkit'
import allActions from './actions'
import appInitialState from '../../../root/initialState'

const {
    fetchTestimonials,
    fetchError,
    receiveTestimonies,
    setActiveQuoteId
} = allActions

const testimonials = createReducer(appInitialState.testimonials, {
    [receiveTestimonies]: createNextState(
        (testimonies, action)=>{

            testimonies.isFetching = false
            testimonies.didInvalidate = false
            testimonies.lastUpdate = action.payload.receivedAt
            testimonies.testimonies = action.payload.testimonies
            testimonies.id = action.payload.id
            testimonies.apiErrorMsg = null
            testimonies.activeQuoteId = action.payload.testimonies[0].id
            testimonies.bg = action.payload.bg
            testimonies.activeIndex = 0
            testimonies.direction = 0
        }),
        [fetchError]: createNextState(
            (err, action) =>{
                err.isFetching = false
                err.didInvalidate = true
                err.apiErrorMsg = action.payload
    
                return err
        }),
        [fetchTestimonials]: createNextState(
            (fetch, action) => {
                fetch.isFetching = true
                fetch.didInvalidate = false
                fetch.apiErrorMsg = null
    
                return fetch
        }),
        [setActiveQuoteId]: createNextState(
            (testimonies, action)=>{
                const { id, position, direction} = action.payload
                console.log(action.payload)

                testimonies.activeQuoteId = id
                testimonies.activeIndex = position
                testimonies.direction = direction
            }
        )
})

export default testimonials