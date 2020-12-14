import { createReducer, createNextState } from '@reduxjs/toolkit'
import appInitialState from '../../../root/initialState'
import allActions from './actions'

const {
    fetchFavourites,
    errorFavoutires,
    receiveFavoutires,
    addFavourite,
    removeFavourite
} = allActions

const favourites = createReducer(appInitialState.favourites, {
    [fetchFavourites]: createNextState(
        (fetching, action)=> {
            const api = {
                isFetching: true,
                didInvalidate: false,
                apiErrorMsg: null
            }

            fetching = {
                api: { ...api }
            }

            return fetching
        }
    ),
    [errorFavoutires]: createNextState(
        (error, action) => {
            const api = {
                isFetching: false,
                didInValidate: true,
                apiErrorMsg: action.payload
            }

            error = {
                api: { ...api }
            }

            return error
        }
    ),
    [receiveFavoutires]: createNextState(
        (received, action) => {
            
            const { payload: { receivedAt, id, favourites } } = action

            const api = {
                isFetching: false,
                didInvalidate: false,
                apiErrorMsg: null,
                receivedAt,
                id
            }

            received = {
                api: { ...api },
                favourites
            }

            return received

        }),
    [addFavourite]: createNextState(
        (state, action) => {
        
        const { payload } = action
        state.favourites.push(payload)
        
    }),
    [removeFavourite]: createNextState(
        (state, action) => {

        const { favourites } = state

        if(favourites.length < 1) return state

        const { payload } = action
        const filteredFavoutires = favourites.filter(fav => fav.id !== payload.id)

        
        state.favourites = filteredFavoutires
    })
})


export default favourites