import { createReducer, createNextState } from '@reduxjs/toolkit'

import {
    fetchNavigation, 
    fetchNavigationError, 
    receivedNavigationData,
    setNewNavDirection
} from './actions'

import appInitialState from '../../../root/initialState'

const navigation = createReducer(appInitialState.navigation, {
    [receivedNavigationData]: createNextState(
        (navigation, action) =>{

            navigation.isFetching = false
            navigation.didInvalidate = false
            navigation.lastUpdate = action.payload.receivedAt
            navigation.links = action.payload.links
            navigation.social = action.payload.social
            navigation.brand = action.payload.brand
            navigation.id = action.payload.id
            navigation.copyright = action.payload.copyright
            navigation.apiErrorMsg = null

            return navigation
        }),
        [fetchNavigationError]: createNextState(
            (err, action) =>{
                err.isFetching = false
                err.didInvalidate = true
                err.apiErrorMsg = action.payload

                return err
        }),
        [fetchNavigation]: createNextState(
            (fetch, action) => {
                fetch.isFetching = true
                fetch.didInvalidate = false
                fetch.apiErrorMsg = null

                return fetch
        }),
        [setNewNavDirection]: createNextState(
            (direction, action) => {
                direction.direction = action.payload
            }
        )
})


export default navigation